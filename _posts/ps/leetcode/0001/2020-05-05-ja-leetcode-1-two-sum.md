---
layout: post
title: "【1】Two Sum"
ref: leetcode-1
date: 2020-05-05 03:00:00
categories: LeetCode
lang: ja
---

## 問題
- **難易度** → Easy
- **関連主題** → 配列、ハッシュテーブル

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```
Given nums = [2, 7, 11, 15], target = 9.

Because nums[0] + nums[1] = 2 + 7 = 9, 
return [0, 1].
```

<div class="divider"></div>

## 実装

- Runtime: 32 ms, faster than 92.21%
- Memory Usage: 9.9 MB, less than 45.45%

```rb
def two_sum(nums, target)
  hash = Hash.new
  nums.each_with_index do |x, i|
    comp = target - x
    if hash.include? comp
      return [nums.find_index(comp), i]
    end
    hash[x] = comp
  end
end
```

<div class="divider"></div>

## 複雑度
`hash.include?`はO(1)時間がかかります。`nums.find_index()`の場合O(n)ですがハッシュから値を見つけた時ちょうど一回実行されますので最終**時間複雑度**はO(n)になります。

ハッシュ値を保存するため別の空間が必要なので**空間複雑度**もO(n)です。
