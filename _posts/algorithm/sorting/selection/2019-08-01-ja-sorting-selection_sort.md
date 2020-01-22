---
layout: post
title: "選択ソート・Selection Sort"
ref: algorithm-selection-sort
date: 2019-08-01 09:51:00
categories: Algorithm
tags: sorting
lang: ja
---

## 選択ソート
選択ソート（英: selection sort）とは最小値（または最大値）を見つけて先頭に、次に２番目に小さい（または大きい）要素を見つけて２番目に置く。このようにn番目に小さい（大きい）要素を見つけてn番目に移動して整列するアルゴリズムだ。

<br />
![selection sort](/assets/images/algorithm/sorting/selection_sort.png)

<div class="divider"></div>

## 時間複雑度 
`n`は配列の要素数だ。<br />

- 比較回数
  * 外部（`i`）ループ：`n-1`回繰り返す。
  * 内部（`j`）ループ：`i`番目の要素を`n-i`回の数字と比較する: <br />
  (n - 1) + (n - 2) + ... + 1 = n(n - 1) / 2 → **O(n<sup>2</sup>)**
- 交換回数
  * 内部ループが終わった後交換が行われるので、外部ループと同じように`n-1`回繰り返す。

<div class="divider"></div>

## 実装
ここでは、intの型の配列を選択ソートを使って小さい順に整列する。

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

<div class="divider"></div>

## 参照 <a id="ref"></a>
- [선택 정렬(selection sort)이란?](https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html)
