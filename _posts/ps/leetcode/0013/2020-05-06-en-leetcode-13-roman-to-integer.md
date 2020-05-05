---
layout: post
title: "13. Roman to Integer"
ref: leetcode-13
date: 2020-05-06 01:15:00 +0900
categories: LeetCode
lang: en
---

## Problem
- **Difficulty**: Easy
- **Related Topic**: Math, String

<div class="divider"></div>

## Code

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

## Complextiy
For every iteration of size of the given string, it reads a value from the hash which is constant. 
So the **time complexity** is O(n).

Although we're using the hash, the values are hardcoded and it's not depend upon by the size of the given string. Thus the **space complexity** is constant.
