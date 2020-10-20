---
category: data structure
url_path: '/linked-list'
title: "What is Linked List?"
type: 'ds'
date: '2020-10-20 18:00:00 +0900'

layout: null
---

## Linked List

A **linked list** is a data strucutre which stores the object in **linear order**. 
This order, however, is not decided by its index like an array. The order of the linked list
is determined by a pointer in each object.

## Node
Each object in a list is called **node**.

Node consists of a *data* and a pointer that references the *next*, *previous*, or *both*.

```cpp
class Node 
{
  public: 
    Node(int val):data(val), next(nullptr) {}

    int data;
    Node *next;
};
```

## Types of Linked List

- Singly
  + node has a *next* pointer.
- Doubly
  + node has both *next* and *prev* pointers.
- Circular
  + the first node's *prev* points to the last node and last node's *tail* points to the first node.
- Sorted
  + singly, doubly, or circular linked list with orders preserved.
  + The head node is the smallest item and the tail node is the largest or vice versa.

## Operations
- `search(L, k)` finds the first element with key *k* in list *L*.
  ```cpp
  Node* search(Node *L, int key) 
  {
    Node *curr = L->head;
    while (curr->next != nullptr and curr->key != key)
      curr = curr->next;

    return curr;
  }
  ```

  Time complexity: O(n)

- `insert(L, x)` splices `x` onto the front of the list `L`.
 ```cpp
  void insert(Node *L, Node *x) 
  {
    x->next = L->head;
    if (L->head != nullptr)
      L->head->prev = x;

    L->head = x;
    x->prev = nullptr;
  }
  ```

  Time complexity: O(1)

- `delete(L, x)` removes an element `x` from the list `L`.
```cpp
  void delete(Node *L, Node *x) 
  {
    if (x->prev != nullptr)
      x->prev->next = x->next;
    else
      L->head = x->next;

    if (x->next != nullptr)
      x->next->prev = x->prev;

    delete x;
  }
```

## Sentinels

We can ignore the boundary conditions of head and tail in `insert` and `delete` by using a **sentinel** node. 
A *sentinel* is simply a dummy node that lies in between head and tail and it doesn't hold any values.

`sentinel->next` points to the head and `sentinel->prev` points to the tail of the list.

![sentinel node](/assets/images/ds/sentinel-node.png)

Part `(a)` shows an **empty** list with only the sentinel in the list.

In part `(b)`, `sentinel->next` points to the first node of the list (`9`) and `sentinel->prev` points to the 
last node of the list(`1`).

Now we can simplify our `insert` and `delete` function like the below.

 ```cpp
  void insert(Node *sentinel, Node *x) 
  {
    x->next = sentinel->next;
    sentinel->next->prev = x;
    sentinel->next = x;
    x->prev = sentinel;
  }

  void delete(Node *x) 
  {
    x->prev->next = x->next;
    x->next->prev = x->prev;
    delete x;
  }
  ```

Sentinels should be used judiciously since it doesn't have any effect on its performance. In fact, 
it could waste lot of memory by adding an extra node, a sentinel, in many small lists. 

So use sentinels when you're sure that it will simplify your code.

## Reference
- Introduction to Algorithms, 3rd Edition (CLRS)
