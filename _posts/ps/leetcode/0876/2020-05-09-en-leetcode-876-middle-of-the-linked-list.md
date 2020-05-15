---
layout: post
title: "876. Middle of the Linked List"
ref: leetcode-876
date: 2020-05-09 07:00:00 +0900
categories: LeetCode
lang: en
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: Linked List

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

[LeetCode](https://leetcode.com/problems/middle-of-the-linked-list)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}

- Runtime: 36ms, faster than 15.84%
- Memory: 9.3MB, <100.00%
```rb
def middle_node(head)
    size = length(head)
    size >>= 1

    for i in 0...size
      head = head.next
    end

    head
end
```

- Runtime: 28ms, faster than 90.95%
- Memory: 9.1 MB, < 100.00%
```rb
def middle_node2(head)
  x = []
  while head != nil
    x.push(head)
    head = head.next
  end

  return x[x.size>>1]
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
