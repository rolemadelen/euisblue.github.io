---
layout: post
title: "13. Roman to Integer"
ref: leetcode-13
date: 2020-05-06 01:15:00 +0900
categories: LeetCode
lang: ko
---

## 문제
- **난이도**: Easy
- **관련 문제**: Math, String

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

[LeetCode](https://leetcode.com/problems/roman-to-integer/)

<div class="divider"></div>

## 구현

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

## 복잡도
해시를 사용했기 때문에 탐색은 O(1)의 시간이 걸립니다. 그 외 모든 연산들도 O(1)이기 때문에 최종 시간복잡도는 O(n)이 됩니다.

hash를 사용했지만 입력에 상관없이 고정된 크기를 가지기 때문에 공간복잡도는 O(1)이 됩니다.
