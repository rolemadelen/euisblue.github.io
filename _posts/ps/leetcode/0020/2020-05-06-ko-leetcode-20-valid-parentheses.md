---
layout: post
title: "20. Valid Parentheses"
ref: leetcode-20
date: 2020-05-08 18:50:00 +0900
categories: LeetCode
lang: ko
---

## 문제
- **난이도**: Easy
- **관련 주제**: 스택, 문자열

Given a string containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

[LeetCode](https://leetcode.com/problems/valid-parentheses)

<div class="divider"></div>

## 구현
- Runtime: 20ms, faster than 100.00%
- Memory Usage: 9.3 MB, < 100.00%
```rb
def is_valid2(s)
  return false if s[0] == ')' or s[0] == '}' or s[0] == ']'

  op = []
  size = s.size
  for i in 0...size
    c = s[i]
    if c=='(' or c=='{' or c=='['
      op.push(c)
    else
      opc = op.pop
      return false if c==')' and opc != '('
      return false if c==']' and opc != '['
      return false if c=='}' and opc != '{'
    end
  end
  op.empty?
end
```

<div class="divider"></div>

## 복잡도
스택과 같은 개념으로 `op`배열을 만들어 사용했습니다. 열려있는 괄호는 바로 배열에 push해주고, 
닫는 괄호가 나올경우 배열에서 하나 씩 pop해서 올바른 괄호인지 확인합니다. `push()`와 `pop()`은
모두 O(1)이고 이를 문자열의 길이만큼 반복하니 시간 복잡도는 **O(n)**이 됩니다.

배열을 사용했기 때문에 공간 복잡도도 **O(n)**이 됩니다.
