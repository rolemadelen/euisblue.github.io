---
layout: post
title: "[Data Structure] Singly Linked List"
ref: ds-singly-linkedlist
date: 2019-03-27 15:15:00
categories: 
 - Data Structure
lang: en
---

## Contents
- [Concept](#sll)
- [Operations](#op)
- [Implementations](#implementation)
- [Applications](#app)
- [Problems to Try](#problem)
- [Reference](#ref)
<hr />
<br />

## Concept <a id="sll"></a>
Singly Linked List is the most basic form of a linked list in which current node can 
only reference the next node.

```c
typedef struct node_t
{
	struct node_t *next;
	elem data;
} Node;
```

It is a simple data structure but does have risky parts to take care of. <br />
If address of the particular node is lost or overridden, you no longer have an access
to any data linked by that node.

The **constant** time of insertion and deletion is the advantage of the list. <br />
But it takes **linear**time for an access because you must traverse from the first node 
to the target node.

<br />
## Operations <a id="op"></a>
- **pushFront(..)** : insert node at the beginning
- **pushBack(..)** : insert node at the end
- **popFront(..)** : remove first node
- **popBack(..)** : remove last node
- **insertAt(..)** : insert node to the list
- **removeAt(..)** : remove node in the list

<br />
## Implementation <a id="implementation"></a>
This linked list use two sentinel nodes to distinguish the beginning and end of the list.
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
## Applications <a id="app"></a>
- Stack
- Queue
- Hash Chaining
- FAT File System - Chunking

<br />
## Problems to Try <a id="problem"></a>
 - [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
 - [Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)

<br />
## Reference <a id="ref"></a>
- [Wikipedia : Linked list](https://en.wikipedia.org/wiki/Linked_list)
- [Namu Wiki : Linked List](https://namu.wiki/w/%EC%97%B0%EA%B2%B0%20%EB%A6%AC%EC%8A%A4%ED%8A%B8)
