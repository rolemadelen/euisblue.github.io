---
layout: post
title:  "Devouring Study Week 1: insertAt & removeAt"
date:   2021-03-06 07:00:00 +1400
author: "Ipflegen"
catalog: true
hidden: true
lang: "ko"
permalink: /ko/devouring-study/week1/key/
tags:
  - Devouring Study
  - Data Structure 
  - LinkedList 
---

이번 주 《[배열과 연결리스트](/devouring-study/week1/)》의 생각해볼 문제였던 
단일 연결리스트 중간에 노드를 삽입하고 삭제하는 `insertAt(pos)`함수와 `removeAt(pos)`함수의 구현 방법에 대해 살펴보겠습니다.

## insertAt(pos)

리스트 중간에 노드를 삽입하는 함수의 의사코드입니다.

```ruby
# pos는 index값으로 받기 때문에 zero-base다.
def insertAt(val, pos)
    # 1. 입력받은 pos의 값이 적절한지 확인 
    if pos < 0 
        # ...
    end
    if pos >= length
       # ...
    end
    else 
        # 2. 올바른 값이면 temp를 pos-1까지 이동
        temp = head
        for 0 to (pos-1)
            temp = temp.next
        end

        # 3. 새로운 노드의 다음을 temp.next와 연결
        newNode = new Node
        newNode.next = temp.next

        # 4. temp 다음을 새로운 노드와 연결
        temp.next = newNode
    end
end
```

`H -> E -> L -> O`와 같은 연결리스트가 주어졌고, 두 번째 위치에 `L`을 삽입해봅시다.

![insertAt 1](/img/in-post/devouring/week1/slist-insertat1.png)

**Step 1 & 2:** pos의 값이 올바르기 때문에 pos-1까지 temp를 이동
![insertAt 2](/img/in-post/devouring/week1/slist-insertat2.png)

**Step 3:** 새로운 노드의 다음을 temp.next와 연결
![insertAt 3](/img/in-post/devouring/week1/slist-insertat3.png)

**Step 4:** temp.next를 새로운 노드와 연결
![insertAt 4](/img/in-post/devouring/week1/slist-insertat4.png)

연결이 된 것을 확인할 수 있습니다.
![insertAt 5](/img/in-post/devouring/week1/slist-insertat5.png)


## removeAt(pos)

```ruby
# pos는 index값으로 받기 때문에 zero-base다.
def removeAt(pos)
    # 1. 입력받은 pos의 값이 적절한지 확인  
    if pos < 0
        ...
    end
    if pos >= length
        ...
    end
    else 
        # 2. 올바른 값이면 temp를 pos-1까지 이동
        temp = head
        for 0 to (pos-1)
            temp = temp.next
        end

        # 3. 삭제할 노드를 임시 변수(target)에 저장
        target = temp.next;
        # 4. 현재 temp의 다음 노드가 삭제할 노드 다음 노드를 가리키도록 링크를 변경
        temp.next = target.next
        # 5. 삭제할 노드인 target을 삭제
        delete target    
    end
end
```

![insertAt 5](/img/in-post/devouring/week1/slist-insertat5.png)

이번에는 `H -> E -> L -> L -> O` 에서 2번째 인덱스에 있는 `L`을 삭제해봅시다.

**Step 1 & 2:** pos의 값이 올바르기 때문에 pos-1까지 temp를 이동

![removeAt 1](/img/in-post/devouring/week1/slist-removeat1.png)

**Step 3:** 삭제할 노드를 임시 변수(target)에 저장
![removeAt 2](/img/in-post/devouring/week1/slist-removeat2.png)

**Step 4:** 현재 temp의 다음 노드가 삭제할 노드 다음 노드를 가리키도록 링크를 변경
![removeAt 3](/img/in-post/devouring/week1/slist-removeat3.png)

**Step 5:** target 삭제
![removeAt 4](/img/in-post/devouring/week1/slist-removeat4.png)

성공적으로 삭제가 되었습니다.