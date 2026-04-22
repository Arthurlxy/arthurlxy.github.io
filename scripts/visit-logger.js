#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const http = require("http");
const { URL } = require("url");

const PORT = Number(process.env.VISIT_LOGGER_PORT || 4001);
const LOG_PATH = process.env.VISIT_LOGGER_FILE || path.join(__dirname, "..", "logs", "visits.log");

const LOG_DIR = path.dirname(LOG_PATH);
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

const PIXEL_GIF = Buffer.from(
  "R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=",
  "base64"
);

function getSource(referrer) {
  if (!referrer) {
    return "direct";
  }

  try {
    return new URL(referrer).hostname || "direct";
  } catch (_error) {
    return "unknown";
  }
}

function getIpAddress(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }

  return req.socket.remoteAddress || "";
}

function appendVisitLog(entry) {
  fs.appendFile(LOG_PATH, JSON.stringify(entry) + "\n", function (err) {
    if (err) {
      console.error("Failed to append visit log:", err);
    }
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function parseStatsFromLog() {
  const stats = {
    totalVisits: 0,
    bySource: {}
  };

  if (!fs.existsSync(LOG_PATH)) {
    return stats;
  }

  const raw = fs.readFileSync(LOG_PATH, "utf8");
  const lines = raw.split("\n");

  for (const line of lines) {
    if (!line) {
      continue;
    }

    try {
      const visit = JSON.parse(line);
      const source = visit.source || "unknown";

      stats.totalVisits += 1;
      stats.bySource[source] = (stats.bySource[source] || 0) + 1;
    } catch (_error) {
      // Ignore malformed lines.
    }
  }

  return stats;
}

const server = http.createServer(function (req, res) {
  const requestUrl = new URL(req.url, "http://localhost");

  if (requestUrl.pathname === "/visit.gif") {
    const referrer = requestUrl.searchParams.get("referrer") || req.headers.referer || "";
    const entry = {
      ts: new Date().toISOString(),
      pagePath: requestUrl.searchParams.get("path") || "",
      pageTitle: requestUrl.searchParams.get("title") || "",
      source: getSource(referrer),
      referrer,
      userAgent: req.headers["user-agent"] || "",
      ip: getIpAddress(req)
    };

    appendVisitLog(entry);

    res.writeHead(200, {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "Access-Control-Allow-Origin": "*"
    });
    res.end(PIXEL_GIF);
    return;
  }

  if (requestUrl.pathname === "/stats") {
    const stats = parseStatsFromLog();
    sendJson(res, 200, stats);
    return;
  }

  if (requestUrl.pathname === "/healthz") {
    sendJson(res, 200, { ok: true });
    return;
  }

  sendJson(res, 404, { error: "Not found" });
});

server.listen(PORT, function () {
  console.log(`Visit logger listening on port ${PORT}`);
  console.log(`Writing logs to ${LOG_PATH}`);
});
