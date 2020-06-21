---
layout: post
title: "선택 정렬(Selection Sort)이란"
ref: algorithm-sort-selection
date: 2020-06-19 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: ko
---

## 선택 정렬
- 데이터의 위치를 한 칸씩 옮기면서 올바른 위치를 찾는 [삼입 정렬](ko-algorithm-sorting-insertion)과는 달리, 정해진 위치에 와야할 데이터를 찾는다.

<div class="divider"></div>

## 알고리즘 요약
- 가장 작은 데이터를 찾아 배열의 첫 번째 위치로 옮긴다.
  + 두 번째로 작은 데이터를 찾아 배열의 두 번째 위치로 옮긴다.
  + `i`번째로 작은 데이터를 찾아 배열의 `i`번째 위치로 옮긴다.
- `n`번 반복하면 배열의 첫 `n`개의 원소가 정렬된다.

<div class="divider"></div>

## 선택 정렬 C언어 구현

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 10

void selectionSort(int arr[])
{
  for(int i=0; i<SIZE; ++i)
  {
    // 원소를 삽입할 위치
    int pos = i;

    // i번째로 작은 원소를 찾는다
    for(int j=i+1; j<SIZE; ++j) 
    {
      if(arr[j] < arr[pos])
      {
        pos = j;
      }
    }

    // i번째로 작은 원소를 i번째 위치로 옮긴다
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

    // 한 줄에 15개씩 출력
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

  // 난수 생성
  for(size_t i=0; i<SIZE; ++i)
  {
    arr[i] = rand()%SIZE+1;
  }

  printf("Before Sorting\n");
  print(arr);

  // 정렬 알고리즘 호출
  selectionSort(arr);

  printf("\nAfter Sorting\n");
  print(arr);

  return 0;
}
```

<div class="divider"></div>

## 시간 복잡도

#### 최선의 경우
- 비교 횟수: `n*(n-1)/2`번
- 교환 횟수: `0`번
- <b>T(n) = O(n<sup>2</sup>)</b>

#### 최악의 경우
- 비교 횟수: `n*(n-1)/2`번
- 교환 횟수: `n-1`번
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
