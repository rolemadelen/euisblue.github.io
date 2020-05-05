---
layout: post
title: "【7】Reverse Integer"
ref: leetcode-7
date: 2020-05-05 04:00:00
categories: LeetCode
lang: ja
---

## 問題
- 難易度 → **Easy**
- 関連主題 → **Implement**

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

## 実装
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

## 複雑度
- 時間複雑度：O(1)
- 空間複雑度：O(1)
