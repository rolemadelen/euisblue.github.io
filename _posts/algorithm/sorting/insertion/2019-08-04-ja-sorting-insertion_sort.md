---
layout: post
title: "挿入ソート・Insertion Sort"
ref: algorithm-insertion-sort
date: 2019-08-04 18:08:00
categories: Algorithm
tags: sorting
lang: ja
---

## 紹介 
挿入ソート（insertion sort）は整列されている前の部分の要素と比べながら挿入する位置を<br>
探すアルゴリズムだ。

みんな生きながら本の整理をしたことが一度ぐらいはあると思う。
普通本を整理するとき, 隣にある本を持って大きさを一個ずつ比べながらあたり位置に挿入するんだけど、<br>
この方法（アルゴリズム）がまさに挿入ソートと同じだ。

このアルゴリズムはもう日常に使っているなので、わかりやすいと思う。

<div class="divider"></div>

## 整列過程
挿入ソートの場合二番目の要素（`arr[1]`）から始める。

![insertion sort](/assets/images/algorithm/sorting/insertion_sort_ja.png)

<div class="divider"></div>

## 時間複雑度 
 - 比較回数
   * 最高の場合一度の比較だけで挿入する位置を探すのができる。<br />
   1 + 1 + ... + 1 → **Ω(n)**
   * 最悪の場合比べる数字が増え、結局全要素と比べる。 <br />
   1 + 2 + ... + (n-2) + (n-1) = n\*(n-1)/2 → **O(n<sup>2</sup>)**

 - 交換回数
	* 最高の場合挿入する位置をすぐ探す：**Ω(n)**.
	* 最悪の場合比べるときに交換する。 <br />
   1 + 2 + ... + (n-2) + (n-1) = n\*(n-1)/2 →  **O(n<sup>2</sup>)**

<div class="divider"></div>

## 実装
左にある値が今の値より小さいまで、またはインデックス０まで一間ずつ今の地を左に押せばいい。

```c
void insertionSort(int arr[])
{
	for(int i=1; i<SIZE; ++i)
	{
		int index = i;
		int key = arr[index];

		while(index > 0 && key < arr[index-1])
		{
			arr[index] = arr[index-1];
			--index;
		}

		arr[index] = key;
	}
}
```

<div class="divider"></div>

## 参照 <a id="ref"></a>
- [[알고리즘] 삽입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
