---
layout: post
title: "Check if a String is Palindrome"
ref: palindrome
date: 2019-11-14 7:00:00
categories: Algorithm
tags: palindrome
lang: en
---

## What is Palindrome?

Palindrome is a word or sentence that can be read forward or backward. 
For example, `racecar` is palindrome because
we can read from the either side and it still reads as `racecar`.

Often cases and spaces are ignored that
`raceCAR` and `RACe Ca r` are all considered as `racecar`, which is palindrome.

![Palindrome](/assets/images/algorithm/palindrome/normal/palindrome-en.jpg)

We can observe that the string `racecar` possess a mirror symmetry (`rac` and `car`). In fact, all palindromic strings are symmetrical.

We can use this fact to implement a method that checks if a string is palindrome.

<div class="divider"></div>

## Implementation

Since all palindromic strings are symmetrical, it's sufficient to compare the first half of the sttring with the latter half.

```cpp
bool isPalindrome(string str)
{
    setCases(str, LOWERCASE);
    ignoreSpaces(str);

    const int SIZE = str.end() - str.begin();
    const int HALF = SIZE >> 1;  // midpoint of the string

    for (int i=0; i<HALF; ++i)
    {
        if (str[i] != str[SIZE - 1 - i])
        {
            return false;
        }
    }

    return true;
}
```

<div class="divider"></div>

## Exercises
From. @[LeetCode](https://leetcode.com/problemset/all/?search=palindrome)
- [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) 
- [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)
