---
layout: post
title: "マージソート「Merge Sort」とは"
ref: algorithm-sort-merge
date: 2020-06-26 05:00:00 +0900
published: false
categories:
 - "Algorithm"
lang: ja
---

## マージソート

<div class="divider"></div>

## アルゴリズム要約

<div class="divider"></div>

## マージソートC言語実装
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 15

void print(int arr[])
{
  for(int i=0; i<SIZE; ++i)
  {
    printf("%d ", arr[i]);
    
    // 一行に15個ずつ出力
    if((i+1)%15==0)
      printf("\n");
  }

  printf("\n");
}

void merge(int arr[], int left, int mid, int right)
{
  int sortedArr[SIZE] = {0};
  int L = left;
  int R = mid+1;
  int K = left;

  // リストをマージする過程
  while(L <= mid && R <= right)
  {
    if(arr[L] < arr[R])
      sortedArr[K++] = arr[L++];
    else
      sortedArr[K++] = arr[R++];
  }

  // 左のリストに残っているデータすべてをコピーする
  // Read all remaining data on the left
  while(L <= mid)
    sortedArr[K++] = arr[L++];
  
  // 右のリストはもう整列されているので、コピーしなくでもいい

  // 整列終わったリストを新しい配列にコピーする
  for(int i=left; i<K; ++i)
    arr[i] = sortedArr[i];
}

void mergeSort(int arr[], int left, int right)
{
  int mid;

  if(left < right)
  {
    mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid+1, right);
    merge(arr, left, mid, right);
  }
}

int main(void)
{ 
  int arr[SIZE];
  int select;

  unsigned seed = time(0);
  srand(seed);

  // 乱数生成
  for(size_t i=0; i<SIZE; ++i)
    arr[i] = rand()%SIZE+1;

  printf("Before Sorting\n");
  print(arr);

  mergeSort(arr, 0, SIZE-1);

  printf("\nAfter Sorting\n");
  print(arr);

  return 0;
}
```

<div class="divider"></div>

## 時間複雑度

#### best case
- 比較回数: 回
- 交感回数: 回
- <b>T(n) = O()</b>

#### worst case
- 比較回数: 回
- 交感回数: 回
- <b>T(n) = O()</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
- [studytonight - Merge Sort Algorithm](https://www.studytonight.com/data-structures/merge-sort#:~:text=Time%20complexity%20of%20Merge%20Sort,space%20as%20the%20unsorted%20array)
