---
layout: post
title: "Algorithm・二分探索「Binary Search」"
ref: search-binary-search
date: 2019-11-08 7:00:00
categories: Algorithm
tags: search
lang: ja
---

## 二分探索アルゴリズムとは?

## コード

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

[C++のコードを見たい！](https://github.com/muicode/coding/blob/master/algorithm/search/binsearch.cpp)

## 説明
