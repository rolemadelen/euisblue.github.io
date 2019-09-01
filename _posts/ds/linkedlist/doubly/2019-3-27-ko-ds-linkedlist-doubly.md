---
layout: post
title: "[자료구조] 이중 연결 리스트"
ref: ds-doubly-linkedlist
date: 2019-03-27 16:18:00
categories: 
 - Data Structure
lang: ko
---

## 목차
- [기본 개념](#concept)
- [연산](#op)
- [구현](#implement)
- [사용 사례](#app)
- [Reference](#ref)
<hr />
<br />

## 기본 개념 <a id="concept"></a>
다음 노드뿐만 아니라 이전 노드의 참조도 가능한 이중 연결 리스트이다.

```c
typedef struct node_t
{
	struct node_t *next;
	struct node_t *prev;
	elem data;
} Node;
```

이중으로 연결되어 있어 단일 리스트보다는 데이터 손상의 위험이 적다. 단일 리스트의 경우
머리를 손상시키면 모든 데이터가 유실된다. 하지만 이중 리스트의 경우 꼬리에서부터 뒤로 
접근이 가능해, 데이터의 복원이 가능하다. 하지만 다음 노드만 참조하면 되는 단일 리스트와는 달리,
이중 리스트는 이전 노드까지 참조를 해야하기에 작업량과 자료구조의 크기가 약간 늘어난다.

이중 연결 리스트의 한 가지 장점이 더 있다. 단일 리스트에서 현재 가리키고 있는 노드를 삭제하려면, 머리부터 시작해 현재 노드를 가리키고 있는 노드까지 이동을 한 다음에야 현재 노드를 지울 수 있어 O(n)의 시간이 걸린다. 하지만 이중 연결 리스트의 경우, 현재 노드의 이전과 다음 포인터를 이용해 보다 쉽게
현 노드의 삭제가 가능하다.

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
## 구현 <a id="implement"></a>

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
void pushFront(DLinkedList *list, elem data)
{
	Node *newNode = createNode(data);
	connectLink(newNode, list->dummy_head->next);
	connectLink(list->dummy_head, newNode);
	
	++list->size;
}

void pushBack(DLinkedList *list, elem data)
{
	Node *lastNode = list->dummy_tail->prev;
	Node *newNode = createNode(data);
	connectLink(lastNode, newNode);
	connectLink(newNode, list->dummy_tail);

	++list->size;
}

void popFront(DLinkedList *list)
{
	if(list->size != 0)
	{
		Node *temp = list->dummy_head->next;
		free(list->dummy_head);
		temp->prev = NULL;
		list->dummy_head = temp;

		--list->size;
	}
}

void popBack(DLinkedList *list)
{
	if(list->size != 0)
	{
		Node *temp = list->dummy_tail->prev;
		free(list->dummy_tail);
		temp->next = NULL;
		list->dummy_tail = temp;

		--list->size;
	}
}

void insertAt(DLinkedList *list, int pos, elem data)
{
	if(pos <= 1)
	{
		pushFront(list, data);
	}
	else if(pos > list->size)
	{
		pushBack(list, data);
	}
	else if(pos > 0 && pos <= list->size)
	{
		Node *newNode = createNode(data);
		Node *temp = list->dummy_head;

		while(--pos)
		{
			temp = temp->next;
		}

		connectLink(newNode, temp->next);
		connectLink(temp, newNode);
		++list->size;
	}
}

void removeAt(DLinkedList *list, int pos)
{
	if(pos <= 1)
	{
		popFront(list);
	}
	else if(pos > list->size)
	{
		popBack(list);
	}
	else
	{
		Node *temp = list->dummy_head;
		while(pos--)
		{
			temp = temp->next;
		}

		connectLink(temp->prev, temp->next);
		free(temp);

		--list->size;
	}
}
```

<br />
## 사용 사례<a id="app"></a>
- [쓰레드 스케쥴러](http://web.cecs.pdx.edu/~harry/Blitz/BlitzDoc/ThreadScheduler.htm)
- 음악 플레이어
  + 다음/이전 버튼
- 실행취소/재실행 기능

<br />
## Reference <a id="ref"></a>
- [Wikipedia : Doubly Linked List](https://en.wikipedia.org/wiki/Doubly_linked_list)
- [Namu Wiki : Doubly Linked List](https://namu.wiki/w/%EC%97%B0%EA%B2%B0%20%EB%A6%AC%EC%8A%A4%ED%8A%B8)
