---
layout: post
title: "[Algorithm] Insertion Sort"
ref: algorithm-insertion-sort
date: 2019-08-04 14:17:00
categories: Algorithm
tags: sorting
lang: en
---

# Contents
- [Concept](#concept)
- [Sorting Process](#example)
- [Time Complexity](#timecomp)
- [Implementation](#imp)
  * C
  * Ruby
- [Related Posts](#related)	
- [Reference](#ref)
<hr />
<br />

## Concept<a id="concept"></a>
Insertion sort finds a right place to insert an element by comparing with all values prior to the current value, or a key.

Lot of people actually apply the concept of insertion sort to clean their bookshelfs. We pick a book on the right, and scan it down to the left and find the right place to insert that book.

Also, when we play a card game like UNO, we order our cards by moving one on the right to the left. This is insertion sort as well.

Because this algorithm is already permeated to our daily lives, understanding should not be a problem.
<br />

## Sorting Process <a id="example"></a>

In the case of Insertion Sort, we start from the 1<sup>st</sup> index not the 2<sup>nd</sup>.

![Insertion sort](/assets/images/algorithm/sorting/insertion_sort_en.png)

<br />
## Time Complexity <a id="timecomp"></a>
 - Number of Comparisons
   * In the best case we only compare once to know the right place to insert. <br />
   1 + 1 + .... + 1 → **Ω(n)**
   * In the worst case scenario, the number of elements we need to compare increases it by one everytime. <br />
   1 + 2 + ... + (n-2) + (n-1) →  **O(n<sup>2</sup>)**

 - Number of Swaps
   * In the best case no swaps occur →  **Ω(1)**
   * In the worst case we will need to swap every time we compare. <br />
   1 + 2 + ... + (n-2) + (n-1) →  **O(n<sup>2</sup>)**

<br />
## Implementation <a id="imp"></a>
A key(one we're trying to insert) must be smaller than the one on the left. So, shift all elements to
the right until the key is greater than the left or the key reached the index 0.

### C
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
### Ruby
```ruby
def insertion_sort(arr)
    n = arr.size

    for i in (1 ... n)
        index = i
        key = arr[i]

        while index > 0 and key < arr[index-1]
            arr[index] = arr[index - 1]
            index -= 1
        end

        arr[index] = key
    end
end
```

<br />
## Related Posts <a id="related"></a>
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## Reference <a id="ref"></a>
- [[알고리즘] 삽입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
