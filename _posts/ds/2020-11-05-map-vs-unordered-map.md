---
category: data structure
url_path: '/map'
title: "C++ map vs. unordered map"
type: 'ds'
date: '2020-11-05 20:06:00 +0900'

layout: null
---

C++에서 `map`과 `unordered_map`의 내부 구현이 다른 걸 몰랐다. 둘 다 트리를 이용한 줄 알았는데 하나는 트리, 하나는 해시테이블을 사용한다.
이 부분을 간략히 정리해봤다.

## 내부 구현
1. `map`은 balanced BST를 사용한다.
2. `unorderd_map`은 hashtable을 사용한다.

## 메모리 사용량
`unordered_map`은 해시테이블의 테이블을 위한 메모리가 필요하기 때문에 `map`보다 메모리 사용량이 높다.

## 시간 복잡도
- `map`의 시간복잡도는 O(log n)이다. 밸런스 이진트리라서 최악의 경우도 O(log n).
- `unordered map`의 평균 시간 복잡도는 O(1). 다만 해쉬 알고리즘의 성능이 그렇게 좋지않아 모든 값이 같은 버킷의 존재하는 최악의 경우, 시간복잡도는 O(n)이 된다.

## Map vs. Unordered Map
언제 무엇을 써야할까?

- 메모리를 아끼고 싶고, 순서가 중요하고, 프로그램의 성능(퍼포먼스)을 보장받고 싶을 때 **map**을 사용한다.
- 해싱함수가 성능이 좋고 메모리에 제약이 없다면 **unordered_map**을 사용한다.

## Reference
- Introduction to Algorithms, 3rd Edition (CLRS)