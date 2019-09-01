---
layout: post
title: "[Data Structure] Circular Linked List"
ref: ds-circular-linkedlist
date: 2019-04-01 10:36:00
categories: 
 - Data Structure
lang: en
---

## Contents
- [Concept](#concept)
- [Operations](#op)
- [Implementation](#implement)
- [Reference](#ref)
<hr />
<br />

## Concept <a id="concept"></a>
If a last node of a particular list points back to the first node or vice versa (when its applicable
like doubly linked list), it creates a cycle and hence we call this a circular linked list, 
because one can start from any node in the list and can come back to it simply by
going around the list in a circle.

Since I'll be implementing a circular linked list that is unidirectional, the structure of the Node
is same as singly linked list's Node structure.
```c
typedef struct node_t
{
	struct node_t *next;
	elem data;
} Node;
```

<br />
## Operations <a id="op"></a>
- **pushFront(..)** : insert node at the beginning
- **pushBack(..)** : insert node at the end
- **popFront(..)** : remove first node
- **popBack(..)** : remove last node
- **insertAt(..)** : insert node to the list
- **removeAt(..)** : remove node in the list

<br />
## Implementation <a id="implement"></a>
This implementation is based upon singly linked list, therefore nodes can only reference 
the next node.

Added extra node called tail to remember the last node for my sake of simplicity
for implementing popBack and pushBack operations, which is totally optional.

```c
typedef struct slinkedlist_t
{
	Node *head;
	Node *tail;
	size_t size;
} SLinkedList;
```

```c
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

<br />
## Reference <a id="ref"></a>
- [Wikipedia : Circular Linked List](https://en.wikipedia.org/wiki/Linked_list#Circular_linked_list)
- [Namu Wiki : Circular Linked List](https://namu.wiki/w/%EC%97%B0%EA%B2%B0%20%EB%A6%AC%EC%8A%A4%ED%8A%B8)
