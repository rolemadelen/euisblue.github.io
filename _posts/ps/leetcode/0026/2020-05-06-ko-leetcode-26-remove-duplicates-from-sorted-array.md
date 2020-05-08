---
layout: post
title: "26. Remove Duplicates from Sorted Array"
ref: leetcode-26
date: 2020-05-08 19:40:00 +0900
categories: LeetCode
lang: ko
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: 배열, 투 포인터

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array** in-place with O(1) extra memory.

[LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}
- Runtime: 40ms, faster than 92.09%
- Memory Usage: 9.2mb, < 100.00%
```rb
def remove_duplicates(nums)
  return 0 if !nums or nums.empty?
  size = nums.size
  pos = 1
  for i in 0...size-1
    if nums[i] != nums[i+1]
      nums[pos] = nums[i+1]
      pos += 1
    end
  end

  return pos
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
배열이 이미 정렬되어 있으므로 단순히 현재와 다음 원소를 비교하면 됩니다. 두 값이 다를 경우, 
기록해둔 위치에다가 다음 원소의 값을 저장하고 위치값을 1 증가 시켜줍니다. 그러면 앞에는 
중복되지 않은 숫자들이 위치하게 됩니다. 전부다 상수 시간의 연산이기 때문에 
시간 복잡도는 **O(n)**이 됩니다.

문제에서 요구한 조건대로 따로 공간을 사용하지 않았기 때문에 공간 복잡도는 **O(1)**입니다.
