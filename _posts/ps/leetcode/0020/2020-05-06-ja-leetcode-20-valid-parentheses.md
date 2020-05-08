---
layout: post
title: "【20】Valid Parentheses"
ref: leetcode-20
date: 2020-05-08 18:50:00 +0900
categories: LeetCode
lang: ja
---

## 問題
- **難易度**: Easy
- **関連問題**: スタック、文字列

Given a string containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

[LeetCode](https://leetcode.com/problems/valid-parentheses)

<div class="divider"></div>

## 実装
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

## 複雑度
スタックとような개념으로で配列`op`を作って使用しました。開いてる括弧はすく配列にpushされ、しまっている括弧の場合は配列からpopして正しい括弧確認します。`push()`と`pop()`はO(1)で、これを文字列の長さだけループするので時間複雑度はO(n)になりむす。

開いた括弧たちを配列に保存するので空間複雑度もO(n)になります。
