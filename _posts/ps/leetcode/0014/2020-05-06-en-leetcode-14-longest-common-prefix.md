---
layout: post
title: "14. Longest Common Prefix"
ref: leetcode-14
date: 2020-05-06 14:00:00 +0900
categories: LeetCode
lang: en
---

## Problem
- **Difficulty**: Easy
- **Related Topic**: String

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string `""`.

All given inputs are in lowercase letters a-z.

[LeetCode](https://leetcode.com/problems/longest-common-prefix)

<div class="divider"></div>

## Code
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

## Complextiy
Given `n` words, I'm checking the first letter of all `n` words. If they're all same, I move on
to the next character. If not, I return the current `prefix`.

So to begin with, I need to find the minimum length string and this costs O(nm), 
`n = number of strings` and `m = length of a longest string`. 
Then I go through each character of a mininum length string but this does not affect the 
complexity since minimum length would be always less than or equal to O(m). 
So the total time complexity is O(nm).
