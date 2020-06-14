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

## Insertion Sort
Insertion Sort is an efficient sorting algorithm for small number of data, and this algorithm is the one many people
use unknowingly. For example, 

<center>
<img src="/assets/images/algorithm/sorting/insertion.png"> <br>
<span style="font-size:11px"><i>source: <a href="https://studyalgorithms.com/array/insertion-sort/#">studyalgorithm.com</a></i></span>
</center>

sorting playing cards in your hand is one well-known example of insertion sort in real life.

We start with a single card in the left hand and the rest on the right. Then we pick one card from the 
right (`key`) and compare with each card in your left hand (`card[index]`). 
If `key < card[index]`, we move on to the next card and repeat until `key > card[index]` to place the card 
in the correct position. When this process is over,  we end up having nicely sorted cards in our hands.

## Implementation

```cpp
void insertionSort(int *arr, const int SIZE)
{
  for (int i=1; i<SIZE; ++i)
  {
    int index = i;
    int key = arr[index];

    while (index > 0 && key < arr[index-1]) 
    {
      arr[index] = arr[index-1];
      --index;
    }
    arr[index] = key;
  }
}
```

<div class="divider"></div>

## Reference
- Introduction to Algorithms (CLRS) 3rd Edition
