---
layout: post
title: "Algorithm・挿入ソート"
ref: algorithm-insertion-sort
date: 2019-09-26 18:08:00
categories: Algorithm
tags: sorting
lang: ja
---

# 目次
- [紹介](#concept)
- [整列過程](#example)
- [時間複雑度](#timecomp)
- [実装](#imp)
  * C
  * Ruby
- [関連記事](#related)	
- [参照](#ref)
<hr />
<br />

## 紹介 <a id="concept"></a>
挿入ソート（insertion sort）は整列されている前の部分の要素と比べながら挿入する位置を<br>
探すアルゴリズムだ。

みんな生きながら本の整理をしたことが一度ぐらいはあると思う。
普通本を整理するとき, 隣にある本を持って大きさを一個ずつ比べながらあたり位置に挿入するんだけど、<br>
この方法（アルゴリズム）がまさに挿入ソートと同じだ。

このアルゴリズムはもう日常に使っているなので、わかりやすいと思う。

<br />

## 整列過程 <a id="example"></a>
挿入ソートの場合二番目の要素（`arr[1]`）から始める。

![insertion sort](/assets/images/algorithm/sorting/insertion_sort_ja.png)

<br />

## 時間複雑度 <a id="timecomp"></a>
 - 比較回数
   * 最高の場合一度の比較だけで挿入する位置を探すのができる。<br />
   1 + 1 + ... + 1 → **Ω(n)**
   * 最悪の場合比べる数字が増え、結局全要素と比べる。 <br />
   1 + 2 + ... + (n-2) + (n-1) = n\*(n-1)/2 → **O(n<sup>2</sup>)**

 - 交換回数
	* 最高の場合挿入する位置をすぐ探す：**Ω(n)**.
	* 最悪の場合比べるときに交換する。 <br />
   1 + 2 + ... + (n-2) + (n-1) = n\*(n-1)/2 →  **O(n<sup>2</sup>)**

<br />

## 挿入ソート実装 <a id="imp"></a>
左にある値が今の値より小さいまで、またはインデックス０まで一間ずつ今の地を左に押せばいい。

### C言語
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

<br />

### Ruby
```ruby
def insertion_sort(arr)
    n = arr.size

    for i in (1 ... n)
        index = i
        key = arr[i]

        while index > 0 and key < arr[index-1]
            arr[index] = arr[index - 1]
            index -= 1
        end

        arr[index] = key
    end
end
```

<br />

## 関連記事  <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />

## 参照 <a id="ref"></a>
- [[알고리즘] 삽입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
