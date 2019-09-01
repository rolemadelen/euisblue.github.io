---
layout: post
title: "[Design] 래스터와 벡터 이미지"
ref: comp-raster-and-vector
date: 2019-07-01 23:59:00
categories: Computer
lang: ko
---

## 목차
- [래스터 이미지](#raster)
- [벡터 이미지](#vector)
- [참조](#ref)
<hr />
<br />

## 래스터(Raster) 이미지 <a id="raster"></a>
**래스터 이미지**는 수백개의 정사각형의 점들, 또는 픽셀(pixel), 로 구성되어진 
이미지를 말하며 흔히 <br />비트맵(bitmap) 이라고도 불린다. 픽셀이 많으면 많을수록 더
자연스러운 색감과 그림을 나타낼 수 있으나 각각의 픽셀 정보를 모두 저장해야 하기 때문에
파일의 용량이 커지게 된다. 용량은 크지만 모든 정보를 기억하고 있기 때문에 그래픽 
처리 시간이 빠른 편이여서 고해상도의 그림을 나타낼때 쓰인다.

래스터 이미지의 경우 확장성(scalability)가 뛰어나지는 않다. 이미지를 확대할 경우 픽셀 하나하나가 
보이게되어 결과적으로 이미지의 질이 나빠지게 된다. 

[![Bitmap circle](/assets/images/computer/raster-vector/bitmap.png)](https://www.pixilart.com) <br />
[pixel art online editor](https://www.pixilart.com/)

<br />
## 벡터(Vector) 이미지 <a id="vector"></a>
**벡터 이미지**는 점과 점 사이의 곡선으로 구성되어져 있다. 래스터 이미지와는 다르게 점과 점
사이의 모든 정보를 저장하지 않고 기본적인 점들의 위치만을 저장하면 되기에 파일의 용량은 작은 편이다.
하지만 모든 벡터 이미지는 **래스터화(rasterization)**의 작업을 거치는 랜더링 시간이 추가로 
필요하기 때문에 그래픽 처리 시간이 오래 걸린다. 그런 이유로 벡터 이미지는 로고 디자인 또는 
간단한 아이콘을 나타낼 때 쓰인다.

벡터 이미지의 경우 확장성(scalability)가 뛰어나 이미지를 확대해도 원본의 색감또는 유연함을 
그대로 유지한다.

[![vector circle](/assets/images/computer/raster-vector/vector-map.png)](https://vectr.com/) <br />
[vector art online editor](https://vectr.com/)

<br />
## 참조 <a id="ref"></a>
- [벡터와 래스터 이미지](https://wacomkoreablog.com/624)
