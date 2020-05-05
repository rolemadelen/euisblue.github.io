---
layout: post
title: "1. Two Sum"
ref: leetcode-1
date: 2020-05-05 03:00:00
categories: LeetCode
lang: ko
---

## 문제
- **난이도**: **Easy**
- **관련 주제**: 배열, 해시 테이블

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```
Given nums = [2, 7, 11, 15], target = 9.

Because nums[0] + nums[1] = 2 + 7 = 9, 
return [0, 1].
```

<div class="divider"></div>

## 구현

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

## 복잡도
`hash.include?`는 상수 시간에 처리됩니다. `nums.find_index()`의 경우 O(n)의 시간이 걸리지만 해시에서 값을 찾았을 때 딱 한 번 실행이 되기 때문에 최종 **시간 복잡도는** O(n)이 됩니다.

해시값을 저장하기 위해 따로 공간이 필요하기 때문에 **공간 복잡도** 또한 O(n)이 됩니다.
