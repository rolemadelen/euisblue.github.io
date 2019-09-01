---
layout: post
title: "[알고리즘] 문자열 뒤집기"
ref: algorithm-rev-str
date: 2019-01-13 13:04:00
categories: Algorithm
lang: ko
---

## 목차
- [문자열 뒤집기](#algo)
- 풀이
  * [방법 1: 포인터 연산](#pointer)
  * [방법 2: 배열](#array)
  * [방법 3: 스택](#stack)
  * [방법 4: 큐](#q)
- [사용 사례](#app)
- [풀어 볼 문제](#try)
- [Reference](#ref)
<hr />
<br />

## 문자열 뒤집기 <a id="algo"></a>
주어진 문자열 맨 끝에서부터 하나하나 저장해나가면 역순이 되는, 이론 뿐만이 아니라 구현도 간단한
알고리즘이다. 이 알고리즘을 구현하는 방법에는 여러 방법이 있는데 여기서는 포인터, 배열, 스택, 그리고 큐를 이용해 문자열을 역순으로 만드는 방법에 대해 알아본다.

설명이 아닌, 단순히 이렇게 저렇게 할 수 있다를 보여주기 위한 것으로, 코드의 설명은 최소화로 한다.

<br />
## 풀이
### 포인터 연산<a id="pointer"></a>
개인적으로 가장 간단한 방법이면서 코드 자체도 간결하고 직관적이어서 좋은 방법이라고 생각한다.

포인터 연산을 이용한 방법으로 두 개의 포인터를 사용한다.첫 번째 포인터 `p`는 문자열의 처음을 
가리키고, 두 번째 포인터 `q`는 문자열의 마지막을 가리킨다.
그 다음 `*p`와 `*q` 서로의 값을 `p < q`일 동안 반복하면서 교체하면 역순이 된 문자열의 값을 얻게된다.

```c
/* String Reverse using two pointers */
void strrevptr(char *line)
{
	char *p = line;
	char *q = line + strlen(line) - 1;

	while(p < q)
	{
		char temp = *p;
		*p = *q;
		*q = temp;

		++p;
		--q;
	}
}
```

### 배열 <a id="array"></a>
배열을 이용한 방법으로 이론은 포인터 연산과 똑같다. 다만 개인적으로 코드가 포인터를 사용했을 때
보다 깔끔해 보이지 않아서 선호하는 편은 아니다.

```c
/* String reverse using array */
void strrevindex(char *line)
{
	int size = strlen(line);
	int bound = size >> 1;

	for(int i=0; i<bound; ++i)
	{
		char temp = line[i];
		line[i] = line[size-(1+i)];
		line[size-(1+i)] = temp;
	}
}
```

### 스택<a id="stack"></a>
스택의 LIFO (Last-In First-Out, 선입후출) 특성을 이용한 방법으로 
문자열의 문자를 전부 스택에 `push`한 다음 차례대로 스택에서 `pop` 하면 된다.

```c
// Reverse string using a stack
void revstrstk(char *line)
{
	stack<char> stk;
	char *p = line;

	while(*p != '\0')
	{
		stk.push(*p);
		++p;
	}

	while(!stk.empty())
	{
		cout << stk.top();
		stk.pop();
	}
	cout << endl;
}
```

### 큐 <a id="q"></a>
굳이 큐를 사용해야 하나 싶지만, 큐를 가지고 구현 하려면 두 개의 큐를 사용해야 한다.

첫 번째 큐가 `q1`, 두 번째 큐가 `q2`라고 가정하고 반복되는 부분을 간단히 설명해보자면,
1. `q1`에 문자 추가
2. `q2`에 `q1`의 문자들 전부 추가.
3. `q1`에 `q2`문자들 전부 추가
4. 문자가 `NULL`일 때까지 1 ~ 3번 반복

반복을 끝마치면 `q2`에 뒤집힌 문자열이 들어있게 된다.

```c
// Reverse a string using two queues
void revstrstk(char *line)
{
	queue<char> q;
	queue<char> q2;
	char *p = line;

	while(*p != '\0')
	{
		q.push(*p);
		
		while(!q2.empty())
		{
			q.push(q2.front());
			q2.pop();
		}

		while(!q.empty())
		{
			q2.push(q.front());
			q.pop();
		}

		++p;
	}

	p = line;
	while(!q2.empty())
	{
		*p = q2.front();
		q2.pop();
		++p;
	}
}
```

<br />
## 사용 사례 <a id="app"></a>
- 인터뷰 문제로 나온다
- Regex 역순으로 확인하면 효율적일때가 있다고 함 (Reference 확인)

<br />
## 풀어 볼 문제 <a id="try"></a>
- [팰린드롬인지 확인하기](https://www.acmicpc.net/problem/10988)

<br />
## Reference<a id="ref"></a>
- [StackExchange : string reversal usage](https://softwareengineering.stackexchange.com/questions/24691/what-do-you-use-string-reversal-for)
- [sexeger](https://www.perlmonks.org/index.pl?node=sexeger)
