---
layout: post
title: "[Data Structure] Doubly Linked List"
ref: ds-doubly-linkedlist
date: 2019-03-27 16:18:00
categories: 
 - Data Structure
lang: en
---

## Contents
- [Concept](#concept)
- [Operations](#op)
- [Implementation](#implement)
- [Applications](#app)
- [Reference](#ref)
<hr />
<br />

## Concept <a id="concept"></a>
Doubly linked list can reference both next and previous nodes.

```c
typedef struct node_t
{
	struct node_t *next;
	struct node_t *prev;
	elem data;
} Node;
```

The structure of doubly linked list is a bit safer than singly linked list in terms
of data loss. If head node is lost in singly linked list, all data are potentially lost and
there is no way to retrieve them. In doubly linked list however, it is possible to retrieve
them by traversing backward from the tail node (if linked correctly). But additional node
slightly increases the workload and size of the structure.

Unlike singly linked list where it takes linear time to delete current node, 
doubly linked list may perform the same task in constant time using previous and next nodes.

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
Implemented using two sentinel nodes to distinguish the beginning and end of the list.
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
## Applications <a id="app"></a>
- [Thread Scheduler](http://web.cecs.pdx.edu/~harry/Blitz/BlitzDoc/ThreadScheduler.htm)
- Music Player
  + next/prev features
- Undo/Re-do features

<br />
## Reference <a id="ref"></a>
- [Wikipedia : Doubly Linked List](https://en.wikipedia.org/wiki/Doubly_linked_list)
- [Namu Wiki : Doubly Linked List](https://namu.wiki/w/%EC%97%B0%EA%B2%B0%20%EB%A6%AC%EC%8A%A4%ED%8A%B8)
