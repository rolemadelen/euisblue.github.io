---
layout: post
title: "선택 정렬 (Selection Sort)"
ref: algorithm-selection-sort
date: 2019-08-01 09:51:00
categories: Algorithm
tags: sorting
lang: ko
---

## 소개
선택 정렬(영: selection sort)은 최소치(또는 최대치)를 찾아 선두로, 두 번째로 작은(또는 큰) 요소를
찾아 두 번째로, n번째로 작은 요소를 찾아 n번째로 이동시키며 정렬시키는 알고리즘이다.

<br />
![selection sort](/assets/images/algorithm/sorting/selection_sort.png)

<div class="divider"></div>

## 시간 복잡도
- 비교 횟수
  * 외부(`i`) 루프: `n-1`번 반복
  * 내부(`j`) 루프: `i`번 째 숫자를 `n-i`개의 숫자와 비교: (n-1) + (n-2) + ... + 1 = n(n-1)/2 → **O(n<sup>2</sup>)**
- 교환 횟수
  * 내부 루프를 빠져나온 후 교환이 이루어지기 때문에 외부 루프와 같이 `n-1`번 반복한다.

<div class="divider"></div>

## 구현
여기서는 int형 배열을 선택 정렬을 이용하여 작은 순으로 정렬한다.

```c
void selectionSort(int arr[])
{
	for(int i=0; i<SIZE-1; ++i)
	{
		int minIndex = i;

		for(int j=i+1; j<SIZE; ++j)
		{
			if(arr[minIndex] > arr[j])
			{
				minIndex = j;
			}
		}

		int temp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = temp;
	}
}
```

<div class="divider"></div>

## 풀어 볼 문제
From. @[acmicpc.net](https://www.acmicpc.net)

- [2750. 수 정렬하기](https://www.acmicpc.net/problem/2750)

<div class="divider"></div>

## 참조
- [선택 정렬(selection sort)이란?](https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html)
