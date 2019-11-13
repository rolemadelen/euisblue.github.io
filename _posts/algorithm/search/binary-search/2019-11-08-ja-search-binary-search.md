---
layout: post
title: "Algorithm・二分探索「Binary Search」"
ref: search-binary-search
date: 2019-11-12 7:00:00
categories: Algorithm
published: false
tags: search
lang: ja
---

## **二分探索アルゴリズムとは?**

二分探索く(Binary Search)アルゴリズムは**並べ替えリスト**から特定の値の位置を探すアルゴリズムだ。

처음 중간 값을 임의로 선택한 후, 그 값과 찾고자 하는 값을 비교하여 불필요한 부분은 과감하게 무시한다. 불필요한 부분이란 임의로 선택한 데이터의 왼쪽또는 오른쪽에 위치한 데이터들을 말하는데 이는 리스트 크기에 절반에 해당한다. 

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

_정렬은 오름차순으로 되어 있다 가정하고 설명한다. 만약 내림차순일 경우 비교식만 바꾸면 된다_.

중간 값을 구하기 위한 공식: `mid = low + (high - low) / 2;`

보통 중간 값을 구할 때 사용하는 공식으로 `mid = (low + high) / 2`를 사용하는데 이는 오버플로우가
발생 할 위험이 있다. 물론 루비와 같이 큰 수의 제약이 없는 경우 상관은 없지만 알고 있다는게 중요하다.

중간 값을 구한 후 찾는 값(`target`)과 비교를 한다. 이 때 발생 할 수 있는 경우의 수は４つがある。
1. 중간値＝＝`target`の場合
  + `target`のindexを戻す。
    ![Binary Search](/assets/images/algorithm/search/search-binary-search-2.jpg)

2. 중간値が`target`より大きい場合
  + `target`이 중간 값 **왼쪽**에 위치하므로 `high`의 값을 `middle - 1`으로 바꾸고 값을 다시 비교한다.<br>
    ![Binary Search](/assets/images/algorithm/search/search-binary-search-3.jpg)

3. 중간値が`target`より小さい場合
  + `target`이 중간 값 **오른쪽**에 위치하므로 `low`의 값을 `low + 1`으로 바꾸고 값을 다시 비교한다.<br>
    ![Binary Search](/assets/images/algorithm/search/search-binary-search-4.jpg)


4. `target`がリストの中に存在しない場合
  + 리스트의 크기를 계속해서 반으로 나누다보면 `low`가 `high`보다 커지는 시기가 있는데 바로 
    `target`이 리스트에 존재하지 않을 때다. 이 때는 `-1`을 반환한다.
