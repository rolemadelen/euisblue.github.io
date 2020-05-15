---
layout: post
title: "【141】Linked List Cycle"
ref: leetcode-141
date: 2020-05-09 07:00:00 +0900
categories: LeetCode
lang: ja
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: Two Pointer, Linked List

Given a linked list, determine if it has a cycle in it.

[LeetCode](https://leetcode.com/problems/linked-list-cycle)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}

- Runtime: 44ms, faster than 67.91%
- Memory: 9.5 MB, < 100.00%
```rb
def hasCycle(head)
  return false if head == nil or head.next == nil
  turtle = head.next
  heir = head.next.next

  while true
    return true if turtle == heir
    return false if turtle == nil
    turtle = turtle.next
    return false if heir == nil
    heir = heir.next
    return false if heir == nil
    heir = heir.next
  end
end
```

- Runtime: 56ms, faster than 18.60%
- Memory: 9.6 MB, < 100.00%
```rb
def hasCycle2(head)
  return false if head == nil or head.next == nil
  turtle = head
  hare = head

  while turtle != nil and hare != nil
    turtle = turtle.next
    hare = hare.next.next
    return true if turtle == hare
  end

  false
end
```

- Runtime: 80ms, faster than 7.44%
- Memory 10.1 MB, < 100.00%
```rb
def hasCycle3(head)
  hash = Hash.new()
  while head != nil
    return true if hash.include? head
    hash[head] = true
    head = head.next
  end
  false
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
