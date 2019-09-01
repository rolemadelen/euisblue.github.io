---
layout: post
title: "Design・「Raster」と「Vector」イメージ"
ref: comp-raster-and-vector
date: 2019-07-01 23:59:00
categories: Computer
lang: ja
---

## 目次
- [ラスター「raster」イメージ](#raster)
- [ベクター「vector」イメージ](#vector)
- [参照](#ref)
<hr />
<br />

## ラスター「raster」イメージ <a id="raster"></a>

**ラスターイメージ**とは数百個の正方形の点、またはピクセル「pixel」で構成されたイメージで通常はビットマップ「bitmap」と呼ばれる。ピクセルが多ければ多いほど、より自然な色感や絵を表すことができる。しかし、それぞれのピクセルの情報を全部貯蔵しなければならないので、ファイルの容量は大きくなる。容量は大きいが、すべての情報を記憶してるためグラフィックの処理時間が早い。そのため、高画質なイメージを表す時よく使われる。

ラスターイメージの場合、スケーラビリティ「scalability」はあまり良くない。イメージを拡大する場合それぞれのピクセルが全部見えて結果的にイメージの質が悪くなる。 

[![Bitmap circle](/assets/images/computer/raster-vector/bitmap.png)](https://www.pixilart.com) <br />
[pixel art online editor](https://www.pixilart.com/)

<br />
## ベクター「vector」イメージ <a id="vector"></a>

**ベクターイメージ**とは、点と点の間の曲線で構成されている。ラスターイメージとは違い、すべての点の情報を貯蔵せず、基本的な点たちの位置だけを貯蔵しているため容量が少ない。しかし、すべてのベクターイメージは「rasterization」というラスター化の作業を経るためグラフィックの処理時間が長くかかる。このためベクターイメージはロゴデザインや簡単なアイコンを表す時使う。

ベクターイメージの場合、スクーラビリチィが優れているのでイメージを拡大しても色感や質が原本のまま保たれる。

[![vector circle](/assets/images/computer/raster-vector/vector-map.png)](https://vectr.com/) <br />
[vector art online editor](https://vectr.com/)

<br />
## 参照 <a id="ref"></a>
- [ベクターとラスターの違い](https://wacomkoreablog.com/624)
