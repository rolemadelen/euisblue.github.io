## Array (배열)

- 메모리 상에 원소를 연속하게 배치한 자료구조
![array](/img/in-post/ds-algo/array/array.png)


### 배열의 성질 
1. 원소에 접근 및 변경에 걸리는 시간은 O(1)이다
2. 메모리 오버헤드가 거의 없다
3. [Cache hit rate](https://parksb.github.io/article/29.html)가 높다
4. 메모리 상에서 배열의 크기만큼의 연속한 구간을 미리 잡아야해서 할당에 제약이 걸린다

### 배열의 기능
여기서의 배열은 크기가 자동적으로 늘어나고 줄어드는 가변 크기 배열이라고 가정하고 설명합니다.

<style>
img {max-width: 90% !important;}
</style>

#### 임의의 원소에 접근 및 변경: O(1)
![array access/modify](/img/in-post/ds-algo/array/array-access-modify.png)

index를 사용하여 임의의 원소에 바로 접근하여 값을 출력하거나 변경하거나 할 수 있습니다.

```cpp
int size = 8;
int arr[size] = {1, 1, 2, 3, 5, 9, 13, 21};
arr[5] = 8; // O(1)
```

#### 리스트 마지막에 원소 추가: O(1)
![array pushback](/img/in-post/ds-algo/array/array-pushback.png)

배열의 크기를 1증가시키고 값을 대입하면 되기 때문에 O(1)이 된다.
```cpp
int size = 8;
int arr[size] = {1, 1, 2, 3, 5, 9, 13, 21};
arr[size] = 34;
++size;
```

#### 리스트의 마지막 원소 삭제: O(1)
![array pop back](/img/in-post/ds-algo/array/array-popback.png)

맨 끝에 원소를 삭제하는 건 간단히 배열의 길이를 하나 줄여주면 된다.

```cpp
int size = 8;
int arr[size] = {1, 1, 2, 3, 5, 9, 13, 21};
--size;
```

#### 임의의 위치에 원소 삽입: O(N) 
![array insert at](/img/in-post/ds-algo/array/array-insertat.png)

중간에 삽입하는 경우, 해당 원소에 접근하는 것 까지는 O(1)에 가능합니다.
하지만 새로운 데이터 삽입을 위해, 해당 위치에서 부터 그 이후에 있는 모든 원소들을 한 칸씩 밀어주어야 합니다.
예를들어 맨 처음에 원소를 삽입하기 위해서는, 모든 원소들을 한 칸씩 오른쪽으로 밀어주는 과정이 필요합니다.
그래서 O(N)의 시간이 걸립니다.

```cpp
void insertAt(int index, int data, int *arr, int &len) {
  int temp = len; 
  while(temp >= index) {
    arr[temp] = arr[temp-1];
    --temp;
  }

  arr[temp] = data;
  ++len;
}
```

#### 임의의 위치의 원소 삭제: O(N)
![array delete at](/img/in-post/ds-algo/array/array-deleteat.png)

삭제도 삽입과 마찬가지로 해당 원소에 접근하는 것 까지는 O(1)입니다.
하지만 원소를 삭제한 후, 그 뒤에 있는 모든 원소들을 한 칸씩 옮겨주는 작업이 필요하기 때문에 삭제도 평균적으로 O(N)의 시간이 걸립니다.

```cpp
void removeAt(int index, int *arr, int &len) {
  for(int i=index-1; i<len; ++i) 
    arr[i] = arr[i+1];

  --len;
}
```

## Reference
- [https://blog.encrypted.gg/927?category=773649](https://blog.encrypted.gg/927?category=773649)