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

<div class="divider"></div>
## 이중 연결 리스트란? <a id="concept"></a>
이중 연결 리스트(Doubly Linked List)는 각 노드가 다음과 이전 노드의 참조가 가능한 형태의 
자료구조이다.

![Doubly Linked List](/assets/images/data-structure/linked-list/dll.png)<br>
<span class="image-source">
[(사진 출처: https://en.wikipedia.org/wiki/Doubly_linked_list)](https://en.wikipedia.org/wiki/Doubly_linked_list)
</span>

단일 리스트에서는 각 노드가 다음 노드를 참조하기 때문에 노드 하나를 잃어버릴 경우 그 다음 데이터들에
접근할 방도가 전혀 없었다. 하지만 이중 연결 리스트의 경우 앞뒤로 참조가 가능하기 때문에
잃어버린 노드의 복구가 가능하다. 때문에 이중 연결 리스트가 단일 연결 리스트보다 안전하다는
장점은 있지만 반대로 그 만큼 추가로 노드를 사용해야 한다는 단점이 있다.

다음과 이전 노드의 참조가 가능하기 때문에 단일 연결 리스트보다 노드를 삭제하는데 편리한 점도 있다.

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

