---
layout: post
title: "합병 정렬"
ref: algorithm-merge-sort
date: 2019-08-05 10:21:00
categories: Algorithm
tags: sorting
lang: ko
---

## 소개 <a id="concept"></a>
합병 정렬은 **분할 정복 알고리즘**(Divide and Conquer Algorithm)의 하나로 1945년에 **[존 폰 노이만](https://ko.wikipedia.org/wiki/%EC%A1%B4_%ED%8F%B0_%EB%85%B8%EC%9D%B4%EB%A7%8C)**(John Von Neumann)이 고안한 알고리즘이다.

분할 정복 알고리즘은 하나의 큰 문제를 여러개의 작은 문제로 분할하여 해결한 뒤, 다시 하나로 합쳐 
결국 원래의 큰 문제를 해결해나가는 방법의 알고리즘이다.

또한 합병 정렬은 **안전 정렬**(Stable Sort)의 특성을 가지고 있어 분할하고 결합하는 과정에서 같은 요소들의 상대적 위치가 변하지 않는다.

예를들어 `{(A, 1), (B, 2), (C, 1)}`이 있고 숫자를 기준으로 정렬을 한다고 할 때, 
`A`는 언제나 `C`보다 먼저라는 것이 보장된다. 안전 정렬이 아닐 경우, 정렬의 결과가 `{(A,1), (C,1), (B,2)}` 또는 `{(C,1), (A,1), (B,2)}`이 되는데 어느 쪽 일지 알 수 없다.

<div class="divider"></div>

## 정렬 과정 <a id="example"></a>

분할 정복은 다음의 세 단계를 거치며 진행된다:
- 분할 (Divide)
- 정복 (Conquer)
- 병합 (Combine)

![merge sort](/assets/images/algorithm/sorting/merge_sort.png)

<div class="divider"></div>

## 시간 복잡도 <a id="timecomp"></a>
- 분할(Divide) 단계
  * 각 리스트에서 중점(midpoint)를 찾는 연산이 반복된다. 이 연산 시간은 **O(1)** 이다.
- 정복(Conquer) 단계
  * 분할 된 두 개의 리스트 속 `n/2`개의 요소들을 재귀적으로 정렬시킨다.
- 병합(Combine) 단계
  * `n`개의 요소들을 병합한다. 이 연산은 **O(n)**의 시간이 걸린다.

 위 과정들을 놓고 봤을 때 병합 단계의 시간 복잡도가 가장 크므로 총 시간 복잡도는  **O(n)**이 된다.  

 하지만 아래 병합 정렬의 트리 구조를 확인해보자.

  ![merge sort time complexity](/assets/images/algorithm/sorting/merge_sort_time_complexity.png)

`n/2`단계는 두 번의 병합 과정을 거친다 → **2 * n/2 = n**. <br />
`n/4`단계는 네 번의 병합 과정을 거친다 → **4 * n/4 = n**. <br />
... <br />
`n`단계는 `c`개의 병합 과정을 거친다 → **c * n = cn**, `c`는 특정한 상수. 

그렇다면 총 연산 횟수는 어떻게 될까?

트리의 높이는 `logn + 1`이고 이를 `cn`번 연산하여
`(logn + 1) * (cn)`이 된다.
 `n logn`이 `n`보다 크므로 병합 정렬의 총 
시간 복잡도는 **O(n logn)**이 된다.

<div class="divider"></div>

## 합병 정렬 구현 <a id="imp"></a>
```c
void merge(int arr[], int left, int mid, int right)
{
    int sortedArr[SIZE] = {0};
    int L = left;
    int R = mid+1;
    int K = left;

    // combine two lists
    while(L <= mid && R <= right)
    {
        if(arr[L] < arr[R])
        {
            sortedArr[K++] = arr[L++];
        }
        else
        {
            sortedArr[K++] = arr[R++];
        }
    }

    // Read all remaining data
    while(L <= mid)
    {
        sortedArr[K++] = arr[L++];
    }

    // copy over the data
    for(int i=left; i<K; ++i)
    {
        arr[i] = sortedArr[i];
    }
}

void mergeSort(int arr[], int left, int right)
{
    int mid;

    if(left < right)
    {
        mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid+1, right);
        merge(arr, left, mid, right);
    }
}
```

<div class="divider"></div>

## 풀어 볼 문제 <a id="try"></a>
From. @[acmicpc.net](https://www.acmicpc.net)

- [10814. 나이순 정렬](https://www.acmicpc.net/problem/10814)
- [2751. 수 정렬하기 2](https://www.acmicpc.net/problem/2751)

<div class="divider"></div>

## 참조 <a id="ref"></a>
- [[알고리즘] 합병 정렬(merge sort)이란](https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html)
- [Wikipedia : John Von Neumann](https://ko.wikipedia.org/wiki/%EC%A1%B4_%ED%8F%B0_%EB%85%B8%EC%9D%B4%EB%A7%8C)
- [Stack Exchange : Merge Sort](https://softwareengineering.stackexchange.com/questions/297160/why-is-mergesort-olog-n)
