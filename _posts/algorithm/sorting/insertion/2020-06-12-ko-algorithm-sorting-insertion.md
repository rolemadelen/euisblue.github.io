---
layout: post
title: "삼입 정렬(Insertion Sort)이란"
ref: algorithm-sort-insertion
date: 2020-06-12 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: ko
---

<div class="updated">
updated (2020-06-20): 글 구조 변경
</div>

## 삼입 정렬 
- 적은 수의 자료들을 정렬할 때 효율적인 알고리즘.
- 거의 정렬되어 있는 자료들을 정렬할 때 최고의 효율을 발휘.
- 카드 게임에서 손안의 카드를 정렬하는 방법과 유사하다.
  + 새로운 카드를 정렬된 카드들과 비교, 제 자리를 찾는다.
  + 새로운 카드의 수만큼 반복, 덱이 정렬되어 있다.

<img src="/assets/images/algorithm/sorting/insertion.png"> <br>
<span style="font-size:11px"><i>source: <a href="https://studyalgorithms.com/array/insertion-sort/#">studyalgorithm.com</a></i></span>

<div class="divider"></div>

## 알고리즘 요약
- 현재 위치의 값을 `key`라고 한다.
- **두 번째** 자료부터 시작(`key = arr[1]`), 그 앞의 있는 자료들과 비교한다.
- 앞 자료가 `key`보다 크다면, 앞 자료를 현재 위치에 복사 (한 칸씩 뒤로 미는 것과 동일).
- 더 이상 비교할 자료가 없거나 앞의 자료가 `key`보다 작을 때까지 반복.
  + 두 번째 조건의 존재여부에 따라 알고리즘 최선의 시간 복잡도가 달라진다.

<div class="divider"></div>

## 삼입 정렬 C언어 구현 

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 100

void insertionSort(int arr[])
{
  // 두 번째 자료부터 시작
  for(int i=1; i<SIZE; ++i)
  {
    int index = i;
    int key = arr[index];

    // 비교할 값이 없거나 앞의 값이 key보다 작을때까지 반복
    while(index > 0 && key < arr[index-1])
    {
      // 앞 자료의 값을 한 칸 뒤로 민다
      arr[index] = arr[index-1];
      --index;
    }

    // key를 올바른 위치에 삼입한다.
    arr[index] = key;
  }
}

void print(int arr[])
{
  for(int i=0; i<SIZE; ++i)
  {
    printf("%d ", arr[i]);

    // 한 줄에 15개씩 숫자를 출력
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

  // 랜덤 숫자 생성
  for(size_t i=0; i<SIZE; ++i)
  {
    arr[i] = rand() % SIZE;
  }

  // 정렬 전, 자료 출력
  printf("Before Sorting:\n");
  print(arr);

  insertionSort(arr);

  // 정렬 후, 자료 출력
  printf("\nAfter Sorting\n");
  print(arr);

  return 0;
}
```

<div class="divider"></div>

## 시간 복잡도
#### 최선의 경우 (이미 정렬되어 있는 경우)
- 비교횟수: `n - 1`번
- 교환횟수: `0`번
- **T(n) = O(n)**

#### 최악의 경우 (역순인 경우)
- 비교횟수: `n*(n-1)/2`번
- 교환횟수: `n*(n-1)/2`번
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- Introduction to Algorithms (CLRS) 3rd Edition
- [CS3 Data Structures & Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/InsertionSort.html)
- [삼입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
