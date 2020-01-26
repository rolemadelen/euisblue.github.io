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
- [큐(Queue) 란?](#concept)
- [연산](#op)
- [구현](#implement)
  + [연결 리스트(Linked List) 기반](#linkedlist)
  + [배열(Array) 기반](#array)
- [사용 사례](#app)
- [풀어 볼 문제](#try)

<div class="divider"></div>
## 큐(Queue) 란? <a id="concept"></a>
한 쪽 끝에서만 자료의 추가/제거가 가능한 **FIFO**(First-In First-Out) 형식의 선형 자료구조.
스택 (Stack)과는 반대의 개념으로 먼저 들어온 데이터가 먼저 처리된다.

<div class="divider"></div>
## 연산 <a id="op"></a>
큐(Queue)에서의 자료 추가/제거는 전부 **큐의 끝**에서 연산이 이루어지며 가장 최근에 추가 된 
자료가 큐의 끝에 위치한다.
 - **void enqueue(..)**: 데이터를 추가한다.
 - **void dequeue(..)**: 최근 항목을 삭제한다.
 - **T peek(..)**: 마지막으로 추가된 데이터를 반환한다.
 - **boolean isEmpty(..)**: 큐가 비어있는지 확인한다.
 - **int size(..)**: 큐의 크기를 반환한다.

<div class="divider"></div>
## 구현 <a id="implement"></a>
 큐는 연결 리스트와 배열로 구현할 수 있으며, 각각의 장단점이 존재한다.

 **연결 리스트**로 구현 할 경우
 - 자료를 O(1) 시간에 추가/제거 할 수 있다.
 - 하지만 자료의 접근에는 O(n)의 연산 시간이 걸린다.  

 **배열**로 구현 할 경우, 
 - 자료를 O(1) 시간에 추가 할 수 있으나,
 - 제거의 경우 자료들을 한 칸씩 왼쪽으로 밀어줘야 하기 때문에 O(n)이 된다. 
 - 하지만 자료의 접근에는 O(1)의 시간이 걸린다.

프로그램에 자료의 추가/제거의 연산이 접근보다 절대적으로 많다면 연결 리스트를,
그렇지 않다면 배열을 쓰는 쪽이 좋다. 모든 연산이 비슷하게 쓰인다면? 우선 순위를 매겨서
직접 판단해야 하지 않을까 싶다.
 
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
## 큐의 사용 사례 <a id="app"></a>
- 너비 우선 탐색 (Breadth First Search)
- OS 작업 일정
- Disk 작업 일정
- 대기열

<div class="divider"></div>
## 풀어 볼 문제 <a id="problem"></a>
From. @[acmicpc.net](https://www.acmicpc.net/problem/10845)

- [큐](https://www.acmicpc.net/problem/10845)
- [프린터 큐](https://www.acmicpc.net/problem/10845)
