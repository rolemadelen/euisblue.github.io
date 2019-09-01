---
layout: post
title: "[C] 변수의 자료형 출력하기"
ref: c-generic
date: 2018-11-26 19:15:00
categories: C
lang: ko
---

연결 리스트로 스택을 구현 하고 컴파일 했더니,
서로 다른 자료형의 값을 대입하고 있다는 오류가 나왔다.

문제가 발생 한 부분은 아래와 같다:
```c
temp->next = stack->head;
```
구현을 제대로 했다면 필시 `next`와 `head` 자료형은 둘 다 `Node *` 일 터인데 왜 다른걸까? <br />
곰곰히 생각하던 중, "자료형을 출력 못하나?" 하는 생각이 들었다.

검색 결과 `_Generic`이라는 걸 발견했다. 아래의 코드를 살펴보자.

```c
#define typename(x) _Generic((x),                                                                     \
		_Bool: "_Bool",                              unsigned char: "unsigned char",          \
		char: "char",                                  signed char: "signed char",            \
		short int: "short int",                 unsigned short int: "unsigned short int",     \
		int: "int",                                   unsigned int: "unsigned int",           \
		long int: "long int",                    unsigned long int: "unsigned long int",      \
		long long int: "long long int",     unsigned long long int: "unsigned long long int", \
		float: "float",                                     double: "double",                 \
		long double: "long double",                         char *: "pointer to char",        \
		void *: "pointer to void",                           int *: "pointer to int",         \
		default: "other") 
```

위에서 지정한 매크로를 가지고 변수의 자료형을 출력할 수 있다. <br />
아래 예제는 첫 줄 부터 차례대로 int, char, double을 화면에 출력한다.

```c
int main(void)
{
	int x = 5;
	char y = 6;
	double z = 10;

	printf("type of x: %s\n", typename(x)); // output "int"
	printf("type of y: %s\n", typename(y)); // output "char"
	printf("type of z: %s\n", typename(z)); // output "double"

	return 0;
}
```

그럼 본론으로 돌아와서, `struct Node * : "pointer to Node"`를 매크로에 추가하고<br />
`temp->next`와 `stk->head`의 자료형이 뭔지 출력해보자.

출력 했더니`other`와 `pointer to Node`가 나왔다. `temp->next`의 자료형이 `Node *`가
아니라는 의미다. 

노드의 구조체를 다시 한 번 찬찬히 살펴봤다.

오류가 있었다.

```c
typedef struct {
	struct Node *next;
	// code
} Node;

typedef struct {
	Node *head;
	// code
} Stack;
```

위 코드는 아래와 같이 되어야 한다.

```c
typedef struct Node{
	struct Node *next;
	// code
} Node;

typedef struct Stack {
	Node *head;
	// code
} Stack;
```

<br />
## Reference
  - [StackOverflow : Checking certain type](https://stackoverflow.com/questions/6280055/how-do-i-check-if-a-variable-is-of-a-certain-type-compare-two-types-in-c)
  - [StackOverflow : typedef struct](https://stackoverflow.com/questions/17720223/c-typedef-struct-name-vs-typedef-struct-name/23660072)
