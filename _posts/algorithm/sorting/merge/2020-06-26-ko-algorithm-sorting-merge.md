---
layout: post
title: "합병 정렬(Merge Sort)이란"
ref: algorithm-sort-merge
date: 2020-06-26 05:00:00 +0900
published: false
categories:
 - "Algorithm"
lang: ko
---

## 병합 정렬

<div class="divider"></div>

## 알고리즘 요약

<div class="divider"></div>

## 병합 정렬 C언어 구현
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

    // 한 줄에 15개의 데이터를 출력
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

  // 두 개의 리스트를 병합하는 과정
  while(L <= mid && R <= right)
  {
    if(arr[L] < arr[R])
      sortedArr[K++] = arr[L++];
    else
      sortedArr[K++] = arr[R++];
  }

  // 병합 후, 왼쪽 리스트에 남아있는 값들을 전부 복사
  while(L <= mid)
    sortedArr[K++] = arr[L++];
  
  // 오른쪽은 이미 정럴이 되어 있기 때문에 위 복사하는 과정은 필요없음

  // 병합한 리스트의 값들은 출력배열에 저장
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

  // 난수 생성
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

## 시간 복잡도

#### 최선의 경우
- 비교 횟수: 번
- 교환 횟수: 번
- <b>T(n) = O()</b>

#### 최악의 경우
- 비교 횟수: 번
- 교환 횟수: 번
- <b>T(n) = O()</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
- [studytonight - Merge Sort Algorithm](https://www.studytonight.com/data-structures/merge-sort#:~:text=Time%20complexity%20of%20Merge%20Sort,space%20as%20the%20unsorted%20array)
