---
layout: post
title: "큐 (Queue)"
ref: ds-queue
date: 2018-12-11 23:59:00
last_modified_at: 2020-01-25 16:44:00
categories: 
 - Data Structure
lang: ko
---

## 목차
- [큐(Queue)란?](#concept)
- [연산](#op)
- [구현](#implement)
  + [연결 리스트(Linked List) 기반](#linkedlist)
  + [배열(Array) 기반](#array)
- [사용 사례](#app)
- [풀어볼 문제](#try)

<div class="divider"></div>
## 큐(Queue)란? <a id="concept"></a>
큐(Queue)는 스택과 마찬가지로 선형 자료구조의 일종이다. 하지만 스택과는 반대의 개념으로
**FIFO**(First-In First-Out) 디자인을 사용해, 먼저 들어온 데이터가 먼저 처리된다.

<div class="divider"></div>
## 연산 <a id="op"></a>
 - **enqueue**: 데이터를 추가한다
 - **dequeue**: 최근 항목을 삭제한다
 - **peek**: 마지막으로 추가된 데이터를 반환한다
 - **isEmpty**: 컨테이너가 비어있는지 확인한다
 - **getSize**: 컨테이너에 들어있는 항목의 총 개수를 반환한다

<div class="divider"></div>
## 구현 <a id="implement"></a>
 큐는 연결 리스트와 배열로 구현할 수 있으며, 각각 장단점이 존재한다.

 **연결 리스트**로 구현할 경우
 - 데이터 추가/제거 비용:  O(1)
 - 데이터 접근 비용: O(n)

 **배열**로 구현할 경우, 
 - 데이터 추가 비용: O(1)
 - 데이터 제거 비용: O(n) 
 - 데이터 접근 비용: O(1)

데이터 추가와 제거 연산의 비용이 접근 연산보다 훨씬 큰 경우 연결 리스트를 사용하고, 
    보다 작을 때는 배열을 쓰는 편이 좋다.
 
<div class="divider"></div>

### 연결 리스트(Linked List) 기반 <a id="linkedlist"></a>

```java
public class Queue
{
    private Node head;
    private Node end;
    int length;

    // Constructor
    public Queue()
    {
        head = null;
        end = null;
        length = 0;
    }

    // Inserts an item to the queue
    public void enqueue(int data)
    {
        Node node = new Node(data);

        if (end == null)
        {
            head = node;
            end = head;
        }
        else
        {
            end.next = node;
            end = node;
        }

        ++length;
    }

    // Removes front element from the queue
    public int dequeue()
    {
        if (end == null)
        {
            System.out.println("Underflow occurred..");
            System.exit(1);
        }

        if (head == end)
        {
            end = null;
        }

        --length;
        int ret = head.data;
        head = head.next;
        return ret;
    }
    
    public Integer peek()
    {
        if (end == null)
        {
            System.out.println("Queue is empty..");
            return null;
        }

        return head.data;
    }

    public boolean isEmpty()
    {
        return length == 0;
    }

    public int getSize()
    {
        return length;
    }

    // Helper class
    class Node
    {
        private Integer data;
        private Node next;

        public Node(Integer data)
        {
            this.data = data;
        }
    }

}
```

<div class="divider"></div>
### 배열(Array) 기반 <a id="array"></a>

```java
public class Queue
{
    private int[] queue;
    private int front;    // points to front element
    private int rear;     // points to last element 
    private int size;     // maximum size of the queue
    private int capacity; // current size of the queue

    // Constructor
    public Queue(int n)
    {
        queue = new int[n];
        size = n;
        front = 0;
        rear = -1;
        capacity = 0;
    }

    // Inserts an item to the queue
    public void enqueue(int data)
    {
        if (isFull())
        {
            System.out.println("OverFlow occurred..");
            System.exit(1);
        }

        System.out.println("Inserting " + data);

        rear = (rear + 1) % size;
        queue[rear] = data;
        ++capacity;
    }

    // Removes front element from the queue
    public int dequeue()
    {
        if (isEmpty())
        {
            System.out.println("Underflow occurred..");
            System.exit(1);
        }


        int item = queue[front];
        System.out.println("Dequeue " + item);

        front = (front + 1) % size;
        --capacity;

        return item;
    }

    // Return front element in the queue
    public Integer peek()
    {
        if (isEmpty())
        {
            System.out.println("Queue is empty..");
            return null;
        }

        return queue[front];
    }

    public boolean isEmpty()
    {
        return capacity == 0;
    }

    public boolean isFull()
    {
        return capacity == size;
    }

    public int getSize()
    {
        return size;
    }
}
```

<div class="divider"></div>
## 사용 사례 <a id="app"></a>
- 너비 우선 탐색 (Breadth First Search)
- OS 작업 일정
- Disk 작업 일정
- 대기열

<div class="divider"></div>
## 풀어볼 문제 <a id="try"></a>
From. @[acmicpc.net](https://www.acmicpc.net/problem/10845)

- [1966. 프린터 큐](https://www.acmicpc.net/problem/1966)
- [10845. 큐](https://www.acmicpc.net/problem/10845)
