---
layout: post
title: "1. Two Sum"
ref: leetcode-1
date: 2020-05-05 03:00:00
categories: LeetCode
lang: en
---

## Problem
- Difficulty: **Easy**
- Related Topics: **Array**, **Hash Table**

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```
Given nums = [2, 7, 11, 15], target = 9.

Because nums[0] + nums[1] = 2 + 7 = 9, 
return [0, 1].
```

<div class="divider"></div>

## Code

- Runtime: 32 ms, faster than 92.21%
- Memory Usage: 9.9 MB, less than 45.45%

```rb
def two_sum(nums, target)
  hash = Hash.new
  nums.each_with_index do |x, i|
    comp = target - x
    if hash.include? comp
      return [nums.find_index(comp), i]
    end
    hash[x] = comp
  end
end
```

<div class="divider"></div>

## Complextiy
`hash.include?` is done in constant space. `nums.find_index()` costs O(n) time, but this method is 
called only once when we found the compliment in the hash. So the **time complexity** is O(n).

Because we used extra space for the hash, the **space complexity** is also O(n).
