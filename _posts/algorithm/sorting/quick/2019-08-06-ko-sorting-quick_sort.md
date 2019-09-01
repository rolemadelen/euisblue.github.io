---
layout: post
title: "[알고리즘] 퀵 정렬"
ref: algorithm-quick-sort
date: 2019-08-06 14:16:00
categories: Algorithm
tags: sorting
lang: ko
sitemap :
  changefreq : daily
  priority : 1.0
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
퀵 정렬(Quick Sort)는 **분할 정복 알고리즘**으로  영국의 컴퓨터 과학자인 [토니 호어](https://ko.wikipedia.org/wiki/%ED%86%A0%EB%8B%88_%ED%98%B8%EC%96%B4)(Tony Hoare)가 1959년에 고안하고 1961년에 공개된 알고리즘이다.

 구현된 알고리즘을 따라 리스트에서 피벗(pivot)을 정하고, 그 피벗을 기준으로 크고 작은 데이터들이 왼쪽과 오른쪽으로 **비균등**하게 분할된다. 그렇기 때문에 [합병 정렬](https://myoiwritescode.github.io/algorithm/2019/08/05/ko-sorting-merge_sort.html)(Merge Sort)과 다르게 퀵 정렬은 **불안정 정렬**에 속한다.

<br />
## 정렬 과정 <a id="example"></a>

참고로 이 글에서는 마지막 원소를 피벗으로 정하지만, 이는 구현 방식에 따라 달라질 수 있다.

퀵 정렬의 과정은 다음과 같다:
- 분할 (Divide) 과정
  + 마지막 원소로 정한 피벗을 기준으로 두 개의 부분 배열로 분할한다. 하나의 배열에는 피벗보다 작은 값이 들어가있고, 두 번째에는 피벗보다 큰 값들만이 들어가있다.

- 정복 (Conquer) 과정
  + 부분 배열을 정렬한다.

- 병합 (Combine) 과정
  + 분할된 부분 배열들을 하나의 정렬 된 배열로 병합한다. 

<br />
![quick sort](/assets/images/algorithm/sorting/quick_sort.png)

<br />
## 시간 복잡도 <a id="timecomp"></a>
시간 복잡도는 순환 호출의 깊이(`depth`)와 각 단계에서 이뤄지는 비교 연산(`ops`)에 의해 결정된다. <br />
`T(n) = (depth * ops)`

최선의 경우:

  ![merge sort time complexity](/assets/images/algorithm/sorting/merge_sort_time_complexity.png)
- n이 k의 거듭제곱 _(n = k<sup>m</sup>)_ 이라고 가정 했을 때 <i>m</i>이 3이면,
n = k<sup>3</sup>, n = k<sup>2</sup>, n = k<sup>1</sup>, n = k<sup>0</sup>으로 순환 호출의 깊이가 <i>m</i>이 된다. 
이를 일반화하면 **순환 호출의 깊이는 m = log<sub>k</sub>(n)**이 된다.
- 각 단계에서는 크기 <i>n/k<sup>m</sup></i>인 부분 배열의 병합 과정을  <i>k<sup>m</sup></i>번 거치기 때문에 평균적으로 **비교 연산은 n번**하게 된다.
- 시간 복잡도: **O(n logn)**

<br />
최악의 경우:

  ![quick sort time complexity](/assets/images/algorithm/sorting/quick_sort_time_complexity.png)

- 모든 숫자가 피벗보다 작거나 큰 경우 위와 같이 모든 요소에 대해서 순환 호출이 이루어지기 때문에 **순환 호출의 깊이는 n이 된다**.
- 피벗을 제외한 모든 요소와 비교를 하게되어 **비교 연산은 n번 이루어 진다**.
- 시간 복잡도: **O(n<sup>2</sup>)**

최악의 경우는 주어진 데이터가 이미 정렬이 되어있거나 모든 요소가 같을 경우 일어나게 된다.
이를 방지하기 위해 피벗을 랜덤하게 선택하거나 부분 배열의 가운데를 선택하는 등의 방식으로 바꾸면 최악의 경우가 일어날 확률을 낮출수있다.

<br />
## 퀵 정렬 구현 <a id="imp"></a>
### C언어
```c
#define SWAP(x,y) do {typeof(x) SWAP = x; x = y; y = SWAP;} while (0)

int partition(int arr[], int low, int high)
{
	int pivot = arr[high];
	int index = low-1;

	for(int j = low; j < high; ++j)
	{
		if(arr[j] <= pivot)
		{
			++index;
			SWAP(arr[index], arr[j]);
		}
	}

	SWAP(arr[index+1], arr[high]);

	return index+1;
}

void quickSort(int arr[], int low, int high)
{
	if(low < high)
	{
		int pi = partition(arr, low, high);

		quickSort(arr, low, pi-1);
		quickSort(arr, pi+1, high);
	}
}
```

<br />
### Python
``` python
def partition(arr, low, high):
	pivot = arr[high]
	index = low-1

	for j in range(low, high):
		if arr[j] <= pivot:
			index += 1

			arr[index], arr[j] = arr[j], arr[index]

	arr[index+1], arr[high] = arr[high], arr[index+1]

	return index+1

def quicksort(arr, low, high):
	if(low < high):
		pi = partition(arr, low, high)

		quicksort(arr, low, pi-1)
		quicksort(arr, pi+1, high)
```

<br />
## 풀어 볼 문제 <a id="try"></a>
- [수 정렬하기 2](https://www.acmicpc.net/problem/2751)

<br />
## 관련 글  <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## 참조 <a id="ref"></a>
- [[알고리즘] 퀵 정렬(quick sort)이란](https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html)
- [GeeksforGeeks](https://www.geeksforgeeks.org/quick-sort/)
- [Wikipedia : 토니 호어](https://ko.wikipedia.org/wiki/%ED%86%A0%EB%8B%88_%ED%98%B8%EC%96%B4)
