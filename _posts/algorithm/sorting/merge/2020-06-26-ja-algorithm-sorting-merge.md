---
layout: post
title: "マージソート「Merge Sort」とは"
ref: algorithm-sort-merge
date: 2020-06-26 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: ja
---

<div class="updated">
<br>
2020-07-05: 記事の構造変更＆翻訳完了
</div>

## マージソート

マージソート「Merge Sort」は分割統治アルゴリズムと呼ばれる。

**分割統治**「Divide and Conquer」は与えられた問題を1個以上の小問題たちに分割して解決した後、
本来の問題を統治（解決）する方法だ。 

「分割統治」を段階に分けると下記のとおりである。
1. 与えられた問題を1個以上の小問題たちで分割「**divide**」する。
2. 小問題たちを統治「**conquer**」する。<br>
もっと分割できる場合は再帰的に分割する。
3. 解決した小問題たちをマージ「**merge**」して本来問題の答えを求める。

分割統治の**長所**
- 難しい問題を小問題に分割して解決するのができる。
  + 例）ハノイの塔
- メモリキャッシュを効率的に使う。
  + 分割した小問題が統治できるように簡単になったら相対的に遅いメインメモリに接近せず、キャッシュだけで解決できる。

分割統治の**短所**
- 分割統治は再帰を使うけど、再帰は遅い。
- 再帰する過程でスタックメモリが積もって、メモリの使用量が増える。

<div class="divider"></div>

## マージソートアルゴリズム要約

分割統治を使って整列される過程を確認してみよう。

1. 配列が与えられた。
   ```rb
   [1, 9, 7, 10, 8]
   ```
   2個の部分配列に分割「(**divide**」する。
   ```rb
   [1, 9, 7]    [10, 8]
   ```
2. ただ1個の要素が残るまで再帰的に分割する。
   ```rb
       [1, 9, 7]           [10, 8]

     [1,9]     [7]       [10]   [8]

   [1]    [9]    [7]    [10]    [8] 
   ```
   
3. 部分配列たちをマージ「**merge**」する。
   ```rb
   [1]    [9]    [7]    [10]    [8] 

   [1, 9]    [7]    [10]    [8] 

   [1, 7, 9]    [10]    [8] 

   [1, 7, 9]    [8, 10]

   [1, 7, 8, 9, 10]
   ```

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
- 分割過程
  + 配列の中央インデックスの値を経産：**O(1)**
  + 配列を毎回半分する：**O(log n)**
- マージ過程
  + `n`回の要素をマージ：O(n-1) = **O(n)**
- <b>T(n) = O(n*log n)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
- [studytonight - Merge Sort Algorithm](https://www.studytonight.com/data-structures/merge-sort#:~:text=Time%20complexity%20of%20Merge%20Sort,space%20as%20the%20unsorted%20array)
