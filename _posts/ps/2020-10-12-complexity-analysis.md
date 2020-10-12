---
category: ps
url_path: '/complexity'
title: "Complexity Analysis"
type: 'ps'

layout: null
---

## Time Complextiy
- 시간복잡도(Time Complexity)는 프로그램 수행시간을 분석할 때 사용된다.
- 실행횟수를 계산하기 때문에 반복문에 크게 영향을 받는다.
- Big-O 표기법에서 최고차항의 차수만 표기한다. 
  + 예) `5n^4 - 7n^3 + n^2 + 4` → `O(n^4)`

## Space Complexity 
- 공간복잡도(Space Complexity)는 메모리 사용량을 분석할 때 사용된다.
- `사용한 배열의 크기 * 배열의 자료형의 크기`로 계산한다.

주어진 입력 크기가 N일 때, 아래의 코드들은 각각의 시간복잡도를 가진다.
첫 번째(constant)가 가장 빠르며 밑으로 갈 수록 느리다.

( 해당 코드들은 박트리님의 글을 참고했습니다.).

## 0. Constant
```cpp
// O(1)
printf("%d", n);
```

## 1. Logarithmic
```cpp
// O(log(n))
while(n) { n/=2; }
```

## 2. Square root
```cpp
// O(sqrt(n))
for(int i=0; i*i<=n; ++i) {}
```

## 3. Linear
```cpp
// O(n)
for(int i=0; i<n; ++i) {}
```

## 4. Logarithmic Linear
```cpp
// O(nlog(n))
for(int i=0; i<n; ++i) {
  for(int j=i; j; j/=2) {}
}
```

## 5. Square root Linear
```cpp
// O(nsqrt(n))
for(int i=0; i<n; ++i) {
  for(int j=0; j*j<=i; ++j) {}
}
```

## 6. Quadratic
```cpp
// O(n^2)
for(int i=0; i<n; ++i) {
  for(int j=0; j<n; ++j) {}
}
```

## 7. Cubic
```cpp
// O(n^3)
for(int i=0; i<n; ++i) {
  for(int j=0; j<n; ++j) {
    for(int k=0; k<n; ++k) {}
  }
}
```

## 8. Exponential
```cpp
// O(2^n)
int fibonacci(int n){
  if(n<=1) { return 1; }
  return fibonacci(n-1) + fibonacci(n-2);
}
```

- PS에서 보통 1억번의 연산을 1초로 계산한다.
- 시간제한이 1초인 문제의 경우, 위에서 6번까지의 시간복잡도를 가진 알고리즘을 사용해서 문제를 풀 수있다.

## Reference
- [박트리 - 복잡도 분석](https://baactree.tistory.com/26)
