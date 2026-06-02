---
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
.xgrid { margin: 1.1em 0 1.6em; }
.xgrid.masonry { display: flex; gap: 16px; align-items: flex-start; }
.xcol { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 16px; }
.xcard {
  margin-bottom: 16px;
  border-radius: 12px; overflow: hidden;
  background: #fff; border: 1px solid #eaedf1;
  box-shadow: 0 2px 8px rgba(20,30,50,0.06);
  transition: transform .18s ease, box-shadow .18s ease;
}
.masonry .xcard { margin-bottom: 0; }
.xcard:hover { transform: translateY(-4px); box-shadow: 0 12px 26px rgba(20,30,50,0.14); }
.xthumb { display: block; overflow: hidden; background: #f4f6f8; line-height: 0; }
.xthumb img { width: 100%; height: auto; display: block; transition: transform .35s ease; }
.xcard:hover .xthumb img { transform: scale(1.04); }
.xbody { padding: 11px 13px 13px; }
.xpills { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 6px; }
.xtitle { font-weight: 700; font-size: 0.95em; line-height: 1.3; color: #18202b; margin-bottom: 5px; }
.xdesc { font-size: 0.83em; line-height: 1.4; color: #6a7480; margin-bottom: 8px; }
.xlinks a {
  display: inline-block; margin-right: 6px; font-size: 0.81em; font-weight: 600;
  color: #1f4068; text-decoration: none; padding: 2px 9px; border-radius: 5px;
  background: #eef2f8; transition: background .15s ease;
}
.xlinks a:hover { background: #dde6f2; }
.pill { display:inline-block; padding:2px 9px; border-radius:5px; font-size:0.72em; font-weight:700; letter-spacing:0.02em; color:#fff; }
.pill-cvpr{background:#1f4068;} .pill-iccv{background:#c0392b;} .pill-eccv{background:#239b56;}
.pill-neurips{background:#d35400;} .pill-wacv{background:#7d3c98;} .pill-icassp{background:#16a085;}
.pill-report{background:#444;} .pill-blog{background:#2c3e50;} .pill-preprint{background:#95a5a6;}
.pill-patent{background:#34495e;} .pill-os{background:#2980b9;} .pill-oral{background:#e67e22;}
.simple-list { list-style: none; padding-left: 0; line-height: 1.75; }
.simple-list .pill { vertical-align: middle; margin-right: 7px; }
</style>

Selected work on **multimodal understanding**, **multimodal foundation models**, and **video understanding** — spanning VLMs, multimodal LLMs, and vision–language–action (VLA) models.
For the complete list, see my [Google Scholar](https://scholar.google.com/citations?user=xMnAUmkAAAAJ&hl=en).

## Foundation Models & Technical Reports

<div class="xgrid">

  <div class="xcard">
    <a class="xthumb" href="https://www.pi.website/blog/pi07"><img src="/images/news/pi07-hero.png" alt="π0.7"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-report">PI · 2026</span></div>
      <div class="xtitle">π0.7: A Steerable Model with Emergent Capabilities</div>
      <div class="xdesc">Generalist robot foundation model with emergent compositional capabilities across dexterous manipulation tasks and robot platforms.</div>
      <div class="xlinks"><a href="https://www.pi.website/blog/pi07">Blog</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://cdn.amazon.science/c5/3d/84514a224666b5be6de4b43ef4aa/nova-2-0-technical-report2.pdf"><img src="/images/publication/fig-nova2.png" alt="Amazon Nova 2"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-report">Amazon · 2025</span></div>
      <div class="xtitle">Amazon Nova 2</div>
      <div class="xdesc">Multimodal reasoning and generation foundation models.</div>
      <div class="xlinks"><a href="https://cdn.amazon.science/c5/3d/84514a224666b5be6de4b43ef4aa/nova-2-0-technical-report2.pdf">Report</a><a href="https://www.aboutamazon.com/news/aws/aws-agentic-ai-amazon-bedrock-nova-models">Blog</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://cdn.amazon.science/ba/f2/d0af272848748a24ba6ba45af3a7/nova-mme-technical-report-14.pdf"><img src="/images/publication/fig-novamme.png" alt="Nova Multimodal Embedding"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-report">Amazon · 2025</span></div>
      <div class="xtitle">Nova Multimodal Embedding</div>
      <div class="xdesc">Embeddings for agentic RAG and semantic search across video, image, document, and audio.</div>
      <div class="xlinks"><a href="https://cdn.amazon.science/ba/f2/d0af272848748a24ba6ba45af3a7/nova-mme-technical-report-14.pdf">Report</a><a href="https://aws.amazon.com/blogs/aws/amazon-nova-multimodal-embeddings-now-available-in-amazon-bedrock/">Blog</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://aws.amazon.com/blogs/aws/amazon-nova-premier-our-most-capable-model-for-complex-tasks-and-teacher-for-model-distillation/"><img src="/images/publication/fig-premier.png" alt="Amazon Nova Premier"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-report">Amazon · 2025</span></div>
      <div class="xtitle">Amazon Nova Premier</div>
      <div class="xdesc">Most capable Nova model for complex tasks and a teacher for model distillation.</div>
      <div class="xlinks"><a href="https://aws.amazon.com/blogs/aws/amazon-nova-premier-our-most-capable-model-for-complex-tasks-and-teacher-for-model-distillation/">Blog</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://cdn.amazon.science/96/7d/0d3e59514abf8fdcfafcdc574300/nova-tech-report-20250317-0810.pdf"><img src="/images/publication/fig-nova1.png" alt="Amazon Nova 1"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-report">Amazon · 2024</span></div>
      <div class="xtitle">Amazon Nova 1</div>
      <div class="xdesc">First-generation Nova family of multimodal foundation models.</div>
      <div class="xlinks"><a href="https://cdn.amazon.science/96/7d/0d3e59514abf8fdcfafcdc574300/nova-tech-report-20250317-0810.pdf">Report</a></div>
    </div>
  </div>

</div>

## Selected Publications

<div class="xgrid">

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2604.10527"><img src="/images/publication/fig-storm.png" alt="STORM"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-cvpr">CVPR 2026</span></div>
      <div class="xtitle">STORM: End-to-End Referring Multi-Object Tracking in Videos</div>
      <div class="xdesc">Unified MLLM that jointly performs grounding and tracking; introduces STORM-Bench.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2604.10527">Paper</a><a href="https://github.com/amazon-science/storm-referring-multi-object-grounding">Code</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2602.17869"><img src="/images/publication/fig-compact.png" alt="Compact Video Representations"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-wacv">WACV 2026</span></div>
      <div class="xtitle">Learning Compact Video Representations for Efficient Long-form Video Understanding in LMMs</div>
      <div class="xdesc">Compact representations for efficient long-form video understanding in large multimodal models.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2602.17869">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://openaccess.thecvf.com/content/ICCV2025/papers/Zhang_SemiVisBooster_Boosting_Semi-Supervised_Learning_for_Fine-Grained_Classification_through_Pseudo-Label_Semantic_ICCV_2025_paper.pdf"><img src="/images/publication/fig-svb.png" alt="SemiVisBooster"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-iccv">ICCV 2025</span></div>
      <div class="xtitle">SemiVisBooster: Semi-Supervised Learning via Pseudo-Label Semantic Guidance</div>
      <div class="xdesc">Text-guided semi-supervised learning for fine-grained classification.</div>
      <div class="xlinks"><a href="https://openaccess.thecvf.com/content/ICCV2025/papers/Zhang_SemiVisBooster_Boosting_Semi-Supervised_Learning_for_Fine-Grained_Classification_through_Pseudo-Label_Semantic_ICCV_2025_paper.pdf">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2410.23782"><img src="/images/publication/fig-vtm.png" alt="Video Token Merging"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-neurips">NeurIPS 2024</span></div>
      <div class="xtitle">Video Token Merging for Long Video Understanding</div>
      <div class="xdesc">Learnable token merging for long-form video transformers — large memory and throughput wins.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2410.23782">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2408.00759"><img src="/images/publication/fig-tgm.png" alt="Text-Guided Video MAE"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-eccv">ECCV 2024</span></div>
      <div class="xtitle">Text-Guided Video Masked Autoencoder</div>
      <div class="xdesc">Video MAE with text-guided masking and joint video–text contrastive learning.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2408.00759">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2308.12962"><img src="/images/publication/fig-mgm.png" alt="Motion-Guided Masking"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-iccv">ICCV 2023</span></div>
      <div class="xtitle">Motion-Guided Masking for Spatiotemporal Representation Learning</div>
      <div class="xdesc">Motion-aware masking for video self-supervised learning.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2308.12962">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2303.14865"><img src="/images/publication/fig-fdt.png" alt="Finite Discrete Tokens"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-cvpr">CVPR 2023</span></div>
      <div class="xtitle">Revisiting Multimodal Representation in Contrastive Learning</div>
      <div class="xdesc">CLIP-style pretraining with finite discrete tokens to close vision–language granularity gaps.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2303.14865">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2104.00969"><img src="/images/publication/fig-tuber.png" alt="TubeR"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-cvpr">CVPR 2022</span><span class="pill pill-oral">Oral</span></div>
      <div class="xtitle">TubeR: Tubelet Transformer for Video Action Detection</div>
      <div class="xdesc">End-to-end transformer for spatiotemporal action detection — no detector, no proposals.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2104.00969">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2204.00746"><img src="/images/publication/fig-ssrt.png" alt="SSRT"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-cvpr">CVPR 2022</span><span class="pill pill-oral">Oral</span></div>
      <div class="xtitle">SSRT: Semantic & Spatial Refined Transformer for HOI Detection</div>
      <div class="xdesc">What to look at and where — refined transformer for human–object interaction detection.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2204.00746">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/pdf/2203.16755.pdf"><img src="/images/publication/fig-stochbp.png" alt="Stochastic Backpropagation"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-cvpr">CVPR 2022</span><span class="pill pill-oral">Oral</span></div>
      <div class="xtitle">Stochastic Backpropagation for Video Models</div>
      <div class="xdesc">Memory-efficient video training via stochastic backprop / temporal gradient dropout.</div>
      <div class="xlinks"><a href="https://arxiv.org/pdf/2203.16755.pdf">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2104.11746"><img src="/images/publication/fig-vidtr.png" alt="VidTr"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-iccv">ICCV 2021</span></div>
      <div class="xtitle">VidTr: Video Transformer Without Convolutions</div>
      <div class="xdesc">Convolution-free video transformer architecture.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2104.11746">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2107.03377"><img src="/images/publication/fig-lstr.png" alt="LSTR"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-neurips">NeurIPS 2021</span><span class="pill pill-oral">Spotlight</span></div>
      <div class="xtitle">LSTR: Long Short-Term Transformer for Online Action Detection</div>
      <div class="xdesc">Long/short-term temporal modeling for streaming action detection.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2107.03377">Paper</a></div>
    </div>
  </div>

  <div class="xcard">
    <a class="xthumb" href="https://arxiv.org/abs/2007.11040"><img src="/images/publication/fig-dtm.png" alt="Directional Temporal Modeling"></a>
    <div class="xbody">
      <div class="xpills"><span class="pill pill-eccv">ECCV 2020</span><span class="pill pill-oral">Spotlight</span></div>
      <div class="xtitle">Directional Temporal Modeling for Action Recognition</div>
      <div class="xdesc">Making convolutions temporal-aware.</div>
      <div class="xlinks"><a href="https://arxiv.org/abs/2007.11040">Paper</a></div>
    </div>
  </div>

</div>

## Patents

<ul class="simple-list">
  <li><span class="pill pill-patent">US 2026</span><strong>US12526485B1</strong> — Content-aware graphical subtitles.</li>
  <li><span class="pill pill-patent">US 2025</span><strong>US12387097B2</strong> — Efficient video processing via temporal progressive learning.</li>
  <li><span class="pill pill-patent">US 2022</span><strong>US11423265B1</strong> — Content moderation using object detection and image classification.</li>
</ul>

## Open Source

<ul class="simple-list">
  <li><span class="pill pill-os">GluonCV</span> Core contributor; deep-learning toolkit for computer vision with 5.9K+ GitHub stars. <a href="https://pypi.org/project/gluoncv-torch/">PyPI</a></li>
  <li><span class="pill pill-os">GluonMM</span> Core contributor; a multimodal modeling toolkit. <a href="https://github.com/amazon-research/gluonmm">GitHub</a></li>
  <li><span class="pill pill-os">TubeR</span> Official implementation of the Tubelet Transformer for video action detection. <a href="https://arxiv.org/abs/2104.00969">Paper</a></li>
  <li><span class="pill pill-os">STORM-Bench</span> Benchmark and code for MLLM-based referring multi-object tracking. <a href="https://github.com/amazon-science/storm-referring-multi-object-grounding">GitHub</a></li>
</ul>

<script>
(function () {
  function layout(grid) {
    if (!grid._cards) grid._cards = Array.prototype.slice.call(grid.querySelectorAll('.xcard'));
    var cards = grid._cards;
    if (!cards.length) return;
    var ncols = window.innerWidth <= 540 ? 1 : 2;
    grid.innerHTML = '';
    grid.classList.add('masonry');
    var cols = [];
    for (var i = 0; i < ncols; i++) {
      var c = document.createElement('div');
      c.className = 'xcol';
      grid.appendChild(c);
      cols.push(c);
    }
    cards.forEach(function (card) {
      var shortest = cols[0];
      for (var j = 1; j < cols.length; j++) {
        if (cols[j].offsetHeight < shortest.offsetHeight) shortest = cols[j];
      }
      shortest.appendChild(card);
    });
  }
  function run() {
    var grids = document.querySelectorAll('.xgrid');
    for (var i = 0; i < grids.length; i++) layout(grids[i]);
  }
  if (document.readyState === 'complete') run();
  else window.addEventListener('load', run);
  var rt;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(run, 250); });
})();
</script>
