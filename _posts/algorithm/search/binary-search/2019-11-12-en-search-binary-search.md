---
layout: post
title: "Search Algorithm - Binary Search"
ref: search-binary-search
date: 2019-11-12 7:00:00
categories: Algorithm
tags: search
lang: en
---

## What is Binary Search?

Binary Search is a logarithmic search algorithm that finds the target value from a **sorted list**.

Binary Search compares the element in the middle of the list with the target value and either returns its position in the list or continues to search in the lower or upper half of the list.

![Binary Search](/assets/images/algorithm/search/search-binary-search-1.jpg)


If the target value is greater than `5`, we can completely ignore the lower half and continue searching in the upper half.
By halving the size of the list at every iteration, we can find the target value in a logarithmic runnnig time.

For example, given 1000 unique values, it takes at most 1000 operations to find the target value using linear search.
But with binary search, it only takes 10 operations at most.

<div class="divider"></div>

## Implementation

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

- Calculate the midpoint: `mid = low + (high - low) / 2;`

    You might be wondering why I'm not using `mid = (low + high) / 2`. You absolutely can; however, there's a potential risk here.

    We always want to keep our number smaller than `high` because <br>
    `low + high` may cause overflow and our midpoint will no longer be the midpoint. 
    So to prevent this risk, we take the half of distance between `high` and `low` and add it to `low`. This one extra step makes the algorithm more robust.

- Compare the middle element (`arr[mid]`) with the target value (`target`). There are four possible cases.
    1. `arr[mid] == target`  <br>
      The target value matches the element, so return its position in the list.

    2. `arr[mid] < target` <br>
      The target value is greater than the element, so the search continues on the **upper half** ignoring the lower half.

    3. `arr[mid] > target` <br>
      The target value is smaller than the element, so the search continues on the **lower half** ignoring the upper half.

    4. `low > high`  <br>
      The target value does not exist. Return `-1` or `null`.
