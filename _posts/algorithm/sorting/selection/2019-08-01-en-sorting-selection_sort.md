---
layout: post
title: "Selection Sort"
ref: algorithm-selection-sort
date: 2019-08-01 09:51:00
categories: Algorithm
tags: sorting
lang: en
---

## Concept
Selection sort is an algorithm that sorts given data by moving smallest (or largest) item to the front, 2nd smallest to the 2nd, and n<sup>th</sup> smallest to the n<sup>th</sup> position of given data.

<br />
![selection sort](/assets/images/algorithm/sorting/selection_sort.png)

<div class="divider"></div>

## Time Complexity <a id="timecomp"></a>
 - Number of Comparisons
   * Outer (`i`) loop repeats `n-1` times
   * Inner (`j`) loop compares `i`<sup>th</sup> number with `n-i` data:
      + (n-1) + (n-2) + ... + 1 = n(n-1)/2 → **O(n<sup>2</sup>)**

 - Number of Swaps

<div class="divider"></div>

## Implementation
`int` type array is used in here to demonstrate the working algorithm of the selection sort.
The array will be sorted from smallest to largest.

```c
void selectionSort(int arr[])
{
    for(int i=0; i<SIZE-1; ++i)
    {
        int minIndex = i;

        for(int j=i+1; j<SIZE; ++j)
        {
            if(arr[minIndex] > arr[j])
            {
                minIndex = j;
            }
        }

        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}
```

<div class="divider"></div>

## Reference <a id="ref"></a>
- [선택 정렬(selection sort)이란?](https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html)
