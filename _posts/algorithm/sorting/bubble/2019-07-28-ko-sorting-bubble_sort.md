---
layout: post
title: "[알고리즘] 거품 정렬"
ref: algorithm-bubble-sort
date: 2019-07-28 19:46:00
categories: Algorithm
tags: sorting
lang: ko
---
### 목차
- [소개](#concept)
- [정렬 과정](#example)
- [시간 복잡도](#timecomp)
- [구현](#imp)
	+ 최적화 방법
		+ [C](#c)
		+ [Python](#python)
- [풀어 볼 문제](#try)
- [관련 글](#related)
- [참조](#ref)
<hr />
<br />

## 소개<a id="concept"></a>
거품 정렬은 인접한 두 원소를 반복적으로 비교하며 정렬하는 알고리즘 이다.
구현이 간단해서 많은 사람들이 처음 마주하게 되는 정렬 알고리즘이기도 하다. 

하지만 거품 정렬은 매우 **비효율적인 알고리즘**으로 데이터의 크기가 커질수록 알고리즘의 성능이
기하급수적으로 느려지기 때문에 실제 쓰이는 일은 거의 없다.

거품 정렬은 가장 큰 숫자가 먼저 제 위치를 찾는다는 점이 마치 무거운 물체가 먼저 
가라앉는 것 같다는 점에서 **싱킹(sinking) 정렬**이라고 불리우기도 한다.

<br />
## 정렬 과정 <a id="example"></a>
![bubble sort](/assets/images/algorithm/sorting/bubble_sort.png)

1회전의 과정을 살펴보자.

먼저 `56`과 `24`를 비교한다. `56`은 `24`보다 크기에 서로 교환한다. <br />
다음 `56`과 `10`을 비교한다. `56`은 `10`보다 크기에 서로 교환한다. <br />
다음 `56`과 `35`를 비교한다. `56`은 `35`보다 크기에 서로 교환한다. <br />
다음 `56`과 `72`를 비교한다. `56`은 `72`보다 작다.<br />
**1회전**을 완료했다. 현 배열에서 **첫 번째로 큰 수**는 `72`다. 

2회전의 과정을 살펴보자.

먼저 `24`와 `10`을 비교한다. `24`는 `10`보다 크기에 서로 교환한다. <br />
다음 `24`와 `35`를 비교한다. `24`는 `35`보다 작다.<br />
다음 `35`와 `56`을 비교한다. `35`는 `56`보다 작다.<br />
**2회전**을 완료했다. **두 번째로 큰 수**는 `56`이다.

3회전의 과정을 살펴보자.

먼저 `10`과 `24`를 비교한다. `10`은 `24`보다 작다. <br />
다음 `24`와 `35`를 비교한다. `24`는 `35`보다 작다. <br />
**3회전**을 완료했다. **세 번째로 큰 수**는 `35`이다. 

4회전의 과정을 살펴보자.

`10`과 `24`를 비교한다. `10`은 `24`보다 작다. <br />
**4회전**을 완료했다. **네 번째로 큰 수**는 `24`다. 

자동적으로 하나 남은 숫자 `10`은 가장 작은 수로 배열의 첫 번째 자리에 위치하게 된다.

<br />
## 시간 복잡도 <a id="timecomp"></a>
 - 비교 횟수
   + 거품정렬의 경우 매 회전마다 비교 대상이 하나 씩 줄어들게 된다: <br />
   (n-1) + (n-2) + ... + 2 + 1 = n(n-1)/2 = **O(n^2)**.
 - 교환 횟수
   + 최악의 경우 비교를 할 때마다 교환을 하므로 비교 횟수와 마찬가지로 **O(n^2)**가 된다.

<br />
## 거품 정렬 구현 - C언어<a id="imp"></a>

```c
#define SIZE 5

void bubbleSort(int arr[])
{
	for(int i=0; i<SIZE; ++i)
	{
		for(int j=0; j<SIZE; ++j)
		{
			if(arr[j] > arr[j+1])
			{
				int temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
}
```

소개에서 말했듯이 구현 자체는 간단하다. 
인접한 두 개의 데이터(`j`, `j+1`)을 반복적으로 비교하면서 큰 값은 뒤로, 
	작은 값은 앞으로 밀어주는 방식으로 진행된다.

### 최적화 방법
  **하나.** <br />
  1회전 후 1개의 데이터가 정렬되어 있고, 2회전 후 2개의 데이터가 정렬되어 있다.
 이는 `k`회전에서 `n-k`개의 데이터만 비교를 하면 된다는 말과 같다.

  **둘.** <br />
  이미 정렬이 되어 있는 경우 교환 횟수는 0이다. 즉 교환을 한 번도 하지 않았다면, 
	이미 정렬되어 있으므로 작업을 중단하고 바로 빠져나와도 된다.

<br />
### 거품 정렬 최적화 - C언어 <a id="c"></a>
```c
#define SIZE 5

void bubbleSort(int arr[])
{
	for(int i=0; i<SIZE; ++i)
	{
		_Bool isSwapped = 0;

		// 최적화 방법; 하나
		for(int j=0; j<SIZE-i-1; ++j)
		{
			if(arr[j] > arr[j+1])
			{
				int temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;

				isSwapped = 1;
			}
		}

		// 최적화 방법; 둘
		if(isSwapped == 0)
		{
			break;
		}
	}
}
```

<br />
### 거품 정렬 최적화 - Python <a id="python"></a>
```python
def bubbleSort(arr, n):
	for i in range(n):
		isSwapped = False

		# 최적화 방법; 하나
		for j in range(n - i - 1):
			if arr[j] > arr[j+1]:
				temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			
				isSwapped = True

		# 최적화 방법; 둘
		if isSwapped == False:
			break
```

<br />
## 풀어 볼 문제 <a id="try"></a>
 - [수 정렬하기](https://www.acmicpc.net/problem/2750)
 - [세 수 정렬](https://www.acmicpc.net/problem/2752)
   + 조건문으로 간단히 풀어도 된다.

<br />

## 관련 글 <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## 참조 <a id="ref"></a>
- [[알고리즘] 버블 정렬(bubble sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-bubble-sort.html)
