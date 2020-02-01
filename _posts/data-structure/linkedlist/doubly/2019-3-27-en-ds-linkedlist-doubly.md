---
layout: post
title: "Doubly Linked List"
ref: ds-doubly-linkedlist
date: 2019-03-27 16:18:00
categories: 
 - Data Structure
lang: en
---

## Contents
- [What is Doubly Linked List?](#concept)
- [Operations](#op)
- [Implementation](#implement)
- [Applications](#app)

<div class="divider"></div>
## What is Doubly Linked List? <a id="concept"></a>
Doubly Linked List is a linked list that has a reference to next and previous nodes.

![Doubly Linked List](/assets/images/data-structure/linked-list/dll.png)<br>
<span class="image-source">
[(image source: https://en.wikipedia.org/wiki/Doubly_linked_list)](https://en.wikipedia.org/wiki/Doubly_linked_list)
</span>

The structure of Doubly Linked List is safer than Singly Linked List in terms
of data loss. If we lose the address of head in a singly linked list, we have no way of accessing to other nodes 
linked to the head. In a doubly linked list however, it is possible to access the head by 
traversing the list backward and reconnect missing links. But these additional nodes
increases the workload and size of the structure.

<div class="divider"></div>
## Operations <a id="op"></a>
- **insertFront** : inserts the element at the head (first element)
- **insertLast** : inserts the element at the tail (last element)
- **removeFront** : removes the first element
- **removeLast** : removes the last element
- **traverse** : print all elements from head to tail
- **reverseTraverse** : print all elements from tail to head

<div class="divider"></div>
## Implementation <a id="implement"></a>

```java
public class DoublyLinkedList
{
    private Node head;
    private Node tail;
    private int length;
    
    public DoublyLinkedList()
    {
        head = new Node(null);
        tail = new Node(null);
        
        head.setNext(tail);
        tail.setPrev(head);
        
        length = 0;
    }
    
    public void insertFront(int data)
    {
        Node node = new Node(data);
        if (isEmpty())
        {
            head.setNext(node);
            node.setPrev(head);
            node.setNext(tail);
            tail.setPrev(node);
        }
        else
        {
            Node old = head.getNext();
            head.setNext(node);
            node.setPrev(head);
            node.setNext(old);
            old.setPrev(node);
        }
        
        ++length;
    }
    
    public void insertLast(int data)
    {
        Node node = new Node(data);

        if (isEmpty())
        {
            head.setNext(node);
            node.setPrev(head);
            node.setNext(tail);
            tail.setPrev(node);
        }
        else
        {
            Node old = tail.getPrev();
            old.setNext(node);
            node.setPrev(old);
            node.setNext(tail);
            tail.setPrev(node);         
        }
        
        ++length;
    }
    
    public Integer removeFront()
    {
        if (!isEmpty())
        {
            Node first = head.getNext();
            int item = first.getData();
            
            head.setNext(first.getNext());
            first.getNext().setPrev(head);
            --length;
            
            return item;
        }
        
        return null;
    }
    
    public Integer removeLast()
    {
        if (!isEmpty())
        {
            Node last = tail.getPrev();
            int item = last.getData();
            
            last.getPrev().setNext(tail);
            tail.setPrev(last.getPrev());
            --length;
            
            return item;
        }
        
        return null;
    }
    
    public boolean isEmpty()
    {
        return length == 0;
    }
    
    public void traverse()
    {
        if (!isEmpty())
        {
            Node temp = head.getNext();
            
            while (temp.getNext() != tail)
            {
                System.out.print(temp.getData() + " --> ");
                temp = temp.getNext();
            }
            System.out.println(temp.getData());
        }
        else
        {
            System.out.println("List is empty..");
        }
    }
    
    public void reverseTraverse()
    {
        if (!isEmpty())
        {
            Node temp = tail.getPrev();
            
            while (temp.getPrev() != head)
            {
                System.out.print(temp.getData() + " --> ");
                temp = temp.getPrev();
            }
            System.out.println(temp.getData());
        }
        else
        {
            System.out.println("List is empty..");
        }
    }
}
```
<div class="divider"></div>
## Applications <a id="app"></a>
- [Thread Scheduler](http://web.cecs.pdx.edu/~harry/Blitz/BlitzDoc/ThreadScheduler.htm)
- Music Player - next & prev
- Undo & Redo features
