---
layout: post
title: "27. Remove Element"
ref: leetcode-27
date: 2020-05-06 15:50:00 +0900
categories: LeetCode
lang: ko
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: 배열, 투 포인터

Given an array `nums` and a value `val`, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array** in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

[LeetCode](https://leetcode.com/problems/remove-element)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}

- runtime: 28ms, 97.33%
- memory: 9.3 MB, < 100.00%

```rb
def remove_element(nums, val)
  size = nums.size
  cnt = nums.count val
  nums.delete val
  1.upto(cnt) { nums.push val }
  return size - cnt
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
`delete` 메소드 때문에 시간 복잡도는 **O(n)**입니다.

공간 복잡도가 관건인데 `delete` 메소드의 [구현 코드](https://ruby-doc.org/core-2.7.0/Array.html#method-i-delete)를 확인해보면 따로 공간을 만들어 사용하는 것 같지는 않습니다. 그렇다면 공간 복잡도는 
**O(1)**으로 문제의 요구조건을 만족합니다.
