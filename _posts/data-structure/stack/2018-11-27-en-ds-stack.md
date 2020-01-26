---
layout: post
title: "Stack"
ref: ds-stack
date: 2018-11-27 17:22:00
last_modified_at: 2020-01-25 16:28:00
categories: 
 - Data Structure
lang: en
---

## Contents
- [What is Stack?](#concept)
- [Operations](#op)
- [Implementation](#implement)
  * [LinkedList-based](#linkedlist)
  * [Array-based](#array)
- [Applications](#app)
- [Practice](#try)

<div class="divider"></div>

## What is Stack? <a id="concept"></a>
A linear data structure that follows **LIFO** (Last-In First-Out) or **FILO** (First-In Last-Out) design which an element that came in first is evaluated last. An element can only be inserted/deleted at the one end of the container.

<div class="divider"></div>
## Operations <a id="op"></a>
Due to the **LIFO** characteristic of Stack, the top element refers to the most recently added item in the container.

 - **void push(..)**: inserts element at the top
 - **void pop(..)**: removes the top element
 - **T top(..)**: returns the top element
 - **boolean isEmpty(..)**: checks whether the container is empty
 - **int getSize(..)**: returns the number of elements.

<div class="divider"></div>
## Implementation <a id="implement"></a>
 Stack can be implemented using a linked list or an array and each system has both pros and cons.

 If Stack is implemented with a **linked list**,
 - we can insert/delete elements in O(1) time.
 - But access requires O(n) time.  

 If Stack is implemented with an **array**,
 - we can insert elements in O(1) time, but
 - deleting now takes O(n) due to shifting of elements. 
 - But access can be done in O(1) time.

 If number of operations on insert/delete is dominating the number of operations on access, it is better to choose Linked List rather than Array and vice versa.

<div class="divider"></div>
### LinkedList-based <a id="linkedlist"></a>

```java
public class Stack
{
    private Node head;
    private int length;

    // Constructor
    public Stack()
    {
        head = null;
    }

    // inserts an item to the stack
    public void push(int data)
    {
        Node node = new Node(data);
        node.next = head;
        head = node;

        ++length;
    }

    // removes last item from the stack
    public int pop()
    {
        if (isEmpty())
        {
            System.out.println("Stack Underflow..");
            System.exit(1);
        }

        int item = head.data;
        head = head.next;
        --length;

        return item;
    }

    public Integer top()
    {
        if (head == null)
        {
            System.out.println("Stack is empty");
            return null;
        }

        return head.data;
    }

    public boolean isEmpty()
    {
        return head == null;
    }

    public Integer getSize()
    {
        return length;
    }

    // Helper Class
    class Node
    {
        private int data;
        private Node next;

        public Node(int item)
        {
            data = item;
            next = null;
        }
    }
}
```

<div class="divider"></div>
### Array-based <a id="array"></a>

```java
public class Stack {
    private Integer[] stack;
    private int size;       // maximum size of the stack
    private int top;        // current position on the stack

    // Constructor
    public Stack(int size)
    {
        stack = new Integer[size];
        this.size = size;
        top = -1;
    }

    // inserts an item to the stack
    public void push(int item)
    {
        if (isFull())
        {
            System.out.println("Stack Overflow..");
            System.exit(1);
        }

        stack[++top] = item;
    }

    // removes last item from the stack
    public int pop()
    {
        if (isEmpty())
        {
            System.out.println("Stack Underflow..");
            System.exit(1);
        }

        int item = stack[top--];
        return item;
    }

    // print data on top of the stack
    public Integer top()
    {
        if (top == 0)
        {
            System.out.println("Stack is empty..");
            return null;
        }

        return stack[top];
    }

    public boolean isEmpty()
    {
        return top == -1;
    }

    public int getSize()
    {
        return size;
    }


    public boolean isFull()
    {
        return top == size;
    }
}
```

<div class="divider"></div>
## Applications <a id="app"></a>
- Backtracking Algorithm
- Editor - Redo & Undo
- Graph Algorithm
- Tree Traversal Algorithm
- Web Browser

<div class="divider"></div>
## Practice <a id="try"></a>
From. @[LeetCode](https://leetcode.com)  
- [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
