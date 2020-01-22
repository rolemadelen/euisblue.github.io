---
layout: post
title: "이진 탐색(Binary Search) 알고리즘"
ref: search-binary-search
date: 2019-11-12 7:00:00
categories: Algorithm
tags: search
lang: ko
---

## 이진 탐색 알고리즘 이란?

이진 탐색 알고리즘은 **정렬된 리스트**에서 특정한 값의 위치를 찾는 알고리즘이다.
매회마다 리스트의 1/2이 탐색 대상에서 제외되므로 빠른 시간내에 특정 값을 찾을 수 있다.

![Binary Search](/assets/images/algorithm/search/search-binary-search-1.jpg)

예를들어 탐색 대상이 `5`보다 클 경우, 리스트의 1/2인 전반부 전체가 탐색에서 제외되고, 남아있는 후반부에서 다시 탐색이 이루어진다.
덕분에 순차탐색(Linear Search)보다 상당히 빠르게 탐색이 가능하다.

간단한 예로 1000개의 데이터가 있을 경우 순차 탐색에서는 최대 1000번의 비교가 필요하지만, 이진 탐샘의 경우 단 10번의 비교만으로 값을 찾을 수 있다.

<div class="divider"></div>

## 구현

```rb
def binarySearch(arr, val, low, high)
    mid = low + (high - low) / 2

    return -1 if low > high

    if arr[mid] == val
        return mid
    elsif arr[mid] < val
        binarySearch(arr, val, low + 1, high)
    else
        binarySearch(arr, val, low, mid - 1)
    end
end
```

- 중간 값 구하기: `mid = low + (high - low) / 2;`

    중간 값을 구하는 공식으로 `mid = (low + high) / 2`가 존재하지만 <br>
    오버플로우를 야기할 수 있으므로 사용하지 않는 편이 바람직하다.

- 중간 값(`arr[mid]`)과 탐색 대상(`target`)을 비교를 한다. 이 때 발생 할 수 있는 경우의 수는 네 가지가 있다.

    1. `arr[mid] == target` <br>
      탐색 대상과 중간 값이 일치하므로 해당 원소의 위치를 반한환다.    

    2. `arr[mid] < target` <br>
      탐색 대상이 중간 값보다 크므로 후반부 1/2에서 탐색을 재개한다.

    3. `arr[mid] > target` <br>
      탐색 대상이 중간 값보다 작으므로 전반부 1/2에서 탐색을 재개한다.

    4. `low > high` <br>
      탐색 대상이 리스트에 존재하지 않으므로 `-1`또는 `null`을 반환한다.
