---
layout: post
title: "9. Palindrome Number"
ref: leetcode-9
date: 2020-05-06 01:15:00 +0900
categories: LeetCode
lang: en
---

## Problem
- **Difficulty**: Easy
- **Related Topic**: Implement

<div class="divider"></div>

## Code

- Runtime: 48 ms, faster than 89.84%
- Memory Usage: 9.3 MB, less than 100.00%

```rb
def is_palindrome(x)
  x = x.to_s
  x.reverse == x
end
```

<div class="divider"></div>

## Complextiy
`String#reverse` takes linear time (n/2 to be specific) so the **time complexity** is O(n).

The **space complexity** is constant.
