---
layout: post
title: "二分探索アルゴリズム"
ref: search-binary-search
date: 2019-11-12 7:00:00
categories: Algorithm
tags: search
lang: ja
---

## 二分探索アルゴリズムとは?

二分探索(Binary Search)アルゴリズムは**並べ替えリスト**から特定の値の位置を探すアルゴリズムだ。

最初に中間値を求めたあと、その値と探す値を比較して不要な部分とは比較しなくても大丈夫だ。
不要な部分とは中間値の左または右にあるデータたちで、このデータはリストの半分と同じだ。
つまり、一回比較するだけでリストの半分のデータを除外できる。

![Binary Search](/assets/images/algorithm/search/search-binary-search-1.jpg)
もし探すダータが`5`より大きい場合、`5`左にあるすべてのデータはもう関係ないし逆の場合も同じだ。つまり、
毎回リストを半分にするのができてLinear Searchよりもっと早く値を探すのができる。

<div class="divider"></div>

## 実装

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

中間値を探す：`mid = low + (high - low) / 2;`

普通中間値は`mid = (low + high) / 2`を使って求めるけどこれはoverflow-errorが起こる危険がある。
もちろんRubyようにBigNumberを自動に処理する言語はどちを使っても大丈夫だけど、
なぜその式を使うのかぐらいは知っているのが重要と思う。

中間値求めて探す値「`target`」と比較する。このとき発生できる場合の数は４つがある。
1. `arr[mid] == target` <br>
  `target`のindexを戻す。

2. `arr[mid] > targeat` <br>
  `target`が中間値の**左側**にあるので`high`の値を`middle - 1`に返してまた比較する。<br>

3. `arr[mid] < targeat` <br>
   `target`が中間値の**右側**にあるので`low`の値を`middle + 1`に返してまた比較する。<br>

4. `low > high` <br>
  `target`が存在しないとき`low`が`high`より大きいになる。そのときは`-1`を戻す。
