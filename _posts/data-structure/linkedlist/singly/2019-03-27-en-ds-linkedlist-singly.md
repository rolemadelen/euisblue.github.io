---
layout: post
title: "Singly Linked List"
ref: ds-singly-linkedlist
date: 2019-03-27 15:15:00
categories: 
 - Data Structure
lang: en
---

## Contents
- [What is Single Linked List?](#sll)
- [Operations](#op)
- [Implementation](#implementation)
- [Applications](#app)
- [Pracitce](#try)

<div class="divider"></div>
## What is Singly Linked List? <a id="sll"></a>
Singly Linked List is the most basic form of a linked list in which the current node can 
only reference the next node.

![Singly Linked List](/assets/images/data-structure/linked-list/sll.png) <br>
<span class="image-source">
[(image source: https://en.wikipedia.org/wiki/Linked_list)](https://en.wikipedia.org/wiki/Linked_list)
</span>

It is a simple data structure but has risky parts to take care of. If we lose the address of head, then we have no way of accessing to other nodes linked to head.

<div class="divider"></div>
## Operations <a id="op"></a>
- **insertFront** : inserts the element at the front
- **insertLast** : inserts the element at the end
- **insertAt** : inserts the element at the specified position
- **removeFront** : remove the head (first element)
- **removeLast** : removes the tail (last element)
- **removeAt** : removes the element at the specified position

<div class="divider"></div>
## Implementation <a id="implementation"></a>

```java
public class SinglyLinkedList
{
    private Node head;
    private int length;

    // Constructor
    public SinglyLinkedList()
    {
        head = null;
        length = 0;
    }

    // inserts the element at the front
    public void insertFront(int data)
    {
        Node node = new Node(data);
        node.setNext(head);
        head = node;
        ++length;
    }

    // inserts the element at the end
    public void insertLast(int data)
    {
        Node node = new Node(data);
        if (head == null)
        {
            head = node;
        }
        else
        {
            Node temp = head;
            while (temp.getNext() != null)
            {
                temp = temp.getNext();
            }
            temp.setNext(node);
        }

        ++length;
    }

    // inserts the element at the specified position
    public void insertAt(int data, int position)
    {
        if (position > length)
        {
            insertLast(data);
        }
        else if (position <= 1)
        {
            insertFront(data);
        }
        else
        {
            Node node = new Node(data);

            Node temp = head;
            while (--position > 1)
            {
                temp = temp.getNext();
            }

            node.setNext(temp.getNext());
            temp.setNext(node);

            ++length;
        }
    }

    // remove the head (first element)
    public Integer removeFront()
    {
        if (head == null)
        {
            System.out.println("List is empty..");
            return null;
        }

        int item = head.getData();
        head = head.getNext();
        --length;

        return item;
    }

    // remove the tail (last element)
    public Integer removeLast()
    {
        int item;

        if (head == null)
        {
            System.out.println("List is empty..");
            return null;
        }

        if (head.getNext() == null)
        {
            item = head.getData();
            head = null;
        }
        else
        {
            Node temp = head;

            while (temp.getNext().getNext() != null)
            {
                temp = temp.getNext();
            }

            item = temp.getNext().getData();
            temp.setNext(null);
        }

        --length;

        return item;
    }

    // removes the element at the specified position
    public Integer removeAt(int position)
    {
        int item;

        if (isEmpty())
        {
            System.out.println("List is empty..");
            return null;
        }

        if (position >= length)
        {
            item = removeLast();
        }
        else if (position <= 1)
        {
            item = removeFront();
        }
        else
        {
            Node temp = head;
            while (--position > 1)
            {
                temp = temp.getNext();
            }

            item = temp.getNext().getData();
            temp.setNext(temp.getNext().getNext());
            --length;
        }

        return item;
    }

    // print all elements in the list
    public void traverse()
    {
        if (isEmpty())
        {
            System.out.println("List is empty..");
            return;
        }

        Node temp = head;
        for (int i=0; i<length-1; ++i)
        {
            System.out.print(temp.getData() + " ---> ");
            temp = temp.getNext();
        }
        System.out.println(temp.getData());
    }

    public int getSize()
    {
        return length;
    }

    public boolean isEmpty()
    {
        return length == 0;
    }
}
```

<div class="divider"></div>
## Applications <a id="app"></a>
- Stack
- Queue
- Hash Chaining
- FAT File System - Chunking

<div class="divider"></div>
## Practice <a id="try"></a>
From. @[LeetCode](https://leetcode.com)
 - [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)
 - [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
