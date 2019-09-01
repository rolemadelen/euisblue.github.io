---
layout: post
title: "[자료구조] 단일 연결 리스트"
ref: ds-singly-linkedlist
date: 2019-03-27 15:15:00
categories: 
 - Data Structure
lang: ko
---

## 목차
- [기본 개념](#concept)
- [연산](#op)
- [구현](#implementation)
- [사용 사례](#app)
- [풀어 불 문제](#problem)
- [Reference](#ref)
<hr />
<br />

## 기본 개념 <a id="concept"></a>
단일 연결 리스트(Singly Linked List)는 가장 기본적인 형태의 연결 리스트로 오직 다음 
노드의 참조만이 가능하다.

```c
typedef struct node_t
{
	struct node_t *next;
	elem data;
} Node;
```

단순한 형태의 자료구조지만 단순한 만큼 위험성 또한 존재한다.
첫 노드의 주소를 잃어버리거나 실수로 덮어버릴 경우 모든 데이터의 접근이 불가능하다.
같은 이유로 중간에 노드의 참조를 잘못 할 경우, 그 노드서부터 뒤쪽 자료들에는 접근 할 수가 없다.

리스트의 장점으로는 빠른 데이터의 추가와 제거로 두 연산 모두 O(1)의 시간이 걸린다. <br />
하지만 마지막 노드에 접근하기 위해서는 무조건 첫 노드부터 접근해야 되기때문에 O(n)의 시간이 걸린다.

<br />
## 연산 <a id="op"></a>
- **pushFront(..)** : 리스트 시작점에 노드를 추가한다.
- **pushBack(..)** : 리스트 마지막에 노드를 추가한다.
- **popFront(..)** : 리스트 첫 노드를 제거한다.
- **popBack(..)** : 리스트 마지막 노드를 제거한다.
- **insertAt(..)** : 원하는 위치의 노드를 추가한다.
- **removeAt(..)** : 원하는 위치의 노드를 제거한다.

<br />
## 구현 <a id="implementation"></a>

리스트 처음과 끝을 나타내는 더미 노드(Sentinel Node)를 사용하여 구현했다. 
```c
typedef struct slinkedlist_t
{
	// Sentinel nodes
	Node *dummy_head;
	Node *dummy_tail;
	size_t size;
} SLinkedList;
```

``` c
void pushFront(SLinkedList *list, elem data)
{
	Node *newNode = createNode(data);
	Node *temp = list->dummy_head->next;

	connectLink(list->dummy_head, newNode);
	connectLink(newNode, temp);
	
	++list->size;
}

void pushBack(SLinkedList *list, elem data)
{
	// locate the last node
	Node *lastNode = list->dummy_head;
	while(lastNode->next != list->dummy_tail)
	{
		lastNode = lastNode->next;
	}

	// add new node
	Node *newNode = createNode(data);
	connectLink(lastNode, newNode);
	connectLink(newNode, list->dummy_tail);

	++list->size;
}

void popFront(SLinkedList *list)
{
	if(list->size != 0)
	{
		Node *temp = list->dummy_head->next->next;
		free(list->dummy_head->next);
		connectLink(list->dummy_head, temp);
		--list->size;
	}
}

void popBack(SLinkedList *list)
{
	if(list->size != 0)
	{
		// locate the last node
		Node *lastNode = list->dummy_head;
		while(lastNode->next->next != list->dummy_tail)
		{
			lastNode = lastNode->next;
		}

		// remove the last node and reconnect links
		free(lastNode->next);
		connectLink(lastNode, list->dummy_tail);
		--list->size;
	}
}

void insertAt(SLinkedList *list, int pos, elem data)
{
	if(pos <= 0)
	{
		pushFront(list, data);
	}
	else if(pos > list->size)
	{
		pushBack(list, data);
	}
	else if(pos > 0 && pos <= list->size)
	{
		Node *temp = list->dummy_head;
		for(size_t i=0; i<pos; ++i)
		{
			temp = temp->next;
		}

		Node *newNode = createNode(data);
		connectLink(newNode, temp->next);
		connectLink(temp, newNode);

		++list->size;
	}
}

void removeAt(SLinkedList *list, int pos)
{
	if(pos <= 0)
	{
		popFront(list);
	}
	else if(pos > list->size)
	{
		popBack(list);
	}
	else
	{
		Node *prev = list->dummy_head;
		for(size_t i=0; i<pos-1; ++i)
		{
			prev = prev->next;
		}

		Node *temp = prev->next->next;
		free(prev->next);
		connectLink(prev, temp);

		--list->size;
	}
}

```

<br />
## 사용 사례 <a id="app"></a>
- 스택의 구현
- 큐의 구현
- 해시 체이닝
- FAT 파일 시스템 - 청킹(chunking)

<br />
## 풀어 볼 문제 <a id="problem"></a>
 - [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
 - [Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)

<br />
## Reference <a id="ref"></a>
- [Wikipedia : Linked list](https://en.wikipedia.org/wiki/Linked_list)
- [Namu Wiki : Linked List](https://namu.wiki/w/%EC%97%B0%EA%B2%B0%20%EB%A6%AC%EC%8A%A4%ED%8A%B8)
