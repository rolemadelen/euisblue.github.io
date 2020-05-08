---
layout: post
title: "27. Remove Element"
ref: leetcode-27
date: 2020-05-08 21:00:00 +0900
categories: LeetCode
lang: en
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: Array, Two Pointer

Given an array `nums` and a value `val`, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array** in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

[LeetCode](https://leetcode.com/problems/remove-element)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}

- runtime: 28ms, 97.33%
- memory: 9.3 MB, < 100.00%

```rb
def remove_element(nums, val)
  size = nums.size
  cnt = nums.count val
  nums.delete val
  1.upto(cnt) { nums.push val }
  return size - cnt
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
The time complexity is **O(n)** because of the `delete` method.

In my understanding, `delete` method does not use any extra space to alter the array. Therefore, 
the time complexity of this algorithm should be **O(1)** which satisfies the requirement for this
problem.
