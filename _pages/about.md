---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
.sec-head {
  display: flex; align-items: center; gap: 10px;
  margin: 1.4em 0 0.7em; font-size: 1.35em; font-weight: 700; color: #1a1a1a;
}
.sec-head::after { content:""; flex:1; height:1px; background:#e6e8eb; }

/* Highlights */
.hl-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 0.5em;
}
.hl-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 6px 18px rgba(0,0,0,0.16);
  aspect-ratio: 16 / 10;
}
.hl-card video { width: 100%; height: 100%; object-fit: cover; display: block; }
.hl-cap {
  position: absolute; left: 0; right: 0; bottom: 0;
  padding: 0.9em 1em 0.8em; color: #fff;
  background: linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0));
}
.hl-cap .t { font-size: 1.05em; font-weight: 700; margin: 0 0 0.1em; }
.hl-cap .s { font-size: 0.85em; opacity: 0.9; margin: 0; }
.hl-cap a { color: #ffd166; font-weight: 600; text-decoration: none; }
.hl-tag {
  position: absolute; top: 10px; left: 10px; z-index: 2;
  padding: 2px 9px; border-radius: 5px; font-size: 0.72em; font-weight: 700;
  letter-spacing: 0.03em; color: #fff; background: rgba(31,64,104,0.92);
}

/* News */
.news-list { list-style: none; padding-left: 0; margin: 0.3em 0 0.5em; }
.news-list li { padding: 0.3em 0; border-bottom: 1px solid #f1f1f1; line-height: 1.45; font-size: 0.96em; }
.news-list li:last-child { border-bottom: none; }
.nd {
  display: inline-block; width: 42px; margin-right: 8px;
  color: #9aa3b0; font-size: 0.85em; font-weight: 700;
  font-variant-numeric: tabular-nums;
}

/* Selected papers cards */
.pub-list { list-style: none; padding-left: 0; margin: 0.4em 0 0.6em; }
.pub-card { display: flex; gap: 15px; align-items: flex-start; padding: 0.8em 0; border-bottom: 1px solid #eee; }
.pub-card:last-child { border-bottom: none; }
.pub-thumb {
  flex: 0 0 140px; width: 140px; height: 84px; border-radius: 7px; overflow: hidden;
  background: #f4f6f8; border: 1px solid #e6e8eb; transition: transform .18s ease, box-shadow .18s ease;
}
.pub-thumb:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.14); }
.pub-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.pub-thumb.placeholder {
  display:flex; align-items:center; justify-content:center; text-align:center; padding:4px;
  font-size: 0.8em; font-weight: 700; color: #5a6675;
  background: linear-gradient(135deg, #eef2f7, #dde4ec);
}
.pub-body { flex: 1; min-width: 0; }
.pub-title { font-weight: 600; color: #1a1a1a; }
.pub-desc { color: #555; font-size: 0.93em; }
.pub-links a { display:inline-block; margin-right:8px; font-size:0.85em; font-weight:600; text-decoration:none; color:#1f4068; border-bottom:1px dashed #1f4068; }

.pill { display:inline-block; padding:1px 8px; margin-right:6px; border-radius:4px; font-size:0.76em; font-weight:700; letter-spacing:0.02em; color:#fff; vertical-align:middle; }
.pill-cvpr{background:#1f4068;} .pill-iccv{background:#c0392b;} .pill-eccv{background:#239b56;}
.pill-neurips{background:#d35400;} .pill-wacv{background:#7d3c98;} .pill-blog{background:#2c3e50;}
.pill-report{background:#555;} .pill-oral{background:#e67e22; margin-left:-3px;}

@media (max-width: 640px) {
  .hl-grid { grid-template-columns: 1fr; }
  .pub-thumb { flex: 0 0 96px; width: 96px; height: 60px; }
}
</style>

## About

I am a Member of Technical Staff at [Physical Intelligence](https://www.physicalintelligence.company/), working on **π-family VLM and omni-model pre-training**.

Previously, I was a Principal Applied Scientist at Amazon AGI, where I led the team that built the **multimodal understanding capabilities** of the [Nova](https://cdn.amazon.science/c5/3d/84514a224666b5be6de4b43ef4aa/nova-2-0-technical-report2.pdf) family. Earlier, I was a Staff Research Scientist at ByteDance and a Senior Applied Scientist at AWS AI, shipping multimodal and video models in production. Ph.D. from Rutgers University (2018); B.Eng. from UESTC (2013).

My research centers on **multimodal understanding across domains**, with a deep focus on **video understanding** and a strong bias toward real-world impact.

<div class="sec-head">Highlights</div>

<div class="hl-grid">
  <div class="hl-card">
    <span class="hl-tag">π0.7 · Physical Intelligence</span>
    <video autoplay loop muted playsinline poster="/images/news/pi07-hero.png">
      <source src="https://website.pi-asset.com/pi07/shirt_folding_processed_no_overlay_compressed.mp4" type="video/mp4">
    </video>
    <div class="hl-cap">
      <p class="t">A Steerable Model with Emergent Capabilities</p>
      <p class="s">Generalist robot foundation model. <a href="https://www.pi.website/blog/pi07">Read the blog →</a></p>
    </div>
  </div>

  <div class="hl-card">
    <span class="hl-tag">TubeR · CVPR 2022 Oral</span>
    <video autoplay loop muted playsinline controls preload="auto" poster="/images/publication/fig-tuber.png">
      <source src="/images/videos/TubeR_Demo_web.mp4" type="video/mp4">
    </video>
    <div class="hl-cap">
      <p class="t">Tubelet Transformer for Video Action Detection</p>
      <p class="s">End-to-end spatiotemporal action detection. <a href="https://arxiv.org/abs/2104.00969">Paper →</a></p>
    </div>
  </div>
</div>

<div class="sec-head">News</div>

<ul class="news-list">
  <li><span class="nd">2026</span><span class="pill pill-blog">Blog</span> <strong>π0.7</strong> released — steerable generalist robot foundation model with emergent compositional capabilities. <a href="https://www.pi.website/blog/pi07">Blog</a></li>
  <li><span class="nd">2026</span><span class="pill pill-cvpr">CVPR</span> <strong>STORM</strong> — unified MLLM for referring multi-object tracking; ships with STORM-Bench. <a href="https://arxiv.org/abs/2604.10527">Paper</a> · <a href="https://github.com/amazon-science/storm-referring-multi-object-grounding">Code</a></li>
  <li><span class="nd">2026</span><span class="pill pill-wacv">WACV</span> <strong>Compact Video Representations</strong> for efficient long-form video understanding in LMMs. <a href="https://openaccess.thecvf.com/content/WACV2026/papers/Chen_Learning_Compact_Video_Representations_for_Efficient_Long-form_Video_Understanding_in_WACV_2026_paper.pdf">Paper</a></li>
  <li><span class="nd">2025</span><span class="pill pill-report">Nova</span> <strong>Nova 2</strong> and <strong>Nova Multimodal Embedding</strong> released at Amazon AGI. <a href="https://cdn.amazon.science/c5/3d/84514a224666b5be6de4b43ef4aa/nova-2-0-technical-report2.pdf">Nova 2</a> · <a href="https://cdn.amazon.science/ba/f2/d0af272848748a24ba6ba45af3a7/nova-mme-technical-report-14.pdf">MM-Embed</a></li>
  <li><span class="nd">2025</span><span class="pill pill-iccv">ICCV</span> <strong>SemiVisBooster</strong> — text-guided semi-supervised learning for fine-grained classification. <a href="https://openaccess.thecvf.com/content/ICCV2025/papers/Zhang_SemiVisBooster_Boosting_Semi-Supervised_Learning_for_Fine-Grained_Classification_through_Pseudo-Label_Semantic_ICCV_2025_paper.pdf">Paper</a></li>
  <li><span class="nd">2024</span><span class="pill pill-neurips">NeurIPS</span> <strong>Video Token Merging</strong> — efficient token reduction for long-form video. <a href="https://arxiv.org/abs/2410.23782">Paper</a></li>
  <li><span class="nd">2024</span><span class="pill pill-eccv">ECCV</span> <strong>Text-Guided Video MAE</strong> — masked video pretraining guided by language. <a href="https://arxiv.org/abs/2408.00759">Paper</a></li>
</ul>

See all work on the [Publications](/publications/) page or [Google Scholar](https://scholar.google.com/citations?user=xMnAUmkAAAAJ&hl=en).
