---
layout: post
title: "7. Reverse Integer"
ref: leetcode-7
date: 2020-05-05 04:00:00
categories: LeetCode
lang: ko
---

## 문제
- **난이도**: Easy
- **관련 주제**: Implement

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
```
Input: 123
Output: 321
```
Example 2:
```
Input: -123
Output: -321
```
Example 3:
```
Input: 120
Output: 21
```

**Note**:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

<div class="divider"></div>

## 구현
- Runtime: 28 ms, faster than 96.40%
- Memory Usage: 9.3 MB, less than 100.00%

```rb
def reverse(x)
    neg = x < 0 ? -1 : 1
    x =  x.to_s.reverse.to_i * neg
    (x > (2**31)-1 or x < -1*(2**31)) ? 0 : x
end
```

<div class="divider"></div>

## 복잡도
- 시간 복잡도: O(1)
- 공간 복잡도: O(1)
