---
layout: post
title: "【9】Palindrome Number"
ref: leetcode-9
date: 2020-05-06 01:15:00 +0900
categories: LeetCode
lang: ja
---

## 問題
- **難易度**: Easy
- **関連主題**: Implement

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Follow up:
Coud you solve it without converting the integer to a string?

[LeetCode](https://leetcode.com/problems/palindrome-number/)

<div class="divider"></div>

## 実装

- Runtime: 48 ms, faster than 89.84%
- Memory Usage: 9.3 MB, less than 100.00%

```rb
def is_palindrome(x)
  x = x.to_s
  x.reverse == x
end
```

- 文字列を使わず実装
- Runtime: 40ms, faster than 98.35%
- Memory: 9.2 MB, less than 100.00%

```rb
def is_palindrome(x)
    return false if x < 0 or (x%10==0 and x!=0)
    rev = 0
    temp = x
    while temp > 0
        rev = rev*10 + temp%10
        temp /= 10
    end
    rev == x
end
```
<div class="divider"></div>

## 複雑度
### 文字列 O
`String#reverse`がO(n)なので時間複雑度はO(n)になります。空間複雑度はO(1)です。

### 文字列 X
`while`ループは`x`の長さだけ実行されますので時間複雑度はO(`xの長さ`)です。空間複雑度はO(1)です。
