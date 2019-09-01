---
layout: post
title: "[Algorithm] Bubble Sort"
ref: algorithm-bubble-sort
date: 2019-07-28 19:46:00
categories: Algorithm
tags: sorting
lang: en
---

# Contents
- [Concept](#concept)
- [Sorting Process](#example)
- [Time Complexity](#timecomp)
- [Implementation](#imp)
	+ Optimization
		+ [C](#c)
		+ [Python](#python)
- [Related Posts](#related)	
- [Reference](#ref)
<hr />
<br />

## Concept<a id="concept"></a>
Bubble Sort compares two adjacent elements to sorts an array. Due to easy implementation, this bubble sort is often used as an entry point to sorting algorithms.

Bubble Sort, however, is an **inefficient algorithm** that is rarely used in practice due to expontial growth of its time complexity.

Bubble sort sometimes refered to as **Sinking Sort** because the idea of larger data finding its own place first resembles to the heavier object sinking first.
<br />

## Sorting Process <a id="example"></a>
![bubble sort](/assets/images/algorithm/sorting/bubble_sort.png)

First Pass:

Compare `56` with `24`. `56` is larger than `24`. Swap them. <br />
Compare `56` with `10`. `56` is larger than `10`. Swap them. <br />
Compare `56` with `35`. `56` is larger than `35`. Swap them. <br />
Compare `56` with `72`. `56` is smaller than `72`. <br />
**First round** is done. The **largest number** in the array is `72`.

Second Pass:

Compare `24` with `10`. `24` is larger than `10`. Swap them. <br />
Compare `24` with `35`. `24` is smaller than `35`.<br />
Compare `35` with `56`. `35` is smaller than `56`.<br />
**Second round** is done. The **second largest number** in the array is `56`.

Third pass:

Compare `10` with `24`. `10` is smaller than `24`. <br />
Compare `24` with `35`. `24`is smaller than `35`. <br />
**Third round** is done. The **third largest number** in the array is `35`. 

Fourth Pass:

Compare `10` with `24`. `10` is smaller than `24`. <br />
**Fourth Round** is done. The **fourth largest number** in the array is `24` and `10` sholud be the
first element of the array because it is the **smallest number**.

<br />
## Time Complexity <a id="timecomp"></a>
 - Number of Comparisons
   + The number of elements to compare decreases by one every round: <br />
   (n-1) + (n-2) + ... + 2 + 1 = n(n-1)/2 = **O(n^2)**.

 - Number of Swaps
   * In the worst case, swaps occur on every comparison so the time complexity becomes **O(n^2)**.

<br />
## Implementation in C<a id="imp"></a>

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

### Optimization
**First**. <br />
First and second largest data are sorted after the first and second pass, respectively. 
This means we only need to compare `n-k` data in `k`<sup>th</sup> pass 
because `k` data are already sorted.

**Second**. <br />
When all elements are sorted, the number of swaps happens to be 0. <br />
So, if we know that no swaps occured, we can immediately exit from the loop.

<br />
### Optimized Bubble Sort - C <a id="c"></a>
```c
#define SIZE 5

void bubbleSort(int arr[])
{
	for(int i=0; i<SIZE; ++i)
	{
		_Bool isSwapped = 0;

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

		if(isSwapped == 0)
		{
			break;
		}
	}
}
```

<br />
### Optimized Bubble Sort - Python <a id="python"></a>
```python
def bubbleSort(arr, n):
	for i in range(n):
		isSwapped = False

		for j in range(n - i - 1):
			if arr[j] > arr[j+1]:
				temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			
				isSwapped = True

		if isSwapped == False:
			break
```

<br />
## Related Posts <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## Reference <a id="ref"></a>
- [[알고리즘] 버블 정렬(bubble sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-bubble-sort.html)

