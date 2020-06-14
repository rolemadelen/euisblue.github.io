---
layout: post
title: "삼입 정렬 (Insertion Sort)"
ref: algorithm-sort-insertion
date: 2020-06-12 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: ko
---

## 삼입 정렬
삼입 정렬은 적은 수의 데이터들을 정렬하는데 효율적인 알고리즘입니다. 실제로 우리들이 일상 속에서 (알게모르게)
사용하는 알고리즘이기도 합니다. 예를들어,

<center>
<img src="/assets/images/algorithm/sorting/insertion.png"> <br>
<span style="font-size:11px"><i>source: <a href="https://studyalgorithms.com/array/insertion-sort/#">studyalgorithm.com</a></i></span>
</center>

카드게임을 할 때 다들 카드를 오름차순/내림차순으로 정리하잖아요? 이 때 사용되는 것이 삼입 정렬입니다.

카드를 정렬하는 과정을 간략하게 설명해 보면 이렇습니다. 우선 카드 한 장을 왼손에 옮깁니다. 그리고 오른손에
있는 무더기에서 카드 한 장을 선택합니다. 이 카드(`key`)를 가지고 왼손 무더기에 있는 카드들 (`card[index]`)와
비교합니다. 만약 `key < card[index]`이고 다음 카드가 있으면 다음 카드와 비교합니다. 그렇지 않다면 그 위치에
`key` 카드를 삼입합니다.  이 과정을 반복하면 왼손에서 잘 정렬된 카드가 존재하게 되죠. 

이를 코드로 구현한 것이 삼입 정렬 (Insertion Sort) 입니다.

## 구현

```cpp
void insertionSort(int *arr, const int SIZE)
{
  for (int i=1; i<SIZE; ++i)
  {
    int index = i;
    int key = arr[index];

    while (index > 0 && key < arr[index-1]) 
    {
      arr[index] = arr[index-1];
      --index;
    }
    arr[index] = key;
  }
}
```

<div class="divider"></div>

## Reference
- Introduction to Algorithms (CLRS) 3rd Edition
