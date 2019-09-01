---
layout: post
title: "[Algorithm] Quick Sort"
ref: algorithm-quick-sort
date: 2019-08-06 14:16:00
categories: Algorithm
tags: sorting
lang: en
sitemap :
  changefreq : daily
  priority : 1.0
---

# Contents
- [Quick Sort](#concept)
- [Sorting Process](#example)
- [Time Complexity](#timecomp)
- [Implementation](#imp)
  * C
  * Python
- [Related Posts](#related)	
- [Reference](#ref)
<hr />
<br />

## Quick Sort <a id="concept"></a>
Quick sort is a **divide and conquer algorithm** which was invented by a British computer scientist [Tony Hoare](https://en.wikipedia.org/wiki/Tony_Hoare) in 1959 and published in 1961.

Unlike [Merge Sort](https://myoiwritescode.github.io/algorithm/2019/08/05/en-sorting-merge_sort.html), Quick sort is **unstable sort** that same elements may not maintain their original positions; this is because two sub-arrays are non-uniform.

<br />
## Sorting Process <a id="example"></a>

Keep in mind that I'm using the last element in an array as a pivot but their many other ways to choose one.

Quick sort consists of following three steps:
- Divide
  + Create two sub-arrays by dividing the original array into two based on the pivot. One array should consits of values that is less than the pivot and vice-versa on the other array. Repeat until only one or no element is left in the array.

- Conquer
  + Sort sub-arrays.

- Combine
  + Merge separated sub-arrays into one.

<br />
![quick sort](/assets/images/algorithm/sorting/quick_sort.png)

<br />
## Time Complexity <a id="timecomp"></a>
Time complexity is based on the depth of recursive calls and number of operations: <br />
`T(n) = (depth * ops)`

In the best case where data are distributed evenly:

  ![merge sort average time complexity](/assets/images/algorithm/sorting/merge_sort_time_complexity.png)

- Let _n = k<sup>m</sup>_ and _m=3_. Then, the depth of recursive calls become _m_ because _n = k<sup>3</sup>_, _n = k<sup>2</sup>_, _n = k<sup>1</sup>_, and  _n = k<sup>0</sup>_. If we generalize it we get this formula: **m = log<sub>k</sub>(n)**.
- In each recursive call, **_n_** comparisons are done on average.
- Time Complexity: **O(n logn)**

In the worst case where data are skewed to one side:

  ![quick sort wost time complexity](/assets/images/algorithm/sorting/quick_sort_time_complexity.png)

- Recursive calls are done on every element so the depth of recursive call is **n**.
- Comparisons are done on every element besides the pivot which is **n**.
- Time Complexity: **O(n<sup>2</sup>)**

Worst case can occur if array is already sorted or all elements are same. To prevent this, we can modify our method of choosing the pivot to have less chances to occur.

<br />
## Implementation <a id="imp"></a>
### C
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

```python
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
## Related Posts  <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## Reference <a id="ref"></a>
- [[알고리즘] 퀵 정렬(quick sort)이란](https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html)
- [GeeksforGeeks](https://www.geeksforgeeks.org/quick-sort/)
- [Wikipedia : Tony Hoare](https://en.wikipedia.org/wiki/Tony_Hoare)
