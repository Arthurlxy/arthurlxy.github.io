[Welcome to my homepage!](https://arthurlxy.github.io/)

## Visit logging

1. Start the logger with `npm run visit-logger` (default port `4001`).
2. Set `visit_logger.endpoint` in `_config.yml` to your logger URL, for example `http://localhost:4001`.
3. Logs are written to `logs/visits.log` in JSONL format.
4. Visit stats are available at `GET /stats` on the logger service.
