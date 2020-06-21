---
layout: post
title: "Selection Sort"
ref: algorithm-sort-selection
date: 2020-06-19 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: en
---

## Selection Sort
- Unlike [insertion sort](./en-algorithm-sorting-insertion) where you find the correct position by shifting its data one by one, selection sort selects the data that goes to position 1, 2, ..., n.

<div class="divider"></div>

## Algorithm Summary
- Find the smallest data and move it to `arr[0]`.
  + find the 2nd smallest data and move it to `arr[1]`.
  + find the `n`th smallest data and  move it to `arr[n-1]`.
- First `n` elements are sorted after `n` iterations.

<div class="divider"></div>

## Selection Sort Implementation in C

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 10

void selectionSort(int arr[])
{
  for(int i=0; i<SIZE; ++i)
  {
    // position to insert the ith element
    int pos = i;

    // find the ith smallest element
    for(int j=i+1; j<SIZE; ++j) 
    {
      if(arr[j] < arr[pos])
      {
        pos = j;
      }
    }

    // insert the found data into a correct position
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

    // print 15 data per line
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

  // generate random data
  for(size_t i=0; i<SIZE; ++i)
  {
    arr[i] = rand()%SIZE+1;
  }

  printf("Before Sorting\n");
  print(arr);

  // sort data
  selectionSort(arr);

  printf("\nAfter Sorting\n");
  print(arr);

  return 0;
}
```

<div class="divider"></div>

## Time Complexity

#### best case
- number of comparisons: `n*(n-1)/2`
- number of swaps: `0`
- <b>T(n) = O(n<sup>2</sup>)</b>

#### worst case
- number of comparisons: `n*(n-1)/2`
- number of swaps: `n-1`
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
