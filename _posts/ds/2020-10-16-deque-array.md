---
category: data structure
url_path: '/deque'
title: "Double-ended Queue in Array"
type: 'ds'

layout: null
---

## Deque (Double-ended Queue)

**Stack** allows insertion and deletion of elements at one end. **Queue** allows insertion at one end and deletion at the other end. 
**Deque** *(deck)*, however, allows both insertion and deletion at both ends.

- [Insertion](#insertion)
  + *PUSH_FRONT(x)*
  + *PUSH_BACK(x)*
- [Deletion](#deletion)
  + *POP_FRONT()*
  + *POP_BACK()*
- [Peek](#peek)
  + *FRONT()*
  + *BACK()*

## Implementation
My implementation of DEQUE use two indexes `head` and `tail`. 
`head` is used to keep track of the front of the queue, and `tail` is used to keep track of the end of the queue. 

When `head < 0` it wraps around the array and `head` points to `SIZE - 1`. Similarly, when `tail >= SIZE`, it 
points to the beginning of the array (`tail = 0`).

As long as `tail` is behind `head`, it doesn't matter where both indexes are at. I can always start from the `head`
and find `tail` by simply iterating it linearly.

<a id="insertion"></a>
## Insertion
### push_front(x)

```cpp
template <class T> 
void Deque<T>::push_front(T val) 
{
  if (nElems == capacity) 
  {
    cout << "overflow.." << endl;
    return;
  }

  queue[head] = val;
  --head;

  if (head == -1) 
  {
    head = capacity - 1;
  }

  ++nElems;
}
```

### push_back(x)

```cpp
template <class T> 
void Deque<T>::push_back(T val) 
{
  if (nElems == capacity) 
  {
    cout << "overflow.." << endl;
    return;
  }

  queue[tail] = val;
  tail += 1;

  if (tail == capacity)
  {
    tail = 0;
  }

  ++nElems;
}

```
<a id="deletion"></a>
## Deletion
### pop_front()

```cpp
template <class T> 
void Deque<T>::pop_front() 
{
  if(empty())
  {
    cout << "underflow.." << endl;
    return;
  }

  --nElems;
  ++head;

  if (head >= capacity) 
  {
    head = 0;
  }
}
```

### pop_back()

```cpp
template <class T> 
void Deque<T>::pop_back() 
{
  if(empty())
  {
    cout << "underflow.." << endl;
    return;
  }

  --nElems;
  --tail;

  if (tail < 0)
  {
    tail = capacity - 1;
  }
}
```

<a id="peek"></a>
## Peek
### front()

```cpp
template <class T> 
T Deque<T>::front() 
{
  int i = head + 1;
  if (i == capacity) i = 0;
  return queue[i];
}
```

### back()

```cpp
template <class T> 
T Deque<T>::back() 
{
  int i = tail - 1;
  if (i == -1) i = capacity - 1;
  return queue[i];
}
```

[View](https://github.com/jioneeu/ds-algo/tree/master/deque/array) full source code of Deque implementation using an array.