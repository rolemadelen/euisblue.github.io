---
layout: post
title:  "모던 자바스크립트 2.15"
subtitle: "함수 (Functions)"
date:   2021-01-11 07:00:00 +1400
author: "J2ieu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
hidden: false
lang: ko
permalink: /ko/modern-js/fundamental5/
tags:
  - javascript
<<<<<<< HEAD
<<<<<<< HEAD
  - modern js 
=======
  - modern-js 
>>>>>>> ba229b1 (Design Modified)
=======
  - modern js 
>>>>>>> 8534215 (tags splitted by a space)
---

## 2.15 함수

프로그램을 작성하다 보면 유사한 혹은 완전히 같은 동작을 하는 코드를 반복해서 구현해야 하는 경우가 있다. 이럴 때 프로그램의 주요 구성 요소(building block)인 함수를 사용하면 불필요한 반복을 줄일 수 있게 된다.

앞에서 사용한 `prompt(...)` `alert(...)` `confirm(...)`들은 자바스크립트 내부에서 제공하는 것들로 내장 함수(internal function)라고 부른다. 여기서는 직접 함수를 만들어보는 방법을 살펴본다.

### 함수 선언

함수 선언(function declaration) 방식으로 함수를 만들 수 있다.

```jsx
// 함수 선언 ;
function 함수이름() {
	// 코드
}

함수이름(); // 함수 호출 ;
```

`hello world`를 출력하는 `foo`라는 함수를 만들어보자.

```jsx
function foo() {
    console.log('hello world!');
}

foo(); // hello world! ;
foo(); // hello world! ;
```

`foo()`로 작성한 함수를 호출했다. 두 번 호출 했으므로, `hello world!` 라는 문장이 두 번 출력된다.

### 지역 변수

함수 내부에서 선언한 변수를 지역 변수(local variable)라고 하며, 지역 변수는 그 범위(scope; 스코프) 에서만 접근할 수 있다.

```jsx
function foo() {
    let x = 'hello';
    console.log(x);
}

foo(); // hello
console.log(x); // ReferenceError: x라는 변수가 존재하지 않음 ;
```

`x`라는 변수는 `foo()` 함수 안에서 만든 지역 변수이므로, 함수 내부에서만 접근이 가능하다. 함수를 벗어난 순간 더 이상 `x`는 존재하지 않게 된다.

### 전역 변수

**외부 변수**(_outer variable_) 또는 **전역 변수** (_global variable_)는 **어디에서도 접근이 가능**한 변수이다. 함수 내부에서 전역 변수를 사용할 수 있고, 값의 수정도 가능하다.

```jsx
let x = 'hello';

function foo() {
    x += ' world';
}

console.log(x); // hello ;
foo();
console.log(x); // hello world ;
```

### 변수 숨기기 (shadowing)

전역 변수는 어디에서든 접근이 가능하다.

하지만 함수 내부에 전역 변수와 같은 이름의 지역 변수가 있다면, 전역 변수는 가려지고(_shadowing_) 지역 변수가 사용된다.

```jsx
let name = 'Eubug';

function foo() {
    let name = 'foo-eubug';
    console.log(name); // foo-eubug ;
}

foo(); // foo-eubug  ;
console.log(name); // Eubug ;
```

### 매개변수

매개변수(parameter)를 사용해서 함수에 임의의 값을 전달할 수 있다. 매개변수는 인자(argument)라고도 불린다.

```jsx
function chat(name, text) {
    console.log(name + ': ' + text);
}

chat('Eubug', '안녕하세요'); // Eubug: 안녕하세요 ;
chat('2Core', '안녕!');    // 2Core: 안녕! ;
```

함수를 호출할 때 각각의 값들을 콤마로 분리해서 함수에 전달해준다.

첫 번째 호출 부분을 보면 `chat`함수는 각각 `Eubug`와 `안녕하세요` 라는 문자열을 함수에 전달한다. 전달된 값들은 각각 `name`과 `text`에 **복사되고** 이 두 변수는 지역 변수로 사용이 가능하다.

지역 변수는 **복사된 값**이기 때문에, 해당 값을 이리볶고 저리볶아도 본래의 값에는 영향을 끼치지 않는다.

### 기본값

매개변수를 설정한 함수에 아무런 값도 전달하지 않으면, **아무런 값도 전달받지 못한 인자는** **undefined**를 가지게 된다.

