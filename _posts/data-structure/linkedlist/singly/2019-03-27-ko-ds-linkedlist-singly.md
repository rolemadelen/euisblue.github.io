---
layout: post
title: "단일 연결 리스트 (Singly Linked List)"
ref: ds-singly-linkedlist
date: 2019-03-27 15:15:00
categories: 
 - Data Structure
lang: ko
---

## 목차
- [단일 연결 리스트란?](#concept)
- [연산](#op)
- [구현](#implementation)
- [사용 사례](#app)
- [풀어볼 문제](#problem)
- [참조](#ref)

<div class="divider"></div>

## 단일 연결 리스트란? <a id="concept"></a>
단일 연결 리스트(Singly Linked List)는 가장 기본적인 형태의 연결 리스트로서 각 노드는 다음 
노드의 참조가 가능하다.

![Singly Linked List](/assets/images/data-structure/linked-list/sll.png)

단순한 형태인 만큼 위험성 또한 존재하는데, 노드의 주소를 잃어버릴 경우 답이 없다.
예를들어, 위에서 `12`의 값을 가진 첫 번째 노드에 실수로 `null`을 대입할 경우, 그 노드와 이어져 있는 `99`또는 `37`에 접근 할 방법이 없어진다.

<div class="divider"></div>
## 연산 <a id="op"></a>
- **insertFront** : 데이터를 리스트 앞에 추가.
- **insertBack** : 데이터를 리스트 마지막 추가.
- **insertAt** : 해당 위치에 데이터를 추가.
- **removeFront** : 리스트 앞에 위치한 데이터를 삭제.
- **removeBack** : 리스트 끝에 위치한 데이터를 삭제.
- **removeAt** : 해당 위치의 데이터를 삭제.

<div class="divider"></div>
## 구현 <a id="implementation"></a>

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
## 사용 사례 <a id="app"></a>
- 스택 구현
- 큐 구현
- 해시 체이닝
- FAT 파일 시스템 - 청킹(chunking)

<div class="divider"></div>
## 풀어볼 문제 <a id="problem"></a>
From. @[LeetCode](https://leetcode.com)
 - [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)
 - [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

<div class="divider"></div>
## 참조 <a id="ref"></a>
- [https://en.wikipedia.org/wiki/Linked_list](https://en.wikipedia.org/wiki/Linked_list)
