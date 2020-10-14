---
category: data structure
url_path: '/queue'
title: "Queue in Array"
type: 'ds'

layout: null
---

## Queue
- Queue implements a **First-in, First-out** or **FIFO** policy.
- *Insert* operation → **ENQUEUE**
- *Delete* operation → **DEQUEUE**

Think of a cash register line in a supermarket. First person in the line gets served first. Similarly when you dequeue from the set, 
the first element that was inserted in the set (one that was in the set the longest time) gets popped out.

<img src="/assets/images/ds/queue-array-market.jpg" alt="stack of plates" width="600px" height="300px" /><br/>
<a href='https://www.freepik.com/vectors/business' style="font-size: 12px">Business vector created by freepik - www.freepik.com</a>

Unline stack, queue uses two marks to point to its **head** or front of the queue and **tail** or  back of the queue.

### empty()

Returns `true` if a queue is empty else `false`.

```cpp
template <class T>
bool Queue<T>::empty()
{
  return tail == 0;
}
```

### enqueue(x)

Inserts an element to the queue. This is 0-based array implementation, so if `tail == capacity`, print the 
error message that it overflowed.
```cpp
template <class T> 
void Queue<T>::enqueue(T val) 
{
  if (tail == capacity) 
  {
    cout << "overflow.." << endl;
    return;
  }

  queue[tail] = val;
  tail += 1;
}
```

### peek()

Returns the `front` element without removing it from the queue. You can check if queue is empty or not before
peeking.

```cpp
template <class T> 
T Queue<T>::peek() 
{
  return queue[head];
}
```

### dequeue()

Removes an element from the queue. If the queue is empty, print the error message that it underflowed.

```cpp

template <class T> 
void Queue<T>::dequeue() 
{
  if(empty())
  {
    cout << "underflow.." << endl;
    return;
  }

  for (int i=1; i<tail; ++i) 
  {
    queue[i-1] = queue[i];
  }
  queue[tail-1] = queue[tail];

  tail -= 1;
}
```

[View](https://github.com/jioneeu/ds-algo/tree/master/queue/array) full source code of Queue implementation using an array.

## Reference
- Introduction to Algorithms, 3rd Edition (CLRS)
