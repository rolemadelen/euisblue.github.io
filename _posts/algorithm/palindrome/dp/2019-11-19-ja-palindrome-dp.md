---
layout: post
title: "Algorithm・回文部分列 - DP"
ref: palindrome-dp
date: 2019-11-15 7:00:00
categories: Algorithm
published: false
tags: palindrome
lang: ja
---

## **回文部分列**

前に[回文](/algorithm/2019/11/13/ja-palindrome)について記事を作成した。

<br>

## **C++ コード**

```cpp
#include <iostream>
#include <string.h>
#include <cstdio>

using namespace std;

size_t longestPalindrome(string str)
{
    size_t size = str.size();
    size_t maxLength = 1;

    // All string with length 1 is a palindrome
    if (size == 1)
    {
        return maxLength;
    }

    // create a table
    bool table[size][size];
	memset(table, 0, sizeof(table)); 
    for (int i=0; i<size; ++i)
    {
        table[i][i] = true;
    }

    // Check length 2 string
    int start = 0;
    for (int i=0; i<size-1; ++i)
    {
        if (str[i] == str[i+1])
        {
            table[i][i+1] = true;
            start = i;
            maxLength = 2;
        }
    }

    //  k => length of the longest palindrome
    for (int k=3; k<=size; ++k)
    {
        for (int i=0; i<size-k+1; ++i)
        {
            int j = k - 1 + i;

            if (table[i+1][j-1] == true && str[i] == str[j])
            {
                table[i][j] = true;

                if (k > maxLength)
                {
                    maxLength = k;
                    start = i;
                }
            }
        }
    }

    printf("longest substr: ");
    for (int i=start; i<start+maxLength; ++i)
    {
        printf("%c", str[i]);
    }
    printf("\n");

    return maxLength;
}
```

<br>

## **説明**
