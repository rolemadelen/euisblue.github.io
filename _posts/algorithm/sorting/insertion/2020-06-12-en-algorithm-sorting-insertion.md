---
layout: post
title: "Insertion Sort"
ref: algorithm-sort-insertion
date: 2020-06-12 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: en
---

<div class="updated">
updated (2020-06-20): post structures modified
</div>

## Insertion Sort
- The most efficient algorithm for sorting small sets of data.
  + Best when data is almost sorted.
- The algorithm is similar to how most people sort game cards in their hands.
  + Compare the new card with already sorted cards and find the correct position to insert.
  + Repeat until their are no more new cards.

<img src="/assets/images/algorithm/sorting/insertion.png"> <br>
<span style="font-size:11px"><i>source: <a href="https://studyalgorithms.com/array/insertion-sort/#">studyalgorithm.com</a></i></span>

<div class="divider"></div>

## Algorithm  Summary
- Let `key` be the current position's data to compare with others.
- **Start with the 2nd data** (`key = arr[1]`) and compare with all data in front of the `key`.
- If the value in front of the `key` is larger, then swap its position with the key.
- Repeat the above process until their are no more values to compare or the `key` is in the right position.

<div class="divider"></div>

## Insertion Sort Implementation in C

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 100

void insertionSort(int arr[])
{
  // start from the 2nd element
  for(int i=1; i<SIZE; ++i)
  {
    int index = i;
    int key = arr[index];

    while(index > 0 && key < arr[index-1])
    {
      // shift one space to the right
      arr[index] = arr[index-1];
      --index;
    }

    // insert the key at the right position
    arr[index] = key;
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

  // generate random numbers
  for(size_t i=0; i<SIZE; ++i)
  {
    arr[i] = rand() % SIZE;
  }

  printf("Before Sorting:\n");
  print(arr);

  insertionSort(arr);

  printf("\nAfter Sorting\n");
  print(arr);

  return 0;
}
```

<div class="divider"></div>

## Time Complexity
#### best case
- number of comparisons: `n-1`
- number of swaps: `0`
- **T(n) = O(n)**

#### worst case
- number of comparisons: `n*(n-1)/2`
- number of swaps: `n*(n-1)/2`
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [CS3 Data Structures & Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/InsertionSort.html)
- [삼입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
