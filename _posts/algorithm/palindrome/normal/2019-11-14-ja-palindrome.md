---
layout: post
title: "回文かどうかを判定"
ref: palindrome
date: 2019-11-14 7:00:00
categories: Algorithm
tags: palindrome
lang: ja
---

## **回文とは?**

回文「Palindrome」は前から読んでも後ろから読んでも、同じ言葉になる単語及び文句だ。 <br>
例えば`足しました`とか`色白い`は前後に読んでも同じ意味なので回文だ。

英語の場合は大小文字と空白は無視するので`RAce c ar`と`raceCar`は同じ単語だ。

![Palindrome](/assets/images/algorithm/palindrome/normal/palindrome-ja.jpg)

文字`効`を中心に対称しているのを上の絵から確認できる。<br>
回文の文句は対称をなしているので、中間まで確認したら回文かどうか判断できる。<br>

<div class="divider"></div>

## 実装

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

非対称の文句の場合は回文ではないので、`false`を戻す。

<div class="divider"></div>

## **練習問題**
From. @[LeetCode](https://leetcode.com/problemset/all/?search=palindrome)

• [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) <br>
• [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)