```jsx
function chat(name, text) {
    console.log(name + ': ' + text);
}

chat('Eubug'); // Eubug: undefined ;
```

위와 같은 경우를 보면 '아, 코드를 작성하면서 실수로 빼먹었구나' 라고 생각할 수도 있고, 실제로 실수가 맞는 경우도 있다.

하지만 고의적으로 이 방법을 사용할 때도 있는데, 이럴 때는 초기값(default value)를 설정해서 따로 처리를 한다.

예를들면 위와 같은 함수에서 사용자 이름만 전달하고 `text` 문자열을 넘겨주지 않았을 경우, 자동으로 `안녕하세요` 가 출력되도록 기초값을 설정할 수 있다.

```jsx
function chat(name, text='안녕하세요') {
    console.log(name + ': ' + text);
}

chat('Eubug'); // Eubug: 안녕하세요 ;
chat('cat');   // cat: 안녕하세요 ; 
chat('Eubug', 'hello'); // Eubug: hello ;
```

기초값은, 해당 함수를 실행할 때 인자가 없음이 확인되면 그때 기초값을 사용한다. 물론 값이 있으면 해당 값을 사용한다.

위와 같은 방식외에도 기초값을 설정할 수 있는 방법은 많다.

```jsx
function chat1(name, text) {
    if (text === undefined) {
        text = '안녕하세요';
    }
    console.log(name + ': ' + text);
}

function chat2(name, text) {
    text = text || '안녕하세요';
    console.log(name + ': ' + text);
}

function chat3(name, text) {
    text = text ?? '안녕하세요';
    console.log(name + ': ' + text);
}

chat1('Eubug');  // Eubug: 안녕하세요 ;
chat2('Eubug2'); // Eubug2: 안녕하세요 ; 
chat3('Eubug3'); // Eubug3: 안녕하세요 ;
```

### 반환 값

함수를 호출한 장소에 특정 값을 반환할 수 있다. 반환된 값을 반환값(return value)라고 한다.

```jsx
function add(a, b) {
    return a+b;
}

console.log(add(3, 5)); // 8 ;
```

`add`는 두 값을 더한 값을 반환하는 함수이다.

`console.log(add(3, 5))` 에서 `add`함수를 호출하고 인자값으로 `3`과 `5`를 전달한다. 함수는 이 두 값을 더한 값인 `8`을 `return` 키워드로 해당 함수가 호출되었던 곳으로 반환한다. 결과적으로 `console.log(8)`이 실행된다.

---

반환값 없이 `return` 만 사용할 수 도 있다.

```jsx
function prime(n) {
    if (n <= 1) {
        return;
    }

    // 소수 확인 코드 ...
}
```

위 처럼 중간에 `return` 지시자를 만나게 되면 해당 함수는 더 이상 코드를 실행하지 않고 바로 함수를 빠져나온다.

위와 같은 경우 함수는 `undefined`를 반환하며 `return` 지시자가 없는 경우도 마찬가지다.

```jsx
function foo() { }
function bar() { return; }

console.log(foo()); // undefined ;
console.log(bar()); // undefined ;
```

`return`과 값 사이에 개행을 주면 안된다. 개행을 할 경우 `return` 끝에 자동으로 세미콜론이 삽입 된다. 개행을 하고 싶은 경우는 `return (` 와 같이 끝에 괄호로 시작해야 한다.

### 함수 이름짓기

-   함수의 이름만 보고 어떤 작업을 하는 코드인지 알 수 있어야한다.
    
    불필요한 주석을 달 필요가 없기때문에, 잘 짜여진 함수는 코드 그 자체로 주석의 역할을 한다.
    
-   그렇기 때문에 함수명은 대게 동사이다.
    
    `show...` `check...` `get...` `calc...` `create...` 등등..
    
-   함수는 동작 하나만 담당해야 한다.
    
    💭 _Eubug: 그렇기는 한데 그렇다고 하나하나 모든 동작을 전부 함수로 구현해버리면 오히려 가독성이 떨어지고 여기저기 함수를 호출하고 왔다 갔다 하면서 오히려 성능이 떨어질수가 있다 — 라고 생각한다._
    

## Reference
- [2.15 함수](https://ko.javascript.info/function-basics)