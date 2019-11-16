---
layout: post
title: "Algorithm・回文判断"
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

<br>

## **C++コード**

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

## **説明**

文字列`よく効くよ`が与えられた。

![Palindrome](/assets/images/algorithm/palindrome/normal/palindrome-ja.jpg)

文字`効`を中心に対称をなしているのを上の絵から確認できる。<br>
回文の文句は対称をなしているので、中間まで確認したら回分かどうか判断できる。<br>
これをコードで表現すると下記のようになる。

```cpp
for (int i=0; i<HALF; ++i)
{
        if (str[i] != str[SIZE - i - 1]) 
        { 
            return false;
        }
}
```

非対称の文句の場合は回文ではないので、`false`を戻す。

<br>

## **練習問題**
[LeetCode](https://leetcode.com/problemset/all/?search=palindrome)の回文関連問題を解けて見よう。
- [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
- [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)
