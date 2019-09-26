---
layout: post
title: "[Algorithm] Selection Sort"
ref: algorithm-selection-sort
date: 2019-08-01 09:51:00
categories: Algorithm
tags: sorting
lang: en
---

# Contents
- [Concept](#concept)
- [Time Complexity](#timecomp)
- Implementation
  * [C](#c)
  * [Ruby](#ruby)
- [Related Posts](#related)
- [Reference](#ref)
<hr />
<br />

## Concept<a id="concept"></a>
Selection sort is an algorithm that sorts given data by moving smallest (or largest) item to the front, 2nd smallest to the 2nd, and n<sup>th</sup> smallest to the n<sup>th</sup> position of given data.

<br />
![selection sort](/assets/images/algorithm/sorting/selection_sort.png)

<br />
## Time Complexity <a id="timecomp"></a>
 - Number of Comparisons
   * Outer (`i`) loop repeats `n-1` times
   * Inner (`j`) loop compares `i`<sup>th</sup> number with `n-i` data:
      + (n-1) + (n-2) + ... + 1 = n(n-1)/2 → **O(n<sup>2</sup>)**

 - Number of Swaps

<br />
## Selection Sort Implementation
`int` type array is used in here to demonstrate the working algorithm of the selection sort.
The array will be sorted from smallest to largest.

### C <a id="c"></a>
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
### Ruby <a id="ruby"></a>
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
Execution result:
```
Before Sorting
 9  3  5  6  1  7  4  8  6  1 

After Sorting
 1  1  3  4  5  6  6  7  8  9 
```
<br />

## Related Posts <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## Reference <a id="ref"></a>
- [선택 정렬(selection sort)이란?](https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html)
