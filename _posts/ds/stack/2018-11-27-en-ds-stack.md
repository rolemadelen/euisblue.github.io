---
layout: post
title: "[Data Structure] Stack"
ref: ds-stack
date: 2018-11-27 17:22:00
categories: 
 - Data Structure
lang: en
---

## Contents
- [Concept](#concept)
- [Operations](#op)
- [Implementations](#implement)
  * [Linked List](#linkedlist)
  * [Array](#array)
- [Applications](#app)
- [Problems to Try](#try)
- [Reference](#ref)
<hr />
<br />

## Concept <a id="concept"></a>
A linear data structure that follows **LIFO** (Last-In First-Out) or **FILO** (First-In Last-Out) design which an element that came in first is evaluated last. An element can only be inserted/deleted at the one end of the container.

## Operations <a id="op"></a>
Due to the **LIFO** characteristic of Stack, the top element refers to the most recently added item in the container.

 - **void push(..)**: inserts element at the top
 - **void pop(..)**: removes the top element
 - **bool isEmpty(..)**: checks whether the container is empty
 - **T top(..)**: returns the top element
 - **int size(..)**: returns the number of elements.

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

### Linked List based Stack <a id="linkedlist"></a>

```c
void push(Stack *stk, elem _data)
{
        if(stk->head == NULL)
        {
                stk->head = malloc(sizeof(*(stk->head)));
                stk->head->data = _data;
                stk->head->next = NULL;
        }
        else
        {
                Node *temp = malloc(sizeof(*temp));
                temp->data = _data;
                temp->next = stk->head;
                stk->head = temp;
        }

        ++(stk->size);
}

void pop(Stack *stk)
{
        if(isEmpty(stk))
        {
                return;
        }

        Node *temp = stk->head;
        stk->head = stk->head->next;
        temp->next = NULL;
        free(temp);

        --(stk->size);
}

bool isEmpty(const Stack *stk)
{
        return stk->size == 0;
}

elem top(const Stack *stk)
{
        assert(stk->size != 0);

        return stk->head->data;
}

int size(const Stack *stk)
{
        return stk->size;
}
```

### Array based Stack <a id="array"></a>

```c
void push(Stack *stk, elem data)
{
        if(stk->size == stk->capacity)
        {
                fprintf(stderr, "Stack is full\n");
                return;
        }

        stk->stack[stk->size] = data;
        ++(stk->size);
}

void pop(Stack *stk)
{
        --(stk->size);
}

bool isEmpty(const Stack *stk)
{
        return stk->size == 0;
}

elem top(const Stack *stk)
{
        assert(stk->size != 0);

        return stk->stack[stk->size-1];
}

int size(const Stack *stk)
{
        return stk->size;
}
```

## Applications of Stack <a id="app"></a>
- Tree Traversal Algorithm
- Backtracking Algorithm
  * Rat in a maze
  * Sudoko solver
- Graph Algorithm
  * Topological sorting
- Expression Related
  + Valid Parenthesis String (VPS) checker
  + Infix/Prefix/Postfix notation converter
- Editor
  * Redo and undo features
- Web Browser
  * Go forward and backward  features

## Problems to Try <a id="try"></a>
  - [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

## References <a id="ref"></a>
  - [cppreference : stack](https://en.cppreference.com/w/cpp/container/stack)
  - [leetcode.com](https://leetcode.com/)
