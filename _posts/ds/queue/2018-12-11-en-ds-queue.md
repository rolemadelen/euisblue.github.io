---
layout: post
title: "[Data Structure] Queue"
ref: ds-queue
date: 2018-12-11 23:59:00
categories: 
 - Data Structure
lang: en
---

## Contents
- <a href="#concept">Concept</a>
- <a href="#op">Operations</a>
- <a href="#implementation">Implementations</a>
  * <a href="#linkedlist">Linked List</a>
  * <a href="#array">Array</a>
- <a href="#app">Applications of Queue</a>
- <a href="#problem">Problems to Try</a>
- <a href="#ref">References</a>
<hr />
<br />

## Concept <a id="concept"></a>
A linear data structure that follows **FIFO**(First-In First-Out) design which an element that
came in first is served first. An element can only be inserted/deleted at the one end of the container.

## Operations <a id="op"></a>
The *front* refers to the *head* of the container and the *back* refers to the *tail* (or top) of the container.
 - **void enqueue(..)**: inserts a data.
 - **void dequeue(..)**: removes a data.
 - **bool isEmpty(..)**: determine whether the container is empty.
 - **T front(..)**: return the first elmeent.
 - **T back(..)**: return the last element.
 - **int size(..)**: return the number of elements in the container.

## Implementations <a id="implementation"></a>
Queue can be implemented using a linked list or an array and each system has both pros and cons.

If Queue is implemented with a linked list,
we can insert/delete elements in O(1) time, but access requires O(n) time.

If Queue is implemented with an array,
we can insert elements in O(1) time, but
deleting now takes O(n) due to shifting of elements.
But access can be done in O(1) time.

If number of operations on insert/delete is dominating the number of operations on access, it is better to choose Linked List rather than Array and vice versa.
 
### Linked List based Queue  <a id="linkedlist"></a>

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

### Array based Queue <a id="array"></a>

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

## Applications of Queue <a id="app"></a>
- BFS (Breadth First Search)
- OS Scheduling
- Disk Scheduling
- Print Queue
- Customer Queue (market, bank, ..., etc)

## Problems to Try <a id="problem"></a>
- [Printer Queue](https://www.acmicpc.net/problem/1966)

## References <a id="ref"></a>
- [acmicpc.net](https://www.acmicpc.net/)
- [cppreference : queue](https://en.cppreference.com/w/cpp/container/queue)
