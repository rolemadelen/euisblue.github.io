---
layout: post
title: "20. Valid Parentheses"
ref: leetcode-20
date: 2020-05-08 18:50:00 +0900
categories: LeetCode
lang: en
---

## Problem
- **Difficulty**: Easy
- **Related Topic**: Stack, String

Given a string containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

[LeetCode](https://leetcode.com/problems/valid-parentheses)

<div class="divider"></div>

## Code
- runtime: 20ms, faster than 100.00%
- memory: 9.3 MB, < 100.00%
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

## Complextiy
I created an array called `op` and used it like a stack. Whenever I encounter an open parentheses,
I push the character into an array and pop it when it is a close parentheses to check if it's a 
valid parentheses. All these operations (`push()` and `pop()`) are done in O(1), and I repeat
these operations for the whole length of a string. The time complexity is **O(n)**.

I used an array to store the open parentheses so the space complexity is also **O(n)**.
