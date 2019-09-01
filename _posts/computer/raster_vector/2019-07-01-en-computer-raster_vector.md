---
layout: post
title: "[Design] Raster and Vector Image"
ref: comp-raster-and-vector
date: 2019-07-01 23:59:00
categories: Computer
lang: en
---

## Contents
- [Raster Image](#raster)
- [Vector Image](#vector)
- [Reference](#ref)
<hr />
<br />

## Raster Image <a id="raster"></a>
**Raster** means images are composed of hundreds and thousands of small dots or
_pixels_ to represent colors, shades, and etc. Bitmaps are what often people use to refer raster
images. The more pixels we use, better the quality of an image becomes but the size of the file
becomes larger because information about every pixels must be stored and read when load.
Raster images are huge in size but have faster processing time that its normally used to
represent high quality images with lots of different colors.

Because an image is made up of pixels, it has bad <em>scalability</em> meaning you 
cannot expect to have same quality when an image is expanded or zoomed in.

[![Bitmap circle](/assets/images/computer/raster-vector/bitmap.png)](https://www.pixilart.com) <br />
[pixel art online editor](https://www.pixilart.com/)

<br /> 
## Vector Image <a id="vector"></a>
**Vector** means an image is made up of curvers and smooth lines between two points.
Unlike raster images, it only saves information about coordinates of fundamental points so the size
of an image is small. However, all vecter image must go through a process of <em>rasterization</em>
so it takes longer time to process due to additional time used in rendering. Because of this reason,
vector images are normally used for logo designs or simple icons.

Vector images have greater scalability than the raster image. 
When the image is expanded or zoomed in, it still maintains the original quality of the image.
That's why logo designs are done with vector images because you want your customers to recognize 
and be able to see the logo clearly whether its big or small.

[![vector circle](/assets/images/computer/raster-vector/vector-map.png)](https://vectr.com/) <br />
[vector art online editor](https://vectr.com/)

<br />
## Reference <a id="ref"></a>
- [Vector and Raster image](https://wacomkoreablog.com/624)
