---
layout: post
title: "[Algorithm] Merge Sort"
ref: algorithm-merge-sort
date: 2019-08-05 10:21:00
categories: Algorithm
tags: sorting
lang: en
---

# Contents
- [Merge Sort](#concept)
- [Sorting Process](#example)
- [Time Complexity](#timecomp)
- [Implementation](#imp)
  * C
  * Python
- [Related Posts](#related)	
- [Reference](#ref)
<hr />
<br />

## Merge Sort <a id="concept"></a>
Merge Sort is a **divide and conquer** type algorithm which was invented by **[John Von Neumann](https://ko.wikipedia.org/wiki/%EC%A1%B4_%ED%8F%B0_%EB%85%B8%EC%9D%B4%EB%A7%8C)** in 1945.

Divide and Conquer algorithm sub-divides one large problem into multiple smaller problems and merge them back together to solve the original problem.

Also, Merge sort is a **stable sort** that same elements in an array maintain their relative positions.

For example, let say we have an array like the following:`{(A, 1), (B, 2), (C, 1)}`, and we're trying to sort by their number.

In stable sort, it is guaranteed that `A` comes before `C`. If its not a stable sort, the result could be either `{(A,1), (C,1), (B,2)}` or `(C,1), (A,1), (B,2)}`.

<br />
## Sorting Process <a id="example"></a>

Merge Sort consists of following three steps:
- Divide
- Conquer
- Combine

![merge sort](/assets/images/algorithm/sorting/merge_sort.png)

<br />
## Time Complexity <a id="timecomp"></a>
- Divide step
  * Find midpoint of sub-divided arrays. This operation costs **O(1)**.
- Conquer step
  * Recursively sort `n/2` elements in two sub-arrays.
- Combine step
  * Merge `n` elements. This costs **O(n)** time.

 Combine step takes the longest thus the time complexity is **O(n)**.

 Now lets take a look at the below tree structure.

  ![merge sort time complexity](/assets/images/algorithm/sorting/merge_sort_time_complexity.png)

`n/2` level performs merging twice → **2 * n/2 = n** <br />
`n/4` level performs merging four times → **4 * n/4 = n** <br />
... <br />
`n` level performs merging `c` times, where `c` is some constant → **c * n = cn**

What would be the total cost?

The height of the tree is `logn + 1` and we repeat the operation `cn` times:
`(logn + 1) * (cn)`. <br />
Since `n logn` is greater than `n`, the time complexity of Merge sort becomes **O(n logn)**.

<br />
## Implementation <a id="imp"></a>
### C
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

<br />
### Python

```python
def merge(arr, left, mid, right):
	L = left
	R = mid+1
	K = left
	temp = [0]*(right+1)

	while L <= mid and R <= right:
		if arr[L] < arr[R]:
			temp[K] = arr[L]
			L += 1
		else:
			temp[K] = arr[R]
			R += 1
		K += 1

	while L <= mid:
		temp[K] = arr[L]
		L += 1
		K += 1

	for i in range (left, K):
		arr[i] = temp[i]

def mergeSort(arr, left, right):
	if left < right:
		mid = left + (right - left) / 2
		
		mergeSort(arr, left, mid)
		mergeSort(arr, mid+1, right)
		merge(arr, left, mid, right)
```

<br />
## Related Posts  <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## Reference <a id="ref"></a>
- [[알고리즘] 합병 정렬(merge sort)이란](https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html)
- [Wikipedia : John Von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann)
- [Stack Exchange : Merge Sort](https://softwareengineering.stackexchange.com/questions/297160/why-is-mergesort-olog-n)
