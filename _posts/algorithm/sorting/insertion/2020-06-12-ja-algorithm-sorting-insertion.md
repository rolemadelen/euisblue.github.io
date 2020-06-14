---
layout: post
title: "挿入ソート（Insertion Sort）"
ref: algorithm-sort-insertion
date: 2020-06-12 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: ja
---

## 挿入ソート
挿入ソート（Insertion Sort）は整列済みのデータに新しいデータを追加するとき便利なアルゴリズムです。挿入ソートは実際にもよく使えます。例えば、

<center>
<img src="/assets/images/algorithm/sorting/insertion.png"> <br>
<span style="font-size:11px"><i>source: <a href="https://studyalgorithms.com/array/insertion-sort/#">studyalgorithm.com</a></i></span>
</center>

カードゲームをするとき手に持っているカードたちを整列するとき使う方法が挿入ソートです。この過程を簡単に説明します。

```
左手                 右手
[]                [7, 2, 4, 5, 10]
```

まず右手てからカード１つを左手に運びます。
```
左手                 右手
[7]                [2, 4, 5, 10]
```

また右手からカード１つを選びます。これが`key`です。`key`を左手にあるカードたちと比べます。もし`key`が大きかったら次のカードと比べます。`key`が小さい時とか比べるカードがもうない場合、その位置に`key`カードを入れます。
```
左手                 右手
[7]                [2, 4, 5, 10]   key=2
[2, 7]             [4, 5, 10]      key=4
[2, 4, 7]          [5, 10]         key=5
[2, 4, 5, 7]       [10]            key=10
[2, 4, 5, 7, 10]   []            
```

実際挿入ソートには別の配列都下は使いません。

## 実装

```cpp
void insertionSort(int *arr, const int SIZE)
{
  for (int i=1; i<SIZE; ++i)
  {
    int index = i;
    int key = arr[index];

    while (index > 0 && key < arr[index-1]) 
    {
      arr[index] = arr[index-1];
      --index;
    }
    arr[index] = key;
  }
}
```

<div class="divider"></div>

## Reference
- Introduction to Algorithms (CLRS) 3rd Edition
