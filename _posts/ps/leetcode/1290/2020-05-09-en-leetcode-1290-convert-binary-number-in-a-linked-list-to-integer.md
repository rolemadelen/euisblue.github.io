---
layout: post
title: "1290. Convert Binary Number in a Linked List to Integer"
ref: leetcode-1290
date: 2020-05-09 07:00:00 +0900
categories: LeetCode
lang: en
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: Linked List

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

[LeetCode](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}

- Runtime: 28ms, faster than 95.08%
- Memory: 9.4 MB < 100.00%

```rb
def get_decimal_value(head)
  ret = 0
  while head != nil
    ret = (ret << 1) + head.val
    head = head.next
  end
  ret
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
