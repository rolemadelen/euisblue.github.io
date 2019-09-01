---
layout: post
title: "Algorithm・選択ソート"
ref: algorithm-selection-sort
date: 2019-08-01 09:51:00
categories: Algorithm
tags: sorting
lang: ja
---

# 目次
- [選択ソート](#concept)
- [時間複雑度](#timecomp)
- 実装
  * [C](#c)
  * [Python](#python)
- [関連記事](#related)
- [参照](#ref)
<hr />
<br />

## 選択ソート<a id="concept"></a>
選択ソート（英: selection sort）とは最小値（または最大値）を見つけて先頭に、次に２番目に小さい（または大きい）要素を見つけて２番目に置く。このようにn番目に小さい（大きい）要素を見つけてn番目に移動して整列するアルゴリズムだ。

<br />
![selection sort](/assets/images/algorithm/sorting/selection_sort.png)

<br />
## 時間複雑度 <a id="timecomp"></a>
`n`は配列の要素数だ。<br />

- 比較回数
  * 外部（`i`）ループ：`n-1`回繰り返す。
  * 内部（`j`）ループ：`i`番目の要素を`n-i`回の数字と比較する: <br />
  (n - 1) + (n - 2) + ... + 1 = n(n - 1) / 2 → **O(n<sup>2</sup>)**
- 交換回数
  * 内部ループが終わった後交換が行われるので、外部ループと同じように`n-1`回繰り返す。

<br />
## 選択ソート実装
ここでは、intの型の配列を選択ソートを使って小さい順に整列する。

### C言語 <a id="c"></a>
```c
void selectionSort(int arr[])
{
	for(int i=0; i<SIZE-1; ++i)
	{
		int minIndex = i;

		for(int j=i+1; j<SIZE; ++j)
		{
			if(arr[minIndex] > arr[j])
			{
				minIndex = j;
			}
		}

		int temp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = temp;
	}
}
```

<br />
### Python <a id="python"></a>
```python
def selectionSort(arr, n):
	for i in range(n-1):
		minIndex = i
		
		for j in range(i+1, n):
			if arr[minIndex] > arr[j]:
				minIndex = j

		temp = arr[minIndex]
		arr[minIndex] = arr[i]
		arr[i] = temp
```

<br />
実行結果：
```
Before Sorting
 9  3  5  6  1  7  4  8  6  1 

After Sorting
 1  1  3  4  5  6  6  7  8  9 
```

<br />
## 関連記事 <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## 参照 <a id="ref"></a>
- [선택 정렬(selection sort)이란?](https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html)
