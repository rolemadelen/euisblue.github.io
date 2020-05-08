---
layout: post
title: "21. Merge Two Sorted Lists"
ref: leetcode-21
date: 2020-05-08 18:55:00 +0900
categories: LeetCode
lang: ko
---

## 문제
- **난이도**: Easy
- **관련 주제**: 연결 리스트

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

[LeetCode](https://leetcode.com/problems/merge-two-sorted-lists)

<div class="divider"></div>

## 구현
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

## 복잡도
두 리스트의 값들을 하나씩 비교하면서 작은 순으로 둘 중 하나의 리스트가 `nil`일때까지 새로운 
리스트에 노드를 추가합니다. 또 다른 리스트에 남아있는 노드들을 전부 추가해주면 끝입니다. 시간 복잡도는 **O(n1 + n2)**으로 n1은 첫 번째 리스트의 길이, n2는 두 번째 리스트의 길이가 됩니다.

메모리 해제가 가능하다면(C/C++) 새로운 노드를 추가하는 순간 바로 지우면 되기에 공간 복잡도 O(1)이 
가능할 것 같지만 여기서는 그게 불가능 하기때문에 공간 복잡도는 **O(n)**이 될 것 같습니다.
