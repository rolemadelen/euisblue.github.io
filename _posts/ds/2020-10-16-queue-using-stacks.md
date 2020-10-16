---
category: data structure
url_path: '/stack-queue'
title: "Implement a queue using two stacks"
type: 'ds'

layout: null
---

## Stack-Queue

There are two ways to implement a queue using two stacks, `A` and `B`.

1. Make the `enqueue()` costly.
```
While stack A is not empty, push everything from stack A to B.
Push data to A.
Push everything back to A.
```
2. Make the `dequeue()` costly.
```
If stack B is empty, while A is not empty, push everything from A to B.
Pop the data from stack B and return it.
```

I used the second method to implement a queue using two stacks since it's clearly better than the first method.
Method 1 moves all the elements twice while method 2 only moves the elements once
only if stack `B` is empty. So the amortized complexity of queue's insert and delete is O(1).

## Implementation
Supoose we have a stack `A` and `B`. 
1. `enqueue` all data to stack `A`.
2. when `dequeue` is called, 
  + push all the elements in `A` to `B` only if `B` is empty.
3. pop the data from `B`.

```cpp
template <class T> 
void StackQueue<T>::enqueue(T val) 
{
  stackA.push(val);
}

template <class T> 
void StackQueue<T>::dequeue()
{
  if(stackB.empty())
  {
    while(!stackA.empty())
    {
      stackB.push(stackA.peek());
      stackA.pop();
    }
  }
  stackB.pop();
}
```

[View](https://github.com/jioneeu/ds-algo/blob/master/stack/stackqueue/stackqueue.hpp) full source code of `stack-queue` implementation.

## Reference
- Introduction to Algorithms, 3rd Edition (CLRS)
- [Implement a queue using two stacks](https://coderbyte.com/algorithm/implement-queue-using-two-stacks)