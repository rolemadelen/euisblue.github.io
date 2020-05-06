---
layout: post
title: "14. Longest Common Prefix"
ref: leetcode-14
date: 2020-05-06 14:00:00 +0900
categories: LeetCode
lang: ko
---

## 문제
- **난이도**: Easy
- **관련 주제**: String

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string `""`.

All given inputs are in lowercase letters a-z.

[LeetCode](https://leetcode.com/problems/longest-common-prefix)

<div class="divider"></div>

## 구현
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

## 복잡도
`n`개의 단어가 주어졌을 때 모든 단어의 첫 문자를 확인하고, 그 다음 문자를 확인하는 식의 알고리즘.

우선 최소 길이의 단어를 알아내야 하는데 이 과정에서 O(nm)의 시간이 걸립니다. `n`은 단어의 
개수이고 `m`은 최장 단어의 길이입니다. 단어를 구했으면 이제 반복문으로 모든 단어들의 문자를 
확인하면 되는데 이 연산들은 시간복잡도에 영향을 끼치지 않습니다. 영향이 없다기 보다는 
최소 문자열의 길이가 이미 O(m)보다 작거나 같기 때문에, 이 연산과는 상관없이 
최종 시간복잡도는 O(nm)이 됩니다.
