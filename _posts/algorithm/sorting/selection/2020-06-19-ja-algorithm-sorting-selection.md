---
layout: post
title: "選択ソート「Selection Sort」とは"
ref: algorithm-sort-selection
date: 2020-06-19 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: ja
---

## 選択ソート
- データを一個ずつ比較しながら位置を捜す[挿入ソート](./ja-algorithm-sorting-insertion)とは違う。
- 入れる位置はもう決めて、そこに来るデータだけを捜す。

<div class="divider"></div>

## アルゴリズム要約
- `A`は配列だ。
- 一番小さいデータを見つけて`A[0]`に入れる。
  + 2番目で小さいデータを`A[1]`に入れる。
  + `i`番目に小さいデータを`A[i]`に入れる
- `n`回繰り返すと、最小`n`個のデータが整列される。

<div class="divider"></div>

## 選択ソートC言語実装

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 10

void selectionSort(int arr[])
{
  for(int i=0; i<SIZE; ++i)
  {
    // データを入れる位置
    int pos = i;

    // i番目に小さいデータを捜す
    for(int j=i+1; j<SIZE; ++j) 
    {
      if(arr[j] < arr[pos])
      {
        pos = j;
      }
    }

    // データを配列のi番目に入れる
    int temp = arr[pos];
    arr[pos] = arr[i];
    arr[i] = temp;
  }
}

void print(int arr[])
{
  for(int i=0; i<SIZE; ++i)
  {
    printf("%d ", arr[i]);
    
    // １行に15個ずつ出力
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

  // 乱数を生成
  for(size_t i=0; i<SIZE; ++i)
  {
    arr[i] = rand()%SIZE+1;
  }

  printf("Before Sorting\n");
  print(arr);

  // データを整列する
  selectionSort(arr);

  printf("\nAfter Sorting\n");
  print(arr);

  return 0;
}
```

<div class="divider"></div>

## 時間複雑度

#### best case
- 比較回数: `n*(n-1)/2`回
- 交感回数: `0`回
- <b>T(n) = O(n<sup>2</sup>)</b>

#### worst case
- 比較回数: `n*(n-1)/2`回
- 交感回数: `n-1`回
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
