---
layout: post
title: "206. Reverse Linked List"
ref: leetcode-206
date: 2020-05-09 07:00:00 +0900
categories: LeetCode
lang: ko
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: Linked List

Reverse a singly linked list.

[LeetCode](https://leetcode.com/problems/reverse-linked-list)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}

- Runtime: 40ms, faster than 27.83%
- Memory: 9.9 MB, < 100.00%

```rb
def reverse_list(head)
  return head if head == nil or head.next == nil

  rest = reverse_list(head.next)
  head.next.next = head

  head.next = nil

  rest
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
