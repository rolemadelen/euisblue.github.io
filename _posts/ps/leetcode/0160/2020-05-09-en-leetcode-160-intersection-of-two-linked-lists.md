---
layout: post
title: "160. Intersection of Two Linked Lists"
ref: leetcode-160
date: 2020-05-09 07:00:00 +0900
categories: LeetCode
lang: en
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: Linked List

Write a program to find the node at which the intersection of two singly linked lists begins.

Your code should preferably run in O(n) time and use only O(1) memory.

[LeetCode](https://leetcode.com/problems/intersection-of-two-linked-lists)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}

- Runtime: 192ms, faster than 5.49%
- Memory: 13.6 MB, < 100.00%

```rb
def get_count(head)
  curr = head
  count = 0

  while curr!=nil
    count += 1
    curr = curr.next
  end
  count
end

def _getIntersectionNode(d, head1, head2)
  curr1 = head1
  curr2 = head2

  for i in 0...d
    return -1 if curr1 == nil
    curr1 = curr1.next
  end

  while curr1 != nil and curr2 != nil
    if curr1 == curr2
      return curr1
    end

    curr1 = curr1.next
    curr2 = curr2.next
  end
  nil
end

def getIntersectionNode(headA, headB)
  c1 = get_count(headA)
  c2 = get_count(headB)

  if c1 > c2
    d = c1 - c2
    return _getIntersectionNode(d, headA, headB)
  else
    d = c2 - c1
    return _getIntersectionNode(d, headA, headB)
  end
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
