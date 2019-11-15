---
layout: post
title: "Algorithm・二分探索「Binary Search」"
ref: search-binary-search
date: 2019-11-12 7:00:00
categories: Algorithm
tags: search
lang: ja
---

## **二分探索アルゴリズムとは?**

二分探索く(Binary Search)アルゴリズムは**並べ替えリスト**から特定の値の位置を探すアルゴリズムだ。

最初に中間値を求めたあと、その値と探す値を比較して不要な部分とは比較しなくても大丈夫だ。
不要な部分とは中間値の左または右にあるデータたちで、このデータはリストの半分と同じだ。
つまり、一回比較するだけでリストの半分のデータを除外できる。

![Binary Search](/assets/images/algorithm/search/search-binary-search-1.jpg)
もし探すダータが`5`より大きい場合、`5`左にあるすべてのデータはもう関係ないし逆の場合も同じだ。つまり、
毎回リストを半分にするのができてLinear Searchよりもっと早く値を探すのができる。

<br>

## **Ruby実装コード**

```rb
def binarySearch(arr, val, low, high)
    mid = low + (high - low) / 2

    return -1 if low > high

    if arr[mid] == val
        return mid
    elsif arr[mid] < val
        binarySearch(arr, val, low + 1, high)
    else
        binarySearch(arr, val, low, mid - 1)
    end
end
```

[C++コードが見たい！](https://github.com/muicode/coding/blob/master/algorithm/search/binsearch.cpp)

<br>

## **説明**

_リストは昇順に並べ替えてる。もし降順の場合は条件式を逆にすると大丈夫。_

中間値を探す：`mid = low + (high - low) / 2;`

普通中間値は`mid = (low + high) / 2`を使って求めるけどこれはoverflow-errorが起こる危険がある。
もちろんRubyようにBigNumberを自動に処理する言語はどちを使っても大丈夫だけど、
なぜその式を使うのかぐらいは知っているのが重要と思う。

中間値求めて探す値「`target`」と比較する。このとき発生できる場合の数は４つがある。
1. 中間値＝＝`target`の場合
  + `target`のindexを戻す。
    ![Binary Search](/assets/images/algorithm/search/search-binary-search-2.jpg)

2. 中間値が`target`より大きい場合
  + `target`が中間値の**左側**にあるので`high`の値を`middle - 1`に返してまた比較する。<br>
    ![Binary Search](/assets/images/algorithm/search/search-binary-search-3.jpg)

3. 中間値が`target`より小さい場合
  + `target`が中間値の**右側**にあるので`low`の値を`middle + 1`に返してまた比較する。<br>
    ![Binary Search](/assets/images/algorithm/search/search-binary-search-4.jpg)


4. `target`がリストの中に存在しない場合
  + `target`が存在しないとき`low`が`high`より大きいになる。そのときは`-1`を戻す。
