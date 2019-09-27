---
layout: post
title: "Algorithm・バブルソート"
ref: algorithm-bubble-sort
date: 2019-07-28 19:46:00
categories: Algorithm
tags: sorting
lang: ja
---

# 目次
- [バブルソート](#concept)
- [整列過程](#example)
- [時間複雑度](#timecomp)
- [実装](#imp)
	+ 最適化方法
		* [C](#c)
		* [Ruby](#ruby)
- [関連記事](#related)	
- [参照](#ref)
<hr />
<br />

## バブルソート<a id="concept"></a>
バブルソート（英: bubble sort）は隣接した２つの数字を反復的に比較しながら整列させるアルゴリズムである。
実装が簡単なので、多くの人々が初めに向き合うようになる整列アルゴリズムでもある。

だが、データの大きさが大きくなるほど、アルゴリズムの演算回数が指数関数的に増加する。
バブルソートはとても非効率的なアルゴリズムで実務にはほとんど使われない。

バブルソートは一番大きい数字が初めて自分の位置を探すことが、まるで重い物体が先に沈むような姿のためシンキングソート（Sinking Sort）とも呼ばれる。

<br />
## 整列過程<a id="example"></a>
![bubble sort](/assets/images/algorithm/sorting/bubble_sort.png)

１回戦の過程を見てみよう。

`56`と`24`を比較する。`56`は`24`より大きいから交換する。 <br />
`56`と`10`を比較する。`56`は`10`より大きいから交換する。 <br />
`56`と `35`を比較する。`56`は`35`より大きいから交換する。 <br />
`56`と `72`を比較する。`56`は`72`より小さい。<br />
**一回戦**か終わった。この配列の中で**一番大きいな数字**は`72`だ。 

<br />
２回戦の過程を見てみよう。

`24`と`10`を比較する。`24`は`10`より大きいから交換する。 <br />
`24`と`35`を比較する。`24`は`35`より小さい。<br />
`35`と`56`を比較する。`35`は`56`より小さい。<br />
**2回戦**が終わった。**二番目に大きな数字**は`56`だ。

<br />
３回戦の過程を見てみよう。

`10`と `24`を比較する。`10`は`24`より小さい。 <br />
`24`と `35`を比較する。`24`は`35`より小さい。 <br />
**3回戦**が終わった。**三番目に大きな数字**は`35`だ。 

<br />
４回戦の過程を見てみよう。

`10`と`24`を比較する。`10`は`24`より小さい。 <br />
**4回戦**が終わって。**四番目に大きな数字**は`24`だ。 

最後まで残った数字`10`は、一番小さい数字なので配列の最初の位置を占める。

<br />
## 時間複雑度 <a id="timecomp"></a>
 - 比較回数
   + 回戦ごとに比較対象が一つずつ減らす:<br />
     (n-1) + (n-2) + ... + 2 + 1 = n(n-1)/2 = **O(n^2)**

 - 交換回数
   + 最悪の場合比較するごとに交換するから比較回数と同様に**O(n^2)**になる。

<br />
## バブルソート実装 (C言語)<a id="imp"></a>

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

### 最適化方法
**一つ** <br />
1回戦後一つのデータが整列されてあるし, 2回戦後は２つのデータが整列されてある。 <br />
これは`k`回戦の中で`n-k`個のデータだけ比較すればいいという意味だ。

**二つ** <br />
与えられた配列がもう整列している場合交換回数は０だ。つまり`k`回線が終わった時交換を全然さなかったら、配列がもう整列している状態なのですぐループから抜け出せばいい。

<br />
### バブルソート最適化（C言語）<a id="c"></a>
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
### バブルソート最適化（Ruby） <a id="ruby"></a>
```ruby
def bubble_sort(arr)
    n = arr.size

    for i in (0 ... n)
        bSwapped = false
        
        for j in (0 ... n - i - 1)
            if arr[j] > arr[j+1]
                bSwapped = true
                arr[j], arr[j+1] = arr[j+1], arr[j]
            end
        end

        if bSwapped == false
            return arr
        end
    end

    arr
end
```

<br />

## 関連記事 <a id="related"></a>	
{% assign tagParam = "sorting" %}
{% include related-posts %}

<br />
## 参照 <a id="ref"></a>
- [[알고리즘] 버블 정렬(bubble sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-bubble-sort.html)
- [バブルソート](https://www.codereading.com/algo_and_ds/algo/bubble_sort.html)
