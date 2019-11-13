---
layout: post
title: "[Algorithm] Binary Search"
ref: search-binary-search
date: 2019-11-08 7:00:00
categories: Algorithm
tags: search
lang: en
---

## What is Binary Search?

## Code

```rb
def binarySearch(arr, val, low, high)
    mid = low + (high - low) / 2

    return -1 if low > high

    if arr[mid] == val
        return mid
    elsif arr[mid] < val
        binarySearch(arr, val, low + 1, high)
    else
        binarySearch(arr, val, low, mid - 1)
    end
end
```

[View C++ implementation](https://github.com/muicode/coding/blob/master/algorithm/search/binsearch.cpp)

## Explanation
