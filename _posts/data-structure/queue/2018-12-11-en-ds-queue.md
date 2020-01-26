---
layout: post
title: "Queue"
ref: ds-queue
date: 2018-12-11 23:59:00
last_modified_at: 2020-01-25 16:44:00
categories: 
 - Data Structure
lang: en
---

## Contents
- [What is Queue?](#concept)
- [Operations](#op)
- [Implementation](#implement)
  * [LinkedList-based](#linkedlist)
  * [Array-based](#array)
- [Applications](#app)

<div class="divider"></div>
## What is Queue? <a id="concept"></a>
Queue is a linear data structure that follows **FIFO**(First-In-First-Out) design in which the element that came in first
is tested first. In Queue, the insertion and deletion happens only at the one end of the container.

<div class="divider"></div>
## Operations <a id="op"></a>
The *front* refers to the *head* of the container and the *back* refers to the *tail* (or top) of the container.
 - **enqueue**: inserts the element
 - **dequeue**: removes the element
 - **peek**: returns the element recently added

<div class="divider"></div>
## Implementation <a id="implement"></a>
We can implement Queue using a linked list or an array and each design has pros and cons.

If we use a **linked list** to implement Queue,
we can *insert* or *delete* elements in O(1), but it takes O(n) for *access*.

If we use an **array** to implement Queue, we can *insert* and *access* elements in O(1), but *deletion* becomes O(n) because of shifting.

Use a linked list if the insert and delete operations are dominating the number of access operations. If it's other way around, use an array.

 
<div class="divider"></div>
### LinkedList-based  <a id="linkedlist"></a>

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
### Array-based <a id="array"></a>

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
            System.out.println("Overflow occurred..");
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
## Applications <a id="app"></a>
- BFS (Breadth First Search)
- Customer Queue (market, bank, ..., etc)
- Disk Scheduling
- OS Scheduling
- Print Queue
