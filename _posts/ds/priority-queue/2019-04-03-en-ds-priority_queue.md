---
layout: post
title: "[Data Structure] Priority Queue"
ref: ds-priority-queue
date: 2019-04-03 08:30:00
categories: 
 - Data Structure
lang: en
---

## Contents
- [Concept](#concept)
- [Operations](#op)
- [Implementation](#implement)
- [Applications of Priority Queue](#app)
- [Reference](#ref)
<hr />
<br />

## Concept <a id="concept"></a>
Priority Queue and Queue shares similar or same structure but there's a difference in how data
are stored. Queue follows First-In First-Out(FIFO) mechanism but priority queue orders data
based on each node's priority. So the 1st node could be processed later than the 100th node 
due it its priority.

Priority Queue can be implemented using array, linkedin, or heap.

Array and Linked List Time Complexity:
- Insert - O(1)
- GetHighestPriority - O(n)
- DeleteHighestPriority - O(n)

Heap Time Complexity:
- Insert - O(logn) or O(1) amortized
- GetHighestPriority - O(1)
- DeleteHighestPriority - O(logn)

<br />
## Operations <a id="op"></a>
- **Push(..)** : inserts data and sorts the undelying container
- **Pop(..)** : removes the data
- **GetHighestPriority(..)** : returns the highest priority data
- **GetSmallestPriority(..)** : returns the lowest priority data

<br />
## Implementation <a id="implement"></a>

I used linked list to implement the priority queue. The node structure looks like the following:
```c
typedef struct node_t
{
    struct PNode *next;
    struct PNode *prev;
    Element data;
    int priority;
} Node;
```

and I used two sentinel nodes to define the beginning and end of the list:
```c
typedef struct priority_queue_t
{
	Node *head;
	Node *tail;
	int size;
} PQueue;
```

```c
/* list modifier */
void Push(PQueue *pq, const Element data, const int priority)
{
	Node *curr = pq->head->next;
	Node *end = pq->tail;

	for(; curr != end; curr = curr->next)
	{
		// highest priority comes first
		if(curr->priority < priority)
		{
			break;
		}
	}

	Node *work = NewNode(data, priority);
	ConnectNode(work, curr);
	pq->size++;
}

void Pop(PQueue *pq)
{
	if(pq->size > 0)
	{
		printf("deleting the last node..\n");
		Delete(pq, pq->tail->prev);
	}
}

/* list access */
Element GetHighestPriority(const PQueue *pq)
{
	if(pq->size <= 0)
	{
		fprintf(stderr, "list is empty...\n");
		return -1;
	}

	return pq->head->next->data;
}

Element GetSmallestPriority(const PQueue *pq)
{
	if(pq->size <= 0)
	{
		fprintf(stderr, "list is empty...\n");
		return -1;
	}

	return pq->tail->prev->data;
}
```

<br />
## Applications <a id="app"></a>
 - CPU Scheduling
 - OS Task Scheduling
 - Shortest Path Algorithm
 - Control Netrwork Traffic 

<br />
## Reference <a id="ref"></a>
- [cppreference : priority queue](https://en.cppreference.com/w/cpp/container/priority_queue)
