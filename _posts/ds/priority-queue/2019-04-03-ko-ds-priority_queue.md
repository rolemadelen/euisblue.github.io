---
layout: post
title: "[자료구조] 우선순위 큐"
ref: ds-priority-queue
date: 2019-04-03 08:30:00
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

## 우선순위 큐 란? <a id="concept"></a>
우선순위 큐는 기본적으로 큐와 같은 구조를 가지고 있으나 데이터를 저장하는 방식에서의 차이가 있다.
일반적인 큐와 달리 데이터가 들어온 순서 보다는 우선순위에 중점을 둔다. 그렇기에 처음 들어온 데이터가
우선순위에 밀려 100번째 들어온 데이터보다 늦게 처리 될 수도 있다.

우선순위 큐는 배열, 링크드리스트, 또는 힙을 이용해 구현할 수 있다.

배열/링크드리스트 구현 시간 복잡도:
- Insert - O(1)
- GetHighestPriority - O(n)
- DeleteHighestPriority - O(n)

힙 구현 시간 복잡도:
- Insert - O(logn) or O(1) amortized
- GetHighestPriority - O(1)
- DeleteHighestPriority - O(logn)

<br />
## 연산 <a id="op"></a>
- **Push(..)** : 데이터 삽입과 동시에 리스트 재정렬
- **Pop(..)** : 데이터 삭제
- **GetHighestPriority(..)** : 우선순위가 가장 높은 데이터를 반환 
- **GetSmallestPriority(..)** : 우선순위가 가장 낮은 데이터를 반환

<br />
## 구현 <a id="implement"></a>
링크드 리스트를 이용해 우선순위 큐를 구현했다. 우선순위 큐에서 사용 할 노드의 구조는 아래와 같다.
```c
typedef struct node_t
{
    struct PNode *next;
    struct PNode *prev;
    Element data;
    int priority;
} Node;
```

그리고 두 개의 끝(Sentinel) 노드들을 사용해서 리스트의 시작과 끝을 알기쉽도록 했다.
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
## 사용 사례 <a id="app"></a>
 - CPU 스케쥴링
 - OS 작업 스케쥴링
 - 최단 경로 알고리즘
 - 네트워크 트래픽 제어

<br />
## Reference <a id="ref"></a>
- [cppreference : priority queue](https://en.cppreference.com/w/cpp/container/priority_queue)
