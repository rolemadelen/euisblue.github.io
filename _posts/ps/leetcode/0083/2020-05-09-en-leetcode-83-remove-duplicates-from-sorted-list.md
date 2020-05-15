---
layout: post
title: "83. Remove Duplicates from Sorted List"
ref: leetcode-83
date: 2020-05-09 07:00:00 +0900
categories: LeetCode
lang: en
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: Linked List

Given a sorted linked list, delete all duplicates such that each element appear only once.

[LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}

- Runtime: 44ms, 21.88%
- Memory: 9.5 MB, <100.00%
```rb
def delete_duplicates(head)
    return [] if !head
    ret = head
    curr = head.next
    while curr != nil
        if head.val != curr.val
            head.next = curr
            head = head.next
        end
        curr = curr.next
    end
    head.next = nil
    ret
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
