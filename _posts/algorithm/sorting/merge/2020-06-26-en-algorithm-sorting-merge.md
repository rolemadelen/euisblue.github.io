---
layout: post
title: "Merge Sort"
ref: algorithm-sort-merge
date: 2020-06-26 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: en
---

## Merge Sort
This algorithm is known as the **divide-and-conquer** algorithm. It breaks the problem into several subproblems
that are similar to the original larger problem but smaller in size. It solve subproblems recursively and then 
combine these solutions to create a solution to the original problem. Merge sort is also a stable sort.

Divide and Conquer approach involves three steps:
1. **Divide** the problem into several subproblems.
2. **Conquer** the subproblems by solving them recursively.
3. **Combine** the solutions to the subproblems into the solution for the original problem.

<div class="divider"></div>

## Algorithm Summary
1. **Divide** 
  + Divide the array with `n` elements into two subarrays of `n/2` elements each.
2. **Conquer**
  + Sort the two subarrays recursively using merge sort.
3. **Combine**
  + Merge the two sorted subarrays to produce the sorted array.

<div class="divider"></div>

## Merge Sort Implementation in C

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
  int K = left;  // index of sortedArr

  // combine two lists
  while(L <= mid && R <= right)
  {
    if(arr[L] < arr[R])
      sortedArr[K++] = arr[L++];
    else
      sortedArr[K++] = arr[R++];
  }

  // Read all remaining data on the left
  while(L <= mid)
    sortedArr[K++] = arr[L++];
  
  // Right is already sorted; no need to copy again

  // copy over the data
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

  // generate random numbers
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

## Time Complexity
- Divide process
  + Dividing arrays into half in every step: **O(log n)**
  + finding the mid: **O(1)**
- Merge process: **O(n)**
- <b>T(n) = O(n*log n)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
