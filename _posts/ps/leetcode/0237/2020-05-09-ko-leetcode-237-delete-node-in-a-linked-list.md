---
layout: post
title: "237. Delete Node in a Linked List"
ref: leetcode-237
date: 2020-05-09 07:00:00 +0900
categories: LeetCode
lang: ko
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: Linked List

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

[LeetCode](https://leetcode.com/problems/delete-node-in-a-linked-list)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}

- Runtime: 36ms, faster than 65.18%
- Memory: 9.4 MB, < 100.00%

```rb
def delete_node(node)
    while node.next.next != nil
        node.val = node.next.val
        node = node.next
    end
    node.val = node.next.val
    node.next = nil
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
