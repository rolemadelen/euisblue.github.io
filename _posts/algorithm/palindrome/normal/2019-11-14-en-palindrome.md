---
layout: post
title: "[Algorithm] Palindrome"
ref: palindrome
date: 2019-11-14 7:00:00
categories: Algorithm
tags: palindrome
lang: en
---

## **What is Palindrome?**

Palindrome is a word or sentence that can be read forward or backward. For example, `racecar` is palindrome because
we can read from the either side and it still reads as `racecar`.

Spaces and capitalized letters are often ignored; thus, `raceCAR` and `RACe  Ca r` are all considered as palindrome string.

<br>

## **C++ Implementation**

This is a straightforward basic palindrome algorith that checks whether a given string is palindrome. 
We can improve this algorithm by including case-conversion (upper to lower or vice versa) and space-removal to make it little bit more robust.

```cpp
bool isPalindrome(string str)
{
    const int SIZE = str.size();
    const int HALF = SIZE >> 1;

    for (int i=0; i<HALF; ++i)
    {
        if (str[i] != str[SIZE - i - 1])
        {
            return false;
        }   
    }

    return true;
}
```

<br>

## **Explanation**

We have a string `racecar`.

![Palindrome](/assets/images/algorithm/palindrome/normal/palindrome-en.jpg)

From the picture above, we can see that every characters form a pair in palindrome with middle character being the exception in odd length string.

Since palindrome strings are symmetrical, we only need to check up to the midway to determine the palindrome-ness.

```cpp
for (int i=0; i<HALF; ++i)
{
        if (str[i] != str[SIZE - i - 1]) 
        { 
            return false;
        }
}
```

If a string is asymmetrical, we simply return `false` and break.

<br>

## **Exercises**
Try to solve these palindrome exercises from [LeetCode](https://leetcode.com/problemset/all/?search=palindrome).
- [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
- [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)
