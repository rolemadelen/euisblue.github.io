---
layout: post
title: "【21】Merge Two Sorted Lists"
ref: leetcode-21
date: 2020-05-08 18:55:00 +0900
categories: LeetCode
lang: ja
---

## 問題
- **難易度**: Easy
- **関連主題**: Linked List

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

[LeetCode](https://leetcode.com/problems/merge-two-sorted-lists)

<div class="divider"></div>

## 実装
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

## 複雑度

両方のリストたちのノードを一個ずつ比べながら小さいのから新しいリストに追加します。この過程を一つのリストがnilになるまでします。その後は、他のリストに残っているノードたちを全部新しいリストに入れると終わりです。このアルゴリズムの時間複雑度は**O(n1 + n2)**で、n1はリスト1のながさ、n2はリスト2の長さです。

C/C++ようにメモリ解除ができたらO(1)の空間がかかると思いますがこのアルゴリズムは作ろのだけなので空間複雑度は**O(n)**になると思います。
