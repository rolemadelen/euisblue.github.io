---
layout: post
title: "이중 연결 리스트 (Doubly Linked List)"
ref: ds-doubly-linkedlist
date: 2019-03-27 16:18:00
categories: 
 - Data Structure
lang: ko
---

## 목차
- [이중 연결 리스트란?](#concept)
- [연산](#op)
- [구현](#implement)
- [사용 사례](#app)
- [참조](#ref)

<div class="divider"></div>
## 이중 연결 리스트란? <a id="concept"></a>
다음 노드뿐만 아니라 이전 노드의 참조도 가능한 이중 연결 리스트이다.

![Doubly Linked List](/assets/images/data-structure/linked-list/dll.png)

이중으로 연결되어 있어 단일 리스트보다는 데이터 손상의 위험이 적다. 단일 리스트의 경우
머리를 손상하면 모든 데이터가 유실된다. 하지만 이중 리스트의 경우 꼬리에서부터 뒤로 
접근이 가능해, 데이터의 복원이 가능하다. 하지만 다음 노드만 참조하면 되는 단일 리스트와는 달리,
이중 리스트는 이전 노드까지 참조해야 하기에 작업량과 자료구조의 크기가 약간 늘어난다.

이중 연결 리스트의 한 가지 장점이 더 있다. 단일 리스트에서 현재 가리키고 있는 노드를 삭제하려면, 
머리부터 시작해 현재 노드를 가리키고 있는 노드까지 이동한 다음에야 현재 노드를 지울 수 있어 O(n)의 시간이 걸린다. 
하지만 이중 연결 리스트의 경우, 현재 노드의 이전과 다음 포인터를 이용해 더욱더 쉽게
현 노드의 삭제가 가능하다.

리스트의 장점으로는 빠른 데이터의 추가와 제거로 두 연산 모두 O(1)의 시간이 걸린다. <br />
하지만 마지막 노드에 접근하기 위해서는 무조건 첫 노드부터 접근해야 해서 O(n)의 시간이 걸린다.

<div class="divider"></div>
## 연산 <a id="op"></a>
- **insertFront** : 리스트 시작점에 데이터를 추가한다
- **insertLast** : 리스트 끝에 데이터를 추가한다
- **removeFront** : 리스트의 첫 노드를 제거한다
- **removeLast** : 리스트의 마지막 노드를 제거한다
- **traverse** : 리스트를 처음부터 순차적으로 출력한다
- **reverseTraverse** : 리스트를 끝에서부터 순차적으로 출력한다

<div class="divider"></div>
## 구현 <a id="implement"></a>
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
## 사용 사례<a id="app"></a>
- [쓰레드 스케쥴러](http://web.cecs.pdx.edu/~harry/Blitz/BlitzDoc/ThreadScheduler.htm)
- 음악 플레이어
  + 다음/이전 버튼
- 실행취소/재실행 기능

<div class="divider"></div>
## 참조 <a id="ref"></a>
- [https://en.wikipedia.org/wiki/Doubly_linked_list](https://en.wikipedia.org/wiki/Doubly_linked_list)
