---
layout: post
title: "[Algorithm] Binary Search"
ref: search-binary-search
date: 2019-11-12 7:00:00
categories: Algorithm
tags: search
lang: en
---

## **What is Binary Search?**

Binary Search is a search algorithm that finds the target element from a **sorted list**.

The algorithm first finds the midpoint of the list, compare its value with the target element and decide 
which half (left or right) to proceed to compare.

![Binary Search](/assets/images/algorithm/search/search-binary-search-1.jpg)


If our target number is greater than `5`, we can ignore the left half and vice versa. By  halving the 
size of the list at every iteration, the speed of searching escalates substantially compare to
Linear Search Algorithm.

Here's a simple comparison. <br>
When we have 1000 data, linear search requires 1000 operations in worst case scenario to find the element.
But with binary search, it only requires 10 operations at most.

<br>

## **Implementation in Ruby**

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

<br>

## **Explanation**

_Assume the list is sorted in ascending order. If its in descending order, flip the comparison sign._

Find the midpoint: `mid = low + (high - low) / 2;`

We can use `mid = (low + high) / 2` to find the midpoint, however, there's a potential risk of having 
overflow-error. If you're using a language where integer overflow is handled automatically (e.g. Ruby), 
you probably don't need to worry about it, but its still important to understand why we're using such formula.

Now we compare the middle element with the target element and there are 4 possible cases.
1. middle element == `target`
  + Simple.
    Return the index.
    ![Binary Search](/assets/images/algorithm/search/search-binary-search-2.jpg)

2. middle element > `target`
  + `target` is located on the **left half** of the list so change `high` to 
     `middle - 1` and repeat the process.
     ![Binary Search](/assets/images/algorithm/search/search-binary-search-3.jpg)

3. middle element < `target`
  + `target` is located on the **right half** of the list so change `low` to 
     `middle + 1` and repeat the process.
     ![Binary Search](/assets/images/algorithm/search/search-binary-search-4.jpg)

4. `target` not in the list
  + When we repeatedly halve the list, `low` will eventually become greater than `high`.
    This means the `target` is not in the list. In this case return `-1` or whatever value you decided to reperesent DNE.
