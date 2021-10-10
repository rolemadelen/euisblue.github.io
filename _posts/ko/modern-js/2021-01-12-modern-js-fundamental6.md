---
layout: post
title:  "모던 자바스크립트 2.16 - 2.17"
subtitle: "함수 표현식 • 화살표 함수 기본"
date:   2021-01-12 07:00:00 +1400
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
hidden: false
lang: ko
permalink: /ko/modern-js/fundamental6/
tags:
  - javascript
  - modern js 
---

## 2.16 함수 표현식

일반적으로 함수는 **특별한 동작을 하는 구조**를 의미하지만 자바스크립트는 **함수를 특별한 종류의 값**으로 취급한다.

### 함수 표현식

`hello world!`를 출력하는 간단한 함수를 함수 선언문(function declaration) 방식으로 구현하면 아래와 같다.

```jsx
function hello() 
{
    console.log('hello world!');
}
```

해당 함수를 함수 표현식으로 표현하면 아래와 같다.

```jsx
let hello = function() 
{
    console.log('hello world!');
};
```

함수를 마치 변수처럼 `hello` 변수에 할당했고, 실제로 변수처럼 사용이 가능하다.

```jsx
console.log(hello);  // 함수 전체 코드가 보인다.
hello(); // 함수를 실행
```

함수를 받은 변수를 괄호없이 사용하면 해당 함수는 실행되지 않고 해당 함수의 코드를 확인 할 수 있다.

정확히 말하면 일반적인 변수는 아니지만, 본질적으로 변수처럼 기능하기 때문에 복사를 하는것도 가능하다.

```jsx
let hello = function() 
{
    console.log('hello world!');
};

let foo = hello; // 괄호가 없음을 주의
foo();   // hello world!
hello(); // hello world!
```

### 콜백 함수

함수를 함수의 인자로 전달하여 필요할 때 해당 함수를 나중에 호출하는 것을 콜백함수(callback function)라고 한다.

```jsx
function greeting(name) 
{
    console.log('Hello ' + name);
}

function readName(callback) 
{
    let name = prompt('당신의 이름을 입력해주세요') || '홍길동';
    callback(name);
}

readName(greeting);
```

`readName` 함수를 호출할 때 `greeting` 함수를 인자로 전달했다. `greeting` 함수는 바로 실행되지 않고, 우선 사용자의 입력을 기다렸다가 나중에 호출된다.

위 예의 경우는 `readName` 함수를 실행하면 바로 `greeting` 함수가 실행되기 때문에 동기(synchronous)방식 콜백 함수라고 한다. 쉽게말하면 A, B, C,.. 차례대로 실행이 된다는 의미이며, A가 끝나기 전에 B는 동작하지 않는다.

콜백 함수는 주로 비동기(asynchronous) 방식으로 작성된 코드에서 사용된다고 한다. 지금은 잘 몰라도 된다.

### 함수 표현식 vs 함수 선언문

함수 표현식과 함수 선언문이 어떻게 다를까?

#### 1. 문법 차이

함수 표현식 (function expression)

```jsx
let foo = function() { ... };
```

함수 선언문 (function declaration)

```jsx
function foo() { ... }
```

#### 2. 함수의 생성 시기

**함수 표현식**은 마치 변수와 같기 때문에, 프로그램이 해당 줄(함수 표현식이 사용된 장소)에 도달했을 때 비로소 함수가 생성된다. 정의하지 않은 변수를 사용할 수 없는 것처럼, 함수 표현식도 정의하지 않은 함수를 사용할 수 없다.

**함수 선언문**은 선언문이 정의되기 전에도 사용이 가능하다.

```jsx
hello(); // hello world! ;

function hello() 
{
    console.log('hello world!');
}
```

자바스크립트는 코드를 실행하기 전, 전역(global)에 선언된 함수 선언문을 찾아 해당 함수를 미리 생성한다. 그렇기 때문에 스크립트 어느 곳에서든 함수 선언문으로 작성된 함수를 사용할 수 있게 된다.

만약 C 또는 C++를 공부한적이 있다면 아래와 같은 코드를 본적이 있을것이다.

```c
void foo();

int main(int argc, char **argv) 
{
    foo();
}

void foo() 
{
    printf("hello world!\\n");
}
```

`foo` 라는 함수의 원형(function prototype)을 상단에 정의해두면 컴파일러가 메인에서 해당 함수를 마주했을 때, "아, `foo`가 뭐하는 함수인지는 모르겠지만 일단 존재는 하구나!" 하고 알 수 있게 된다. 쉽게 말해 자바스크립트 처럼 실제로 정의하기 전에 사용할 수 있다. 자바스크립트의 함수 선언문도 같은 방식이라고 생각한다.

#### 3. 스코프

범위(scope)는 차이점 이라기 보다는 그냥 활용이라고 보는것이 낫다. 함수 표현식은 변수와 같은 방식으로 사용되기 때문에 조건에 따라 다른 함수를 실행하도록 각기다른 함수를 표현식에 대입할 수 있다.

```jsx
let calculate;

let op = prompt('어떤 연산을 할까요 (+, -, *, /)?');

if (op === '+') 
{
    calculate = function() { /* 더하기 */ };
}
else if (op === '-')
{
    calculate = function() { /* 빼기 */ };
}
else if (op == '*')
{
    calculate = function() { /* 곱하기 */ };
}
else
{
    calculate = function() { /* 나누기 */ };
}

calculate();
```

반대로 함수 선언문으로 위와 같은 동작은 불가능하다. 애초에 함수가 선언된 범위를 벗어나면 해당 함수에 접근이 불가능하기 때문이다.


## 2.17 화살표 함수 기본

함수 표현식보다 단순하고 간결한 문법으로 함수를 만들 수 있다. 바로 \*\*화살표 함수(arrow function)\*\*을 사용하는 것.

우선 함수 표현식을 다시 한 번 살펴보자.

```jsx
let func = function(arg1, arg2, ...argN) {
    return expression;
};
```

위 함수를 화살표 함수로 나타내면 아래와 같다.

```jsx
let func = (arg1, arg2, ...argN) => expression
```

`func` 함수는 인자를 받아서 화살표 우측의 표현식(`expression`)을 평가하고 그 값을 반환한다.

### 예시: sum(a, b)

```jsx
let sum = function(a, b) {
    return a + b;
};
```

위 두 값을 더하는 함수를 화살표 함수로 바꿔보면 아래와 같다.

```jsx
let sum = (a, b) => a + b;
```

훨씬 간결해졌다.

### 예시: no arguments

인자가 없을때는 빈 괄호(`()`)를 사용한다.

```jsx
let hello = () => console.log('hello world!');
```

## Reference
- [2.16 함수 표현식](https://ko.javascript.info/function-expressions)