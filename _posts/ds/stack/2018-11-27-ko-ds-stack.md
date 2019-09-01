---
layout: post
title: "[자료구조] 스택"
ref: ds-stack
date: 2018-11-27 17:22:00
categories: 
 - Data Structure
lang: ko
---

## 목차
- [기본 개념](#concept)
- [연산](#op)
- [구현](#implement)
  + [연결 리스트(Linked List) 기반](#linkedlist)
  + [배열(Array) 기반](#array)
- [사용 사례](#app)
- [풀어 볼 문제](#try)
- [Reference](#ref)
<hr />
<br />

## 기본 개념 <a id="concept"></a>
한 쪽 끝에서만 자료의 추가/제거가 가능한 **LIFO** (Last-In First-Out) 또는 **FILO** (First-In Last-out) 형식의 선형(linear) 자료구조.

## 연산 <a id="op"></a>
스택(Stack)에서의 자료 추가/제거는 전부 **스택의 끝**에서 연산이 이루어지며 가장 최근에 추가 된 자료가 스택의 끝에 위치한다.

 - **void push(..)**: 스택에 데이터를 추가한다.
 - **void pop(..)**: 스택에서 최근 항목을 삭제한다.
 - **bool isEmpty(..)**: 스택이 비어있는지 확인한다.
 - **T top(..)**: 스택의 최근 항목을 반환한다.
 - **int size(..)**: 스택의 들어있는 항목의 총 개수를 반환한다.

## 구현 <a id="implement"></a>
 스택은 연결 리스트와 배열로 구현 할 수 있으며, 각각의 장단점이 존재한다.

 **연결 리스트**로 구현 할 경우
 - 자료를 O(1) 시간에 추가/제거 할 수 있다.
 - 하지만 자료의 접근에는 O(n)의 연산 시간이 걸린다.  

 **배열**로 구현 할 경우, 
 - 자료를 O(1) 시간에 추가 할 수 있으나,
 - 제거의 경우 자료들을 한 칸씩 왼쪽으로 밀어줘야 하기 때문에 O(n)이 된다. 
 - 하지만 자료의 접근에는 O(1)의 시간이 걸린다.

프로그램에 자료의 추가/제거의 연산이 접근보다 절대적으로 많다면 연결 리스트를,
그렇지 않다면 배열을 쓰는 쪽이 좋다. 모든 연산이 비슷하게 쓰인다면? 우선 순위를 매겨서
직접 판단해야 하지 않을까 싶다.
 
### 연결 리스트(Linked List) 스택 <a id="linkedlist"></a>
```c
void push(Stack *stk, elem _data)
{
	if(stk->head == NULL)
	{
		stk->head = malloc(sizeof(*(stk->head)));
		stk->head->data = _data;
		stk->head->next = NULL;
	}
	else
	{
		Node *temp = malloc(sizeof(*temp));
		temp->data = _data;
		temp->next = stk->head;
		stk->head = temp;
	}

	++(stk->size);
}

void pop(Stack *stk)
{
	if(isEmpty(stk))
	{
		return;
	}

	Node *temp = stk->head;
	stk->head = stk->head->next;
	temp->next = NULL;
	free(temp);

	--(stk->size);
}

bool isEmpty(const Stack *stk)
{
	return stk->size == 0;
}

elem top(const Stack *stk)
{
	assert(stk->size != 0);

	return stk->head->data;
}

int size(const Stack *stk)
{
	return stk->size;
}
```

### 배열(Array) 스택 <a id="array"></a>

```c
void push(Stack *stk, elem data)
{
	if(stk->size == stk->capacity)
	{
		fprintf(stderr, "Stack is full\n");
		return;
	}

	stk->stack[stk->size] = data;
	++(stk->size);
}

void pop(Stack *stk)
{
	--(stk->size);
}

bool isEmpty(const Stack *stk)
{
	return stk->size == 0;
}

elem top(const Stack *stk)
{
	assert(stk->size != 0);

	return stk->stack[stk->size-1];
}

int size(const Stack *stk)
{
	return stk->size;
}
```

## 사용 사례 <a id="app"></a>
- 트리 순회(Traversal) 알고리즘
- 퇴각 검색/되추적 (Backtracking) 알고리즘
  * 미로찾기
  * 스도쿠 문제풀이 (해결기)
- 그래프 알고리즘
  * 위상 정렬 (Topological Sort)
- 수식 관련 문제
  * 올바른 괄호 문자열 (VPS, Valid Parenthesis String)
  * 중위/후위/선위 표기법
- 편집기
  * 재수행(redo)
  * 수행 취소(undo)
- 웹 브라우저
  * 앞으로가기 
  * 뒤로가기

## 풀어 볼 문제 <a id="try"></a>
 - [스택](https://www.acmicpc.net/problem/10828)
 - [괄호](https://www.acmicpc.net/problem/9012)
 - [후위 표기식](https://www.acmicpc.net/problem/1918)
 - [키로거](https://www.acmicpc.net/problem/5397)

## References <a id="ref"></a>
- [acmicpc.net](https://www.acmicpc.net/)
- [cppreference : stack](https://en.cppreference.com/w/cpp/container/stack)
