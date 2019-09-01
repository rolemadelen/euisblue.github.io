---
layout: post
title: "[자료구조] 원형 연결 리스트"
ref: ds-circular-linkedlist
date: 2019-04-01 10:36:00
categories: 
 - Data Structure
lang: ko
---

## 목차
- [기본 개념](#concept)
- [연산](#op)
- [구현](#implement)
- [Reference](#ref)
<hr />
<br />

## 기본 개념 <a id="concept"></a>
리스트의 끝을 널(NULL)로 나타낸다고 할 때, 원형 연결 리스트란 끝이 존재하지 않는 리스트다.
풀어서 설명하자면, 단일 연결 리스트에서 마지막 노드가 처음을 가리키는 것, 또는 이중 연결 리스트에서
첫 번째 노드의 이전 노드가 마지막 노드를 가리키거나 그 반대가 가능한 경우,
리스트가 원(circle)과 같이 끝없이 이어지게 되는 구조를 형성하게 된다. 그러므로 원의 형태의 구조를
가지고 있는 리스트라는 의미로 원형(circular) 연결 리스트라고 한다.

여기서는 단일 방향의 원형 리스트를 구현 할 것 이므로, 단일 연결 리스트의 노드 구조를 사용한다.
```c
typedef struct node_t
{
	struct node_t *next;
	elem data;
} Node;
```

## 연산 <a id="op"></a>
- **pushFront(..)** : 리스트 시작점에 노드를 추가한다.
- **pushBack(..)** : 리스트 마지막에 노드를 추가한다.
- **popFront(..)** : 리스트 첫 노드를 제거한다.
- **popBack(..)** : 리스트 마지막 노드를 제거한다.
- **insertAt(..)** : 원하는 위치의 노드를 추가한다.
- **removeAt(..)** : 원하는 위치의 노드를 제거한다.

## 구현 <a id="implement"></a>
기본적인 구조방식은 단일 연결 리스트의 구조를 기반으로 한다. 또한
pushBack과 popBack 함수 구현의 평이함를 위해 리스트 마지막 노드의 주소를 담고있는
tail 노드를 추가했다.

```c
typedef struct slinkedlist_t
{
	Node *head;
	Node *tail;
	size_t size;
} SLinkedList;
```

``` c
void pushFront(CLinkedList *list, elem data)
{
	Node *temp = createNode(data);

	if(list->head == NULL)
	{
		list->head = list->tail = temp;
		list->head->next = list->tail;
		list->tail->next = list->head;
	}
	else
	{
		temp->next = list->head;
		list->head = temp;
		list->tail->next = list->head;
	}
	++list->size;
}

void pushBack(CLinkedList *list, elem data)
{
	Node *temp = createNode(data);

	if(list->tail == NULL)
	{
		list->head = list->tail = temp;
		list->head->next = list->tail;
		list->tail->next = list->head;
	}
	else
	{
		list->tail->next = temp;
		temp->next = list->head;
		list->tail = temp;
	}

	++list->size;
}

void popFront(CLinkedList *list)
{
	Node *temp = list->head->next;
	free(list->head);
	list->tail->next = temp;
	list->head = temp;
	--list->size;
}

void popBack(CLinkedList *list)
{
	Node *temp = list->head;

	while(temp->next != list->tail)
	{
		temp = temp->next;
	}

	temp->next = list->head;
	free(list->tail);
	list->tail = temp;
	--list->size;
}

void insertAt(CLinkedList *list, int pos, elem data)
{
	if(pos <= 0)
	{
		pushFront(list, data);
	}
	else if(pos >= list->size)
	{
		pushBack(list, data);
	}
	else
	{
		Node *temp = list->head;
		for(int i = pos-1; i>0; --i)
		{
			temp = temp->next;
		}

		Node *newNode = createNode(data);
		newNode->next = temp->next;
		temp->next = newNode;
		++list->size;
	}
}

void removeAt(CLinkedList *list, int pos)
{
	if(pos <= 0)
	{
		popFront(list);
	}
	else if(pos >= list->size)
	{
		popBack(list);
	}
	else
	{
		Node *temp = list->head;
		for(int i = pos-1; i>0; --i)
		{
			temp = temp->next;
		}

		Node *remove = temp->next;
		temp->next = temp->next->next;
		free(remove);
		--list->size;
	}
}
```

## Reference <a id="ref"></a>
- [Wikipedia : Circular Linked List](https://en.wikipedia.org/wiki/Linked_list#Circular_linked_list)
- [Namu Wiki : Circular Linked List](https://namu.wiki/w/%EC%97%B0%EA%B2%B0%20%EB%A6%AC%EC%8A%A4%ED%8A%B8)
