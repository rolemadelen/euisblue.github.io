---
layout: post
title: "[Computer] Lossy and Lossless Compression"
ref: comp-lossy-loseless
date: 2019-07-02 15:20:00
categories: Computer
lang: en
---

## Contents
- [Lossy Compression](#lossy)
- [Lossless Compression](#loseless)
- [Reference](#ref)
<hr />
<br />

## Lossy Compression <a id="lossy"></a>
**Lossy Compression** is a process of compressing data that (intentionally) loses unnecessary data 
to reduce the size.
It seems bad idea to lose a data while compressing; however, lossy compression is used in lots of
places. 

`.mp3`, for example, is an audio file that uses lossy compression; it throws away parts of
an audio that cannot be heard by human ears. Also, video files like `.avi` throws away unused data 
and leave just enough amount of data that we wont feel anything wroing when we watch the video. 

[List of Lossy Compression Formats](https://namu.wiki/w/%EC%86%90%EC%8B%A4%20%EC%95%95%EC%B6%95%20%ED%8F%AC%EB%A7%B7): `jpeg`, `webp`, `heif`, `bpg`, `avif`, ...

<br />
## Loseless Compression <a  id="loseless"></a>
**Loseless Compression** is opposite of lossy compression. It compress and reduce the size but
maintains the original data with zero data loss.

How is it possible to reduce the size when compressed data has lost 0% of data? 
It has to do with source encoding.

<em>Source Encoding</em> is about converting given information source into digital format and 
compressing, and the goal is to use minimal number of bits to represent the orginal data.

For example, this 8 bits of message:`65666768`, can be converted and compressed into `abcd` which 
is only 4 bits long. We saved 4 bits and did not lose any original data. 

This is how lossless compression compresses data to reduce the size and keep the original 
information.

[List of Loseless Compression Formats](https://namu.wiki/w/%EB%AC%B4%EC%86%90%EC%8B%A4%20%EC%95%95%EC%B6%95%20%ED%8F%AC%EB%A7%B7): `zip`, `rar`, `7z`, `gz`, `bz2`, ...

<br />
## Reference <a id="ref"></a>
- [Shannon's source coding theorem](http://mat.hjg.com.ar/tic/img/Shannon%20Source%20Coding%20Theorem.pdf)
