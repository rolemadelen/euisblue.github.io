---
layout: post
title: "9. Palindrome Number"
ref: leetcode-9
date: 2020-05-06 01:15:00 +0900
categories: LeetCode
lang: ko
---

## 문제
- **난이도**: Easy
- **관련 주제**: Implement

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Follow up:
Coud you solve it without converting the integer to a string?

[LeetCode](https://leetcode.com/problems/palindrome-number/)

<div class="divider"></div>

## 구현

- Runtime: 48 ms, faster than 89.84%
- Memory Usage: 9.3 MB, less than 100.00%

```rb
def is_palindrome(x)
  x = x.to_s
  x.reverse == x
end
```

- 문자열 사용하지 않고 구현
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

## 복잡도
### 문자열 O
`String#reverse`가O(n)의 시간 (정확히는 n/2)의 시간이 걸리므로 최종 시간복잡도는 O(n),
공간복잡도는 O(1)입니다.

### 문자열 X
`while`문은 `x`의 길이만큼 실행이 되므로 `S`가 `x`의 길이라고 했을 때 시간복잡도는 O(S)가 됩니다.
공간복잡도는 마찬가지로 O(1)입니다.
