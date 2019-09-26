---
layout: post
title: "[알고리즘] 선택 정렬"
ref: algorithm-selection-sort
date: 2019-08-01 09:51:00
categories: Algorithm
tags: sorting
lang: ko
---

# 목차
- [소개](#concept)
- [시간 복잡도](#timecomp)
- 구현
  * [C](#c)
  * [Ruby](#ruby)
- [풀어 볼 문제](#try)
- [관련 글](#related)
- [참조](#ref)
<hr />
<br />

## 소개<a id="concept"></a>
선택 정렬(영: selection sort)은 최소치(또는 최대치)를 찾아 선두로, 두 번째로 작은(또는 큰) 요소를
찾아 두 번째로, n번째로 작은 요소를 찾아 n번째로 이동시키며 정렬시키는 알고리즘이다.


<br />
![selection sort](/assets/images/algorithm/sorting/selection_sort.png)

<br />
## 시간 복잡도 <a id="timecomp"></a>
- 비교 횟수
  * 외부(`i`) 루프: `n-1`번 반복
  * 내부(`j`) 루프: `i`번 째 숫자를 `n-i`개의 숫자와 비교: (n-1) + (n-2) + ... + 1 = n(n-1)/2 → **O(n<sup>2</sup>)**
- 교환 횟수
  * 내부 루프를 빠져나온 후 교환이 이루어지기 때문에 외부 루프와 같이 `n-1`번 반복한다.

<br />
## 선택 정렬 구현
여기서는 int형 배열을 선택 정렬을 이용하여 작은 순으로 정렬한다.

### C언어 <a id="c"></a>
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

<br />
### 루비 <a id="ruby"></a>
```ruby
def selection_sort(arr)
    n = arr.size

    for i in (0 ... n - 1)
        min = i

        for j in (i+1 ... n)
            if arr[j] < arr[min]
                min = j
            end
        end

        arr[i], arr[min] = arr[min], arr[i]
    end
end
```

<br />
실행 결과:
```
Before Sorting
 9  3  5  6  1  7  4  8  6  1 

After Sorting
 1  1  3  4  5  6  6  7  8  9 
```

<br />
## 풀어 볼 문제 <a id="try"></a>
- [수 정렬하기](https://www.acmicpc.net/problem/2750)

<br />
## 관련 글 <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## 참조 <a id="ref"></a>
- [선택 정렬(selection sort)이란?](https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html)
