---
layout: post
title: "Circular Linked List"
ref: ds-circular-linkedlist
date: 2019-04-01 10:36:00
categories: 
 - Data Structure
lang: en
---

## Contents
- [What is Circular Linked List?](#concept)
- [Operations](#op)
- [Implementation](#implement)

<div class="divider"></div>

## What is Circular Linked List? <a id="concept"></a>
If a last node of a particular list points back to the first node or vice versa (when its applicable
like doubly linked list), it creates a cycle and hence we call this a circular linked list, 
because one can start from any node in the list and can come back to it simply by
going around the list in a circle.

![Circular Linked List](/assets/images/data-structure/linked-list/cll.png)<br>
<span class="image-source">
[(image source: https://en.wikipedia.org/wiki/Linked_list)](https://en.wikipedia.org/wiki/Linked_list#Circular_linked_list)
</span>

<div class="divider"></div>
## Operations <a id="op"></a>
- **insertFront** : insert node at the beginning
- **insertLast** : insert node at the end
- **removeFront** : remove first node
- **removeLast** : remove last node
- **insertAt** : insert node to the list
- **removeAt** : remove node in the list

<div class="divider"></div>
## Implementation <a id="implement"></a>
```java
public class CircularLinkedList 
{
    Node head;
    Node tail;
    int size;

    public CircularLinkedList()
    {
        head = null;
        tail = null;
        size = 0;
    }

    public void insertFront(int data)
    {
        if (head == null)
        {
            head = new Node(data);
            tail = head;

            // connect head to tail
            head.setNext(tail);
            head.setPrev(tail);

            // connect tail back to head
            tail.setPrev(head);
            tail.setNext(head);
        }
        else
        {
            Node newHead = new Node(data);
            head.setPrev(newHead);
            newHead.setPrev(tail);
            newHead.setNext(head);
            head = newHead;

            // connect tail to the new head
            tail.setNext(head);
        }

        ++size;
    }

    public void insertLast(int data)
    {
        if (tail == null)
        {
            tail = new Node(data);
            head = tail;

            // connect tail to head
            tail.setNext(head);
            tail.setPrev(head);

            // connect head back to tail
            head.setPrev(tail);
            head.setNext(tail);
        }
        else
        {
            Node newTail = new Node(data);
            tail.setNext(newTail);
            newTail.setPrev(tail);
            newTail.setNext(head);
            tail = newTail;

            // connect head to the new tail
            head.setPrev(tail);
        }

        ++size;
    }

    public Integer removeFront()
    {
        if (size == 0)
        {
            System.out.println("List is empty");
            return null;
        }

        int data = head.getData();

        if (size == 1)
        {
            head = null;
            tail = null;
        }
        else
        {
            head = head.getNext();
            head.setPrev(tail);
            tail.setNext(head);
        }

        --size;
        return data;
    }

    public Integer removeLast()
    {
        if (size == 0)
        {
            System.out.println("List is empty");
            return null;
        }

        int data = tail.getData();

        if (size == 1)
        {
            head = null;
            tail = null;
        }
        else
        {
            tail = tail.getPrev();
            tail.setNext(head);
            head.setPrev(tail);
        }

        --size;
        return data;
    }

    public void traverse()
    {
        if (head == null)
        {
            System.out.println("List is empty");
            return;
        }
        Node temp = head;

        while(hasNext(temp))
        {
            System.out.print(temp.getData() + " --> ");
            temp = temp.getNext();
        }
        System.out.println(temp.getData());
    }

    public int getSize()
    {
        return size;
    }

    public boolean hasNext(Node node)
    {
        return node.getNext() != head;
    }
}
```
