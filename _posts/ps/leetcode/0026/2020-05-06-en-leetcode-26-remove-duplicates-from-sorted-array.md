---
layout: post
title: "26. Remove Duplicates from Sorted Array"
ref: leetcode-26
date: 2020-05-08 19:40:00 +0900
categories: LeetCode
lang: en
---

## Problem
- **Difficulty**: Easy
- **Related Topic**: Array, Two Pointers

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array** in-place with O(1) extra memory.

[LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array)

<div class="divider"></div>

## Code
- Runtime: 40ms, faster than 92.09%
- Memory Usage: 9.2mb, < 100.00%
```rb
def remove_duplicates(nums)
  return 0 if !nums or nums.empty?
  size = nums.size
  pos = 1
  for i in 0...size-1
    if nums[i] != nums[i+1]
      nums[pos] = nums[i+1]
      pos += 1
    end
  end

  return pos
end
```

<div class="divider"></div>

## Complextiy
Since the array is already sorted, I can simply loop thorugh the array and check if current number
is equal to the next number. If they are different, I save that different number to the correct 
position and increment the position value. The time complexity is **O(n)**.

Every operations are constant so the space complexity is **O(1)**.
