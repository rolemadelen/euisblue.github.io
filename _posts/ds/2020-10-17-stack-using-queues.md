---
category: data structure
url_path: '/queue-stack'
title: "Implement a stack using two queues"
type: 'ds'

layout: null
---

## Queue-stack
This is exactly the opposite of [this](./#/queue-using-stacks) case, where we used two stacks to implement a queue.
To implement a stack using two queues, we can either make the `push` or `pop` operation costly.

We can choose the either one since it differs only so much (like 1 extra operation). 

Below implementation uses the first option: making the `push` operation costly.

## Implementation
Supoose we have a queue `q1` and `q2`. 
1. `enqueue` new data to `q2`.
2. `dequeue` all data one by one from `q1` to `q2`.
3. swap `q1` and `q2`.

```cpp
template <class T>
void QueueStack<T>::push(int val)
{
  // step 1
  q2.enqueue(val);

  // step 2
  while(!q1.empty())
  {
    q2.enqueue(q1.peek());
    q1.dequeue();
  }

  // step 3
  Queue<T> q3 = q1;
  q1 = q2;
  q2 = q3;
}

template <class T>
void QueueStack<T>::pop()
{
  q1.dequeue();
}
```

[View](https://github.com/jioneeu/ds-algo/blob/master/queue/queuestack/queuestack.hpp) full source code of `queue-stack` implementation.

## Reference
- Introduction to Algorithms, 3rd Edition (CLRS)