---
layout: post
title: "挿入ソート「Insertion Sort」とは"
ref: algorithm-sort-insertion
date: 2020-06-12 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: ja
---

<div class="updated">
updated (2020-06-20): 記事の構造変更
</div>

## 選択ソート
- 少ない数のデータを整列するとき効率的なアルゴリズム。
- ほぼ整列されている時、最高の効率を発揮。
- カードゲームをする時、手の中のカードを並べ替える方法と似ている。
  + 新しいカードを並べ替えたカードと比較。
  + 新しいカードの数だけ繰り返す。

<img src="/assets/images/algorithm/sorting/insertion.png"> <br>
<span style="font-size:11px"><i>source: <a href="https://studyalgorithms.com/array/insertion-sort/#">studyalgorithm.com</a></i></span>

<div class="divider"></div>

## アルゴリズム要約
- 現在位置の値を`key`と呼ぶ。
- **2番目のデータから始め**。
- 前のデータより`key`が小さい場合、`key`と前のデータをswapする。
- 前にデータがないときまで、または`key`が前のデータより大きい時まで繰り返す。

<div class="divider"></div>

## 選択ソートC言語実装 

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 100

void insertionSort(int arr[])
{
  // 2番目から始め
  for(int i=1; i<SIZE; ++i)
  {
    int index = i;
    int key = arr[index];

    while(index>0 && key < arr[index-1])
    {
      // データの位置をswapする
      arr[index] = arr[index-1];
      --index;
    }

    // データを挿入する
    arr[index] = key;
  }
}

void print(int arr[])
{
  for(int i=0; i<SIZE; ++i)
  {
    printf("%d ", arr[i]);
    
    // １行に15個ずつ出力する
    if((i+1)%15==0)
    {
      printf("\n");
    }
  }

  printf("\n");
}

int main(void)
{ 
  int arr[SIZE];
  int select;

  unsigned seed = time(0);
  srand(seed);
  
  // 乱数を生成する
  for(size_t i=0; i<SIZE; ++i)
  {
    arr[i] = rand() % SIZE;
  }

  printf("Before Sorting:\n");
  print(arr);

  // 整列
  insertionSort(arr);

  printf("\nAfter Sorting\n");
  print(arr);

  return 0;
}
```

<div class="divider"></div>

## 時間複雑度
#### best case
- 比較回数: `n-1`回
- 交感回数: `0`回
- **T(n) = O(n)**

#### worst case
- 比較回数: `n*(n-1)/2`回
- 交感回数: `n*(n-1)/2`回
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [CS3 Data Structures & Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/InsertionSort.html)
- [삼입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
