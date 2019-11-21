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

회문에 대해 아주 간단히 설명하자면 앞뒤 어느쪽으로 읽어도 같은 단어 또는 문장인것을 회문이라고 한다.
회문 알고리즘의 경우 주어진 문자열 전체가 회문인지 아닌지 확인하는 알고리즘으로 `aba`는 
회문이지만 `aabad`는 회문이 아니다. 

`aabad`는 회문이 아니지만 부분 문자열인 `aa`와 `aba`는 회문이고, 여기서 `aba`가 길이 3으로 가장 길다.

최장 부분 문자열 회문을 구하는 방법에는 여러가지가 있는데 여기서는 동적 계획법(Dynamic Programming)을 이용한 방법을 소개한다.

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
    // itself is always pailnrome
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


코드는 복잡해 보이지만 하는 일은 간단하다.

![Longest Palindromic Substring Process](/assets/images/algorithm/palindrome/dp/dp-1.jpg)

`i`에서 길이 `k`의 문자열이 회문인지 확인하는 과정을 반복한다. <br>
하지만 `i`에서 `j`의 부분 문자열이 회문인지 아닌지 어떻게 판별하는 것일까? 

`table[i][j]`는 `i`에서 `j`의 부분 문자열이 회문이면 `True` 아니면 `False`의 값을 가진다.

아래의 그림을 보자.

![Longest Palindromic Substring Process](/assets/images/algorithm/palindrome/dp/dp-2.jpg)

자기자신(`[0][0]` ~ `[N-1][N-1]`)은 언제나 회문이므로 `True`의 값으로 초기화한다.

`i`에서 `j`가 회문이라면 `i+1`에서 `j-1`또한 회문이여야 한다. 
그렇기 때문에 `table[i+1][j-1]`이 `True`인지 확인 한 다음, `str[i]`과 `str[j]`가 같은지 확인하면 된다.

![Longest Palindromic Substring Process](/assets/images/algorithm/palindrome/dp/dp-3.jpg)

예를들어 `abcba`가 회문인지 확인하기 전, 내부 문자열인 `bcb`가 회문인지 확인해야한다. 
위 그림을 보면 `table[2][4]`는 `True`로 `bcb`는 회문이 맞고, `str[1]`과 `str[5]`또한 둘다 `a`로 
같은 문자이므로 `abcba`가 회문임을 알 수 있다.
