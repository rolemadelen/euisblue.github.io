---
layout: post
title: "Reverse a String"
ref: algorithm-rev-str
date: 2019-01-13 13:04:00
categories: Algorithm
tags: reverse string
lang: en
---

## Reverse a string
The algorithm itself is very straightforward. We start from the last character of a string and
print or save its character until it reaches the beginning to reverse a string, and there are
many ways to accomplish this task. I came up with four different methods to reverse a string
using Pointers, Array, Stack, and Queue.

<div class="divider"></div>

## Methods
### Pointer
Pointer is my favorite method to use when reversing a string. The code is clean and intuitive.

We use two pointers `p` and `q` where `p` points to the first character and `q` points
to the last character of a string. Then we compare two pointers value (`*p`, `*q`) and 
continue until `p < q`.

```cpp
/* String Reverse using two pointers */
void strrevptr(char *line)
{
    char *p = line;
    char *q = line + strlen(line) - 1;

    while(p < q)
    {
        char temp = *p;
        *p = *q;
        *q = temp;

        ++p;
        --q;
    }
}
```

### Array
The idea is same as pointer but we use array form of arithmetic instead of pointer arithmetic.

```cpp
/* String reverse using array */
void strrevindex(char *line)
{
    int size = strlen(line);
    int bound = size >> 1;

    for(int i=0; i<bound; ++i)
    {
        char temp = line[i];
        line[i] = line[size-(1+i)];
        line[size-(1+i)] = temp;
    }
}
```

### Stack
We can reverse a string using a stack and its pretty simple. We push all characters to the stack
and pop all of it.

```cpp
// Reverse string using a stack
void revstrstk(char *line)
{
    stack<char> stk;
    char *p = line;

    while(*p != '\0')
    {
        stk.push(*p);
        ++p;
    }

    while(!stk.empty())
    {
        cout << stk.top();
        stk.pop();
    }
    cout << endl;
}
```

### Queue
In order to reverse a string, we need to use two queues.

Let `q1` and `q2` be the first and second queue, respectively. 
1. add a character to `q1`.
2. pop all `q1` to `q2`.
3. pop all `q2` to `q1`.
4. repeat above 3 steps until character is NULL

Now we have a reversed string.

```cpp
// Reverse a string using two queues
void revstrstk(char *line)
{
    queue<char> q;
    queue<char> q2;
    char *p = line;

    while(*p != '\0')
    {
        q.push(*p);

        while(!q2.empty())
        {
            q.push(q2.front());
            q2.pop();
        }

        while(!q.empty())
        {
            q2.push(q.front());
            q.pop();
        }

        ++p;
    }

    p = line;
    while(!q2.empty())
    {
        *p = q2.front();
        q2.pop();
        ++p;
    }
}
```

<div class="divider"></div>
## Problems to try <a id="try"></a>
From. @[LeetCode](https://leetcode.com/)

- [344. Reverse a String](https://leetcode.com/problems/reverse-string/)

<div class="divider"></div>
## Reference<a id="ref"></a>
- [StackExchange : string reversal usage](https://softwareengineering.stackexchange.com/questions/24691/what-do-you-use-string-reversal-for)
- [sexeger](https://www.perlmonks.org/index.pl?node=sexeger)
