---
layout: post
title: "[알고리즘] 삽입 정렬"
ref: algorithm-insertion-sort
date: 2019-08-04 14:17:00
categories: Algorithm
tags: sorting
lang: ko
---

# 목차
- [소개](#concept)
- [정렬 과정](#example)
- [시간 복잡도](#timecomp)
- [구현](#imp)
  * C
  * Python
- [풀어 볼 문제](#try)
- [관련 글](#related)	
- [참조](#ref)
<hr />
<br />

## 소개 <a id="concept"></a>
Insertion Sort(삽입 정렬)은 이미 정렬이 된 앞 부분의 요소들과 비교해가며 삽입할 위치를 찾는 알고리즘이다. 

살면서 책 정리를 해본 경험이 한 번 쯤은 있을거라고 생각한다. 
보통 책을 정리 할 때, 바로 옆에 있는 책을 가지고 크기를 하나 씩 비교해가면서 맞는 위치에 삽입을 하는데, 이 방식이 바로 삽입 정렬이다. 

또 카드 게임을 하면서 손에 쥐고있는 카드를 정리할 때, 오른쪽에 있는 카드를 왼쪽에 (이미 정렬 된) 카드들 속에서 위치를 찾지않는가? 마찬가지로 삽입 정렬이다.

이미 우리들이 쓰고 있는 알고리즘이기 때문에 이해하는데 문제는 없을 것이다.

<br />
## 정렬 과정 <A id="example"></a>
삽입 정렬의 경우 첫 번째가 아닌 두 번째 값부터 시작한다.

![insertion sort](/assets/images/algorithm/sorting/insertion_sort_ko.png)

<br />
## 시간 복잡도 <a id="timecomp"></a>
 - 비교 횟수
   * 최선의 경우 한 번의 비교만으로 삽입 할 위치를 찾게 된다.<br />
   1 + 1 + ... + 1 → **Ω(n)**
   * 최악의 경우 비교해 야 할 숫자가 하나 씩 늘어나면서 결국 모든 요소들과 비교하게 된다. <br />
   1 + 2 + ... + (n-2) + (n-1) = n\*(n-1)/2 → **O(n<sup>2</sup>)**

 - 교환 횟수
	* 최선의 경우 바로 삽입 할 위치를 찾으므로 **Ω(n)**.
	* 최악의 경우 비교를 할 때마다 교환을 하게된다.  <br />
   1 + 2 + ... + (n-2) + (n-1) = n\*(n-1)/2 →  **O(n<sup>2</sup>)**

<br />
## 구현 <a id="imp"></a>

삽입할 위치를 찾고있는 요소는 그 전 요소보다 작아야 한다. 그렇기 때문에 왼쪽에 있는 값이 현재 값 보다
작거나 첫 번째(0번 인덱스)일 때까지 계속 한 칸씩 오른쪽으로 밀어주면 된다.

### 삽입 정렬 - C언어
```c
void insertionSort(int arr[])
{
	for(int i=1; i<SIZE; ++i)
	{
		int index = i;
		int key = arr[index];

		while(index > 0 && key < arr[index-1])
		{
			arr[index] = arr[index-1];
			--index;
		}

		arr[index] = key;
	}
}
```

<br />
### 삽입 정렬 - Python
```python
def insertionSort(arr, n):
	for i in range(1, n):
		index = i
		key = arr[i]

		while index > 0 and key < arr[index-1]:
			arr[index] = arr[index-1]
			index = index - 1

		arr[index] = key
```

<br />
## 풀어 볼 문제 <a id="try"></a>
- [수 정렬하기](https://www.acmicpc.net/problem/2750)

<br />
## 관련 글  <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## 참조 <a id="ref"></a>
- [[알고리즘] 삽입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
