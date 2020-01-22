---
layout: post
title: "회문(Palindrome) 판별하기"
ref: palindrome
date: 2019-11-14 7:00:00
categories: Algorithm
tags: palindrome
lang: ko
---

## 회문이란?

회문(Palindrome)은 앞뒤 어느쪽으로 읽어도 똑같은 단어 혹은 문장을 의미하며 
단어 사이의 공백과 대소문자(영문)는 보통 무시한다.

예) `오디오`, `오 디오`, `오 디 오` == `오디오` <br>
예) `RaceCar`, `R ACECAR`, `race car` == `racecar`

![Palindrome](/assets/images/algorithm/palindrome/normal/palindrome-ko.jpg)

`수박이박수` 라는 문자열의 중간 지점인 `이`를 기점으로, 부분 문자열인 `수박`과 `박수`가 서로 대칭을 이루고 있다. 
대칭은 회문과 절대 떼어놓을 수 없는 특징이므로 이를 이용해 회문 판별 프로그램을 구현 할 수 있다.

<div class="divider"></div>

## 구현

```cpp
bool isPalindrome(string str)
{
    setCases(str, LOWERCASE);    // 모든 문자를 소문자로 변환
    ignoreSpaces(str);           // 공백 제거

    const int SIZE = str.end() - str.begin();
    const int HALF = SIZE >> 1;  // 문자열의 중간 지점

    for (int i=0; i<HALF; ++i)
    {
        if (str[i] != str[SIZE - 1 - i])
        {
            // 비대칭
            return false;
        }
    }

    // 대칭
    return true;
}
```

<div class="divider"></div>

## 풀어 볼 문제
From. @[acmicpc.net](https://www.acmicpc.net/problemset?search=%ED%8C%B0%EB%A6%B0%EB%93%9C%EB%A1%AC)

• [10988. 팰린드롬인지 확인하기](https://www.acmicpc.net/problem/10988) <br>
• [13235. 팰린드롬](https://www.acmicpc.net/problem/13235) <br>
• [10174. 팰린드롬](https://www.acmicpc.net/problem/10174) <br>
• [1259. 팰린드롬 수](https://www.acmicpc.net/problem/1259) <br>
