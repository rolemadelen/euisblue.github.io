---
layout: post
title: "[알고리즘] 회문(Palindrome) 판별"
ref: palindrome
date: 2019-11-14 7:00:00
categories: Algorithm
tags: palindrome
lang: ko
---

## **회문이란?**

회문(Palindrome)은 앞뒤 어느쪽으로 읽어도 똑같은 단어 혹은 문장을 의미한다. 단어 사이의 공백은 보통 무시한다.
고로 `오디오`, `오 디오`, `오디 오`는 전부 회문이다.

참고로 영어의 경우는 대소문자도 무시한다. 예를들어 `RaceCar`, `R ACECAR`, `race car`은 전부 같은 단어이자 회문이다.

<br>

## **C++ 코드**
가장 기본적인 형태의 회문 알고리즘으로 주어진 문자열이 회문인지 판별한다. 대소문자를 구분하거나 공백을 제거하는 부분은 없으므로 여기서 좀 더 보완이 가능하다.

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

## **설명**

`수박이박수`라는 문자열이 주어졌다.

![Palindrome](/assets/images/algorithm/palindrome/normal/palindrome-ko.jpg)

위 그림을 보면 문자열의 중간인 `이`를 기점으로 `수`와 `박`이 대칭을 이루고 있다. 
그렇기 때문에  첫 문자(`수`)부터 가운데 문자(`이`)까지만 확인을 하면 회문인지 아닌지 판별할 수 있으며 이를 코드로 표현하면 아래와 같다.
```cpp
for (int i=0; i<HALF; ++i)
{
        if (str[i] != str[SIZE - i - 1]) 
        { 
            return false;
        }
}
```

만약 비대칭일 경우 회문이 아니므로 바로 `false`를 반환하여 반복문을 탈출한다.

<br>

## **풀어 볼 문제**
[백준 온라인 저지](https://www.acmicpc.net/problemset?search=%ED%8C%B0%EB%A6%B0%EB%93%9C%EB%A1%AC)에서 간단한 회문 문제를 풀어보자.

- [10988번](https://www.acmicpc.net/problem/10988), [13235번](https://www.acmicpc.net/problem/13235)
  + 위에서 구현 한 것 처럼 회문 알고리즘을 구현만 할 수 있으면 풀 수 있는 문제.
- [10174번](https://www.acmicpc.net/problem/10174)
  + 대소문자를 구분하지 않지만 공백은 구분하는 문제.
- [1259번](https://www.acmicpc.net/problem/1259)
  + 주어진 수가 회문인지 판별하는 문제.
