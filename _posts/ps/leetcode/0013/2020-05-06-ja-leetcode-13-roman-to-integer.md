---
layout: post
title: "【13】Roman to Integer"
ref: leetcode-13
date: 2020-05-06 01:15:00 +0900
categories: LeetCode
lang: ja
---

## 問題
- **難易度**: Easy
- **関連主題**: Math, String

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

[LeetCode](https://leetcode.com/problems/roman-to-integer/)

<div class="divider"></div>

## 実装

- Runtime: 40 ms, faster than 100.00%
- Memory Usage: 9.3 MB, less than 100.00%

```rb
def roman_to_int(s)
  rti = {
    'I' => 1,
    'V' => 5,
    'X' => 10,
    'L' => 50,
    'C' => 100,
    'D' => 500,
    'M' => 1000,
    'IV' => 4,
    'IX' => 9,
    'XL' => 40,
    'XC' => 90,
    'CD' => 400,
    'CM' => 900
  }
  rti.default = 0

  year = 0
  i = 0
  size = s.size
  while i < size do
    check = rti[s[i]+s[i+1].to_s]
    if check != 0
      year += check
      i += 1
    else
      year += rti[s[i]]
    end
    i+=1
  end

  year
end
```

<div class="divider"></div>

## 複雑度
ハッシュを使ったので探索の時間はO(1)です。この以外のすべての演算もO(1)なので最終時間複雑度はO(n)になります。

ハッシュを使ったけど与えられた入力には関係なく固定されたサイズを持つので空間複雑度はO(1)になります。
