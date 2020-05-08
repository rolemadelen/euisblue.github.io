---
layout: post
title: "21. Merge Two Sorted Lists"
ref: leetcode-21
date: 2020-05-08 18:55:00 +0900
categories: LeetCode
lang: en
---

## Problem
- **Difficulty**: Easy
- **Related Topic**: Linked List

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

[LeetCode](https://leetcode.com/problems/merge-two-sorted-lists)

<div class="divider"></div>

## Code
- Runtime: 32ms, faster than 95.77%
- Memory Usage: 9.6mb, < 100.00%

```rb
def merge_two_lists(l1, l2)
  list = ListNode.new(0)
  temp = list
  while l1 != nil and l2 != nil
    if l1.val <= l2.val
      temp.next = ListNode.new(l1.val)
      temp = temp.next
      l1 = l1.next
    elsif l1.val > l2.val
      temp.next = ListNode.new(l2.val)
      temp = temp.next
      l2 = l2.next
    end
  end

  temp.next = l1

  while temp.next != nil
    temp = temp.next
  end
  temp.next = l2

  list.next
end
```

<div class="divider"></div>

## Complextiy

Start inserting nodes from either of the list. Once one of the list reaches the end, I insert the 
rest from the other node to this merged list. The time complexity is **O(n1 + n2)**, where n1 = length of the first list and n2 = length of the second list.

If this was C or C++, I believe this algorithm's space complexity could be O(1) by 
creating a new node to insert and deleting the current node. But here in Ruby, I'm creating a new
node to insert but not deleting any. So the space complexity is **O(n)** (is it?)
