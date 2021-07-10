---
layout: post
title: "連結リスト (LinkedList)"
subtitle: "連結リストの特性、タイプ、そして機能について調べよう。"
date: 2021-05-17 07:00:00 +1400
author: "J2ieu"
header-img: "img/post-bg-ds-algo.jpg"
header-mask: 0.6
catalog: true
hidden: false
published: false
lang: "ja"
english: true
korean: true
permalink: /ja/ds/linkedlist/
tags:
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
- データ構造
- 連結リスト
=======
- data-structure
- linked-list
>>>>>>> ba229b1 (Design Modified)
=======
- データ構造
- 連結リスト
>>>>>>> 8534215 (tags splitted by a space)
=======
- data structure
- linked list
>>>>>>> adba365 (ja linkedlist in progress)
---

# 連結リスト (Linked List)

ノードの集合体で構成される線形データ構造で、各ノードはデータフィールドと次のノードへのポインター(pointer)を持っています。
配列データ構造とは異なり、格ノードはメモリに連続して位置されてないです。

![linkedlist](/img/in-post/ds-algo/linkedlist/ko/linkedlist1.png)

## 連結リストの特性
- k번째 ノード에 アクセス及び데이터의 変更: **O(k)**
- 임의위치에 새로운 ノード 삽입及び제거: **O(1)**
- ノード들이 메모리 상에 연속해있지 않아 [cache hit rate](https://parksb.github.io/article/29.html)가 낮다.
- 32비트/64비트 컴퓨터에 따라 각각의 ノード가 4바이트 또는 8바이트 크기의 포인터를 가지기 때문에 오버헤드가 존재한다.

## 連結リストのタイプ

### 単方向リスト

![singly linkedlist](/img/in-post/ds-algo/linkedlist/ja/singly-linkedlist.jpg)

단일 연결 리스트는 각 ノード가 다음 ノード의 주소를 가지고 있으며, 한 방향으로만 순회가 가능합니다. 
마지막 ノード는 NULL을 가리킵니다.

### 双方向リスト
![doubly linkedlist](/img/in-post/ds-algo/linkedlist/ja/doubly-linkedlist.jpg)

양쪽으로 두 개의 ノード의 주소를 가지며, 앞뒤로 순회가 가능한 리스트를 이중 連結リスト라고 합니다. 마지막 ノード는 해당 ノード 이전 ノード의 주소와 NULL을 가리킵니다. 그리고 첫 번째 ノード는 NULL과 다음 ノード의 주소를 가집니다. 

### 円形連結リスト
![circular singly linkedlist](/img/in-post/ds-algo/linkedlist/ja/circular-singly.jpg)

![circular doubly linkedlist](/img/in-post/ds-algo/linkedlist/ja/circular-doubly.jpg)

또 다른 종류의 연결 리스트로 원형 連結リスト가 있습니다. 각각 단일 리스트와 이중 리스트에서 NULL을 가리키는 대신 첫 번째 혹은 마지막 ノード로 다시 회귀하는 리스트입니다.

단일 리스트에서 기능을 좀 더 추가하면 이중 리스트, 이중 리스트에서 좀 더 추가하면 원형 리스트가 되는 구조이기 때문에, 이중 원형 연결 리스트를 대표로 구현했습니다. 

## 連結リストの機能

### データのアクセス及び変更: **O(N)**
連結リスト는 배열처럼 인덱스를 사용하여 해당 データに 바로 アクセス하는 것이 불가능합니다. 그렇기 때문에 항상 첫 번째 ノード부터 원하는 위치의 ノード까지 순차적으로 순회를 해야합니다.

```cpp
// 3번째 위치의 データに アクセス 
unsigned index = 3;
Node *temp = head;
while(index>1) {
    temp = temp->next;
    --index;
}
```

### 任意の位置データ追加: **O(1)**

원소를 추가하려는 위치에 이미 있다는 가정하에, 새로운 ノード를 추가하는 것은 ノード의 주소만 서로 연결하면 되기 때문에 O(1)의 시간이 걸립니다.
만약 첫 번째 ノード부터 직접 순회해서 해당 위치의 ノード까지 이동하면 O(1)이 아니게 됩니다.

```cpp
// 2번째 위치에 새로운 ノード 추가
Node *temp = head;
Node *newNode = new Node(data);

newNode->next = temp->next;
temp->next->prev = newNode;
temp->next = newNode;
newNode->prev = temp;
```

### 任意位置データ除去: **O(1)**
마찬가지로 해당 ノード까지 이동하는 부분을 제외하고 삭제하는 부분만을 봤을 때, ノード의 주소를 끊기만 하면 되기 때문에 이 역시 O(1)입니다.

```cpp
Node *temp = nodeToDelete; // 지우려는 ノード

temp->prev->next = temp->next;
temp->next->prev = temp->prev;
```

## 練習問題
Leetcodeで下の4つの問題を解いてみよう。
+ [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
+ [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
+ [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
+ [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)

---

### 21. Merge Two Sorted Lists [🔗](https://leetcode.com/problems/merge-two-sorted-lists/)
```cpp
class Solution {
    public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *res = new ListNode(0);
        ListNode *temp = res;

        while(l1 && l2) {
        if(l1->val <= l2->val) {
            cout << "l1: " << l1->val << endl;
            temp->next = l1; 
            temp = temp->next;
            l1 = l1->next;
        } else {
            cout << "l2: " << l2->val << endl;
            temp->next = l2;
            temp = temp->next;
            l2 = l2->next;
        }
        }

        while(l1) {
        temp->next = l1;
        temp = temp->next;
        l1 = l1->next;
        }

        while(l2) {
        temp->next = l2;
        temp = temp->next;
        l2 = l2->next;
        }

        return res->next;
    }
};
```

### 141. Linked List Cycle [🔗](https://leetcode.com/problems/linked-list-cycle/)
```cpp
class Solution {
    public:
    bool hasCycle(ListNode *head) {
        if(!head || !(head->next)) return false;

        ListNode *turtle = head;
        ListNode *hare = head->next;

        while(turtle != hare) {
        if(turtle == nullptr || hare == nullptr) return false;

        if(turtle) turtle = turtle->next;

        if(hare) hare = hare->next;
        if(hare) hare = hare->next;
        } 

        return true;
    }
};
```

### 160. Intersection of Two Linked Lists [🔗](https://leetcode.com/problems/intersection-of-two-linked-lists/)
```cpp
class Solution {
    public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        unordered_set<ListNode*> us;
        ListNode *temp = headA;
        while(temp) {
        us.insert(temp);
        temp = temp->next;
        }

        temp = headB;
        while(temp) {
        if(us.find(temp) != us.end()) return temp;
        temp = temp->next;
        }

        return nullptr;

    }
};
```

### 203. Remove Linked List Elements [🔗](https://leetcode.com/problems/remove-linked-list-elements/)
```cpp
class Solution {
    public:
    ListNode* removeElements(ListNode* head, int val) {
        if(!head) return head;

        ListNode *temp = head->next;
        ListNode *prev = head;

        while(temp != nullptr) {
        if(temp->val == val) {
            prev->next = temp->next;
            delete temp;
            temp = prev->next;
        } else {
            prev = temp;
            temp = temp->next;
        }
        }

        if(head->val == val) {
        temp = head;
        head = head->next;
        delete temp;

        }
        return head;
    }
};
```

## Reference
- [https://blog.encrypted.gg/932?category=773649](https://blog.encrypted.gg/932?category=773649)