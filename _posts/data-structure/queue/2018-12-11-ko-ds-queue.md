---
layout: post
title: "[자료구조] 큐"
ref: ds-queue
date: 2018-12-11 23:59:00
categories: 
 - Data Structure
lang: ko
---

## 목차
- <a href="#concept">기본 개념</a>
- <a href="#op">연산</a>
- <a href="#implementation">구현</a>
  * <a href="#linkedlist">연결 리스트(Linked List)</a>
  * <a href="#array">배열(Array)</a>
- <a href="#app">사용 사례</a>
- <a href="#problem">풀어 볼 문제</a>
- <a href="#ref">References</a>
<hr />
<br />

## 큐의 개념 <a id="concept"></a>
한 쪽 끝에서만 자료의 추가/제거가 가능한 **FIFO**(First-In First-Out) 형식의 선형 자료구조.
스택 (Stack)과는 반대의 개념으로 먼저 들어온 데이터가 먼저 처리된다.

## 큐의 연산 <a id="op"></a>
큐(Queue)에서의 자료 추가/제거는 전부 **큐의 끝**에서 연산이 이루어지며 가장 최근에 추가 된 
자료가 큐의 끝에 위치한다.
 - **void enqueue(..)**: 데이터를 추가한다.
 - **void dequeue(..)**: 최근 항목을 삭제한다.
 - **bool isEmpty(..)**: 큐가 비어있는지 확인한다.
 - **T front(..)**: 큐의 첫 번째 항목을 반한한다.
 - **T back(..)**: 큐의 마지막 항목을 반환한다.
 - **int size(..)**: 큐의 크기를 반환한다.

## 큐의 구현 <a id="implementation"></a>
 큐는 연결 리스트와 배열로 구현 할 수 있으며, 각각의 장단점이 존재한다.

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
 
### 연결 리스트(Linked List) 큐 <a id="linkedlist"></a>

```c
void enqueue(Queue *q, elem data)
{
	Node *newNode = malloc(sizeof(*newNode));
	newNode->next = NULL;
	newNode->data = data;

	if(q->tail == NULL)
	{
		q->head = q->tail = newNode;
		return;
	}

	q->tail->next = newNode;
	q->tail = newNode;

	++(q->size);
}

void dequeue(Queue *q)
{
	if(q->head == NULL)
	{
		printf("queue is empty\n");
		assert(0);
	}
	
	Node *temp = q->head;
	q->head = q->head->next;

	if(q->head==NULL)
	{
		q->tail = NULL;
	}

	free(temp);

}

bool isEmpty(const Queue * const q)
{
	return q->size == 0;
}

elem front(const Queue * const q)
{
	assert(q->head!=NULL);
	return q->head->data;
}

elem back(const Queue * const q)
{
	assert(q->tail!=NULL);
	return q->tail->data;
}

int size(const Queue * const q)
{
	return q->size;
}
```

### 배열(Array) 큐 <a id="array"></a>

```c
void enqueue(Queue *q, elem data)
{
	if(q->size >= q->capacity)
	{
		printf("Queue is full\n");
		return;
	}

	q->queue[q->size] = data;
	++(q->size);
}

void dequeue(Queue *q)
{
	if(q->size < 1)
	{
		printf("Queue is empty\n");
		return;
	}

	--(q->size);
}

bool isEmpty(const Queue * const q)
{
	return q->size == 0;
}

elem front(const Queue * const q)
{
	if(q->size <= 0)
	{
		return -1;
	}

	return (q->queue)[0];
}

elem back(const Queue * const q)
{
	if(q->size <= 0)
	{
		return -1;
	}
	return (q->queue)[q->size-1];
}

int size(const Queue * const q)
{
	return q->size;
}
```

## 큐의 사용 사례 <a id="app"></a>
- 너비 우선 탐색 (Breadth First Search)
- OS 작업 일정
- Disk 작업 일정
- 대기열
  * 프린터
  * 손님
  * 티켓 카운터

## 풀어 볼 문제 <a id="problem"></a>
- [큐](https://www.acmicpc.net/problem/10845)
- [프린터 큐](https://www.acmicpc.net/problem/10845)

## References <a id="ref"></a>
- [acmicpc.net](https://www.acmicpc.net/)
- [cppreference : queue](https://en.cppreference.com/w/cpp/container/queue)
