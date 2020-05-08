---
layout: post
title: "【26】Remove Duplicates from Sorted Array"
ref: leetcode-26
date: 2020-05-08 19:40:00 +0900
categories: LeetCode
lang: ja
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: 配列、Two Pointer

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
配列はもう整列されているので`nums[i]`と`nums[i+1]`を比較するのだけで大丈夫です。2つの値が違い場合は記録した位置に`nums[i+1]`の値を保存して位置の値を+1します。これで終わりです。とくに時間がかかる演算は無いので時間複雑度は**O(n)**になります。

別の配列とか空間を使ってないので空間複雑度は**O(1)**です。
