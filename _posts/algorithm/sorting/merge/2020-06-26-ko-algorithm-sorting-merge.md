---
layout: post
title: "합병 정렬(Merge Sort)이란"
ref: algorithm-sort-merge
date: 2020-06-26 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: ko
---

<div class="updated">update (2020-07-05): post published</div>

## 병합 정렬

분할정복 알고리즘의 대표적인 예로 병합 정렬(Merge Sort)을 꼽을 수 있다.

**분할 정복** (Divide and Conquer)은 주어진 문제를 여러개의 작은 문제로 분할하여 해결한 후, 
본래의 문제를 정복하는 방법이다. 

단계로 나누자면 아래와 같다.
1. 주어진 문제를 한 개 이상의 작은 문제들로 분할(**divide**)한다.
2. 작은 문제들을 정복(**conquer**)한다.  
더 작은 문제로 분할이 가능하면 재귀를 사용한다.
3. 해결한 작은 문제들을 병합(**merge**)하여 본래 문제의 해답을 구한다.

분할 정복의 **장점**
- 어려운 문제를 작은 문제로 분할함으로써 해결이 가능하다.
  + 예) 하노이의 탑
- 메모리 캐시를 효율적으로 사용한다.
  + 문제가 정복할 수 있을정도로 간단해지면 상대적으로 느린 메인 메모리에 접근할 필요없이 캐시만으로 해결이 가능하다.

분할 정복의 **단점**
- 분할정복의 특성상 재귀를 반복적으로 호출해야 하는데, 재귀는 느리다.
- 재귀를 호출하면서 스택 메모리가 쌓이게 되어 메모리의 사용량이 증가한다.

<div class="divider"></div>

## 병합 정렬 알고리즘 요약

분할정복을 사용해 어떻게 정렬이 이루어지는지 살펴본다.

1. 배열이 주어졌다.
   ```rb
   [1, 9, 7, 10, 8]
   ```
   두 개의 부분 배열로 분할(**divide**)한다.
   ```rb
   [1, 9, 7]    [10, 8]
   ```
2. 두 개의 부분 배열로 분할할 수 없을때까지 재귀를 사용하여 분할한다.
   ```rb
       [1, 9, 7]           [10, 8]

     [1,9]     [7]       [10]   [8]

   [1]    [9]    [7]    [10]    [8] 
   ```
   
3. 작은 배열들을 병합(**merge**)한다.
   ```rb
   [1]    [9]    [7]    [10]    [8] 

   [1, 9]    [7]    [10]    [8] 

   [1, 7, 9]    [10]    [8] 

   [1, 7, 9]    [8, 10]

   [1, 7, 8, 9, 10]
   ```

정렬이 끝났다.   

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
- 분할 과정
  + 배열의 중간 위치를 계산: **O(1)**
  + 배열을 계속해서 반으로 분할: **O(log n)**
- 통합 과정
  + `n`개의 원소를 통합: O(n-1) = **O(n)**
- <b>T(n) = O(n*log n)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
- [studytonight - Merge Sort Algorithm](https://www.studytonight.com/data-structures/merge-sort#:~:text=Time%20complexity%20of%20Merge%20Sort,space%20as%20the%20unsorted%20array)
