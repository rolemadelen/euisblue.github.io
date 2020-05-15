---
layout: post
title: "28. Implement strstr()"
ref: leetcode-28
date: 2020-05-09 07:00:00 +0900
categories: LeetCode
lang: ko
---

## {{ site.ps-post[page.lang].problem }}
- **{{ site.ps-post[page.lang].level }}**: Easy
- **{{ site.ps-post[page.lang].related }}**: Two Pointer, String

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. 

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

[LeetCode](https://leetcode.com/problems/implement-strstr)

<div class="divider"></div>

## {{ site.ps-post[page.lang].code }}

- Runtime: 32 ms, faster than 86.93%
- Memory: 9.5 MB, < 100.00%
```rb
def strstr(haystack, needle)
  return 0 if !needle or needle.empty?
  pos = haystack.index needle
  return pos == nil ? -1 : pos
end
```

- Runtime: 36ms, faster than 64.713%
- Memory: 9.5 MB, less than 100.00%
```rb
def my_strstr(haystack, needle)
    return 0 if needle == ''
    nsize = needle.size
    i = 0
    while true
        break if haystack[i+nsize-1] == nil
        return i if haystack[i...(i+nsize)] == needle
        i += 1
    end
    
    return -1
end
```

<div class="divider"></div>

## {{ site.ps-post[page.lang].comp }}
