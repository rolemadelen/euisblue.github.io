---
layout: post
title: "【14】Longest Common Prefix"
ref: leetcode-14
date: 2020-05-06 20:50:00 +0900
categories: LeetCode
lang: ja
---

## 問題
- **難易度**: Easy
- **関連主題**: 文字列

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string `""`.

All given inputs are in lowercase letters a-z.

[LeetCode](https://leetcode.com/problems/longest-common-prefix)

<div class="divider"></div>

## 実装
- runtime: 36 ms, faster than 85.84%
- memory: 9.3 MB, < 100.00%

```rb
def LCP(strs)
  minlen = 100
  strs.each do |s|
    minlen = s.size < minlen ? s.size : minlen
  end

  prefix = ""
  for i in 0...minlen
    curr = strs[0][i]

    for j in 1...strs.size
      if strs[j][i] != curr
        return prefix
      end
    end
    prefix += curr
  end
  prefix
end
```

<div class="divider"></div>

## 複雑度
`n`個の単語が与えられました。我らは単語と単語の比較じゃなく、すべての単語の最初の文字を比較します。そしてその次の文字、次の次のもじを比較するアルゴリズムです。

まずは一番短い文字列を探します。この過程でO(nm)の時間がかかります。`n`は単語の回数、`m`は一番長い文字列のサイズです。その後は文字たちを比較するだけなのでこのアルゴリズムの時間複雑度はO(nm)になります。
