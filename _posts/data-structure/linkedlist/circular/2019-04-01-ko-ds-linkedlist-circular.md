---
layout: post
title: "원형 연결 리스트 (Circular Linked List)"
ref: ds-circular-linkedlist
date: 2019-04-01 10:36:00
categories: 
 - Data Structure
lang: ko
---

## 목차
- [기본 개념](#concept)
- [연산](#op)
- [구현](#implement)

<div class="divider"></div>

## 기본 개념 <a id="concept"></a>
보통 연결 리스트의 끝을 `null`로 나타낸다. 예를들어 이중 연결 리스트에서 `head.getPrev()`와 `tail.getNext()`는 가리키는 노드가 없기에 `null`을 반환한다.
원형 연결 리스트는 이러한 끝이 없는 리스트로서, `head.getPrev()`는 `tail`을, `tail.getNext()`는 다시 `head`의 주소를 반한하는 원과 같은 구조를 형성한다.
그래서 원형(circular) 연결 리스트라고 한다.

![Circular Linked List](/assets/images/data-structure/linked-list/cll.png)<br>
<span class="image-source">
[(사진 출처: https://en.wikipedia.org/wiki/Linked_list)](https://en.wikipedia.org/wiki/Linked_list#Circular_linked_list)
</span>


<div class="divider"></div>
## 연산 <a id="op"></a>
- **insertFront** : 리스트 시작점에 노드를 추가한다.
- **insertLast** : 리스트 마지막에 노드를 추가한다.
- **removeFront** : 리스트 첫 노드를 제거한다.
- **removeLast** : 리스트 마지막 노드를 제거한다.
- **insertAt** : 원하는 위치의 노드를 추가한다.
- **removeAt** : 원하는 위치의 노드를 제거한다.

<div class="divider"></div>
## 구현 <a id="implement"></a>
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
