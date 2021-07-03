---
layout: post
title:  "모던 자바스크립트 2.9 - 2.14"
subtitle: "비교 연산자 • if와 '?'를 사용한 조건 처리 • 논리 연산자 • null 병합 연산자 '??' • while과 for 반복문 • switch문"
date:   2021-01-09 07:00:00 +1400
author: "J2ieu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
hidden: false
lang: ko
english: true 
permalink: /ko/modern-js/fundamental4/
tags:
  - javascript
<<<<<<< HEAD
  - modern js 
=======
  - modern-js 
>>>>>>> ba229b1 (Design Modified)
---

## 2.9 비교 연산자

### 불린형 반환

비교 연산자는 로직을 다루기 때문에 그 결과값은 `true` 또는 `false` 입니다.

```js
console.log(2 > 1); // true
console.log(2 < 1); // false

let isSame = 2 == 1;
console.log(isSame); // false
```
### 문자열 비교

문자열 비교는 '사전순', 정확하게는 유니코드에 등록된 각 문자의 숫자 순으로 비교됩니다.

```js
console.log('A' > 'Z'); // false
console.log('Java' < 'JavaScript'); // true 
console.log('A' > 'a'); // false
```
마지막 줄인 `A` 와 `a` 의 비교결과는 왜 `false`일까?

아래의 표를 참고해주세요.
![ASCII table](/img/in-post/modern-js/fundamental4/ascii-table.png)

`A`의 유니코드는 10진수(Dec)로 65이고 `a`는 97이다. 즉 `67 > 97` 가 되어서 `false`가 반환된다.

### 다른 형을 가진 값 간의 비교

서로 다른 타입을 비교 할 경우 자동으로 숫자형으로 변환된다.

`true` 는 `1`, `false` 는 `0`으로 변환된다.

```js
console.log('2' > 1);    // true: 2 > 1 으로 변환된다 ;
console.log(true == 1);  // true
console.log(false == 0); // true 
```
### 일치 연산자

동등 연산자 (`==`) 는 두 피연산자의 타입형은 무시하고 자료를 비교한다.

```js
console.log('0' == 0);   // true
console.log(false == 0); // true
console.log('' == 0);    // true
```
자료와 타입형 둘 다 확인하는 연산자를 **일치 연산자 (strict equality operator)**라고 부르며 연산자 표기는 `===`이다.

```js
console.log('0' === 0);   // false
console.log(false === 0); // false
console.log('' === 0);    // false
```
### null이나 undefined와 비교하기

- `null` 과 `undefined` 는 서로 비교하지 말 것 (`===` 는 나름 안전(?)하기 때문에 괜찮지만 그 외 연산자는 No!)
- `null` 이나 `undefined` 가 될 가능성이 있는 변수와는 비교 연산자를 사용하지 않도록 주의.

## 2.10 조건문

### 'if'문

조건이 만족할 때 특정 코드가 실행 되도록 하는 `if(..)`문 이있다. 

```js
if ( cond ) 
{
    console.log('첫 번째 조건문이 참이라면 여기를 실행');
} 
else if ( cond2 ) 
{
    console.log('두 번째 조건문이 참이라면 여기를 실행');
}
else if ( cond3 )
{
    console.log('세 번째 조건문이 참이라면 여기를 실행');
}
else 
{
    console.log('전부 다 아니라면 여기를 실행');
}
```
첫 번째 조건이 참일 경우, `if`문을 실행한다. 만약 거짓일 경우, 첫 번째 조건 다음에 오는 `else if(..)`절의 조건을 확인한다.

이것도 거짓일 경우, 그 다음 조건을 계속해서 확인하며, 모든 조건이 거짓일 경우 마지막 구문인 `else`절의 코드를 실행하게 된다.

### 삼항(ternary) 연산자

조건문이 간단할 경우, 삼항연산자(ternary oprerator)를 사용해서 간단히 표기 할 수 있다.

```js
let x = prompt('enter a number', 1);

if (x == 7) 
{
    console.log('lucky seven!');
}
else
{
    console.log('just a number');
}
```
위 조건문을 삼항연산자로 나타내면 아래처럼 표현 할 수 있다.

```js
let x = prompt('enter a number', 1);
console.log( (x == 7) ? 'luky seven!' : 'just a number' );
```
삼항연산자의 문법은 `(조건) ? true : false` 이다.

만약 조건이 참이라면 첫 번째 `true` 부분을 실행하고 거짓이면 `false` 부분을 실행한다.
삼항연산자의 장점으로는 코드가 짧아진다는 것. 그렇다고 간결하다고 말 할수는 없다. 가독성이 떨어지기 때문.
좀 더 복잡하게 `else if` 를 포함한 삼항연산자도 표현할 수는 있지만, 가독성이 심각하게 나쁘기 때문에 권장하지는 않는다.

아무리 간단한 코드라고 해도 PS를 하는게 아니라면 가독성을 위해서라도 `if-else`문을 사용하자.

## 2.11 논리 연산자

### || (OR)

인수 중 하나라도 `true` 라면 `true` 를 반환한다.

```js
console.log(true  || true);  // true
console.log(true  || false); // true
console.log(false || true);  // true
console.log(false || false); // false
```
### && (AND)

인수가 전부 참 일때 `true` 를 반환한다.

```js
console.log(true  && true);  // true
console.log(true  && false); // false
console.log(false && true);  // false
console.log(false && false); // false
```

### 자바스크립트의 추가 기능

- OR 연산자를 체이닝할 경우, 첫 번째 `true` 인 값을 반환한다. 만약 모든 값이 거짓일 경우, 마지막 값을 반환한다.
    ```js
    console.log( 1 || 0 );    // 1
    console.log( null || 1 ); // 1
    console.log( undefined || null || 0 ); // 0 ; 모두 거짓이어서 마지막 값인 0을 반환
    ```
- AND 연산자를 체이닝할 경우, 첫 번째 `false` 인 값을 반환한다. falsy가 없다면 마지막 값을 반환한다.
    ```js
    console.log( 1 && true ); // true falsy가 없기 때문에 마지막 값을 반환
    console.log( 1 && 0 );    // 0 
    console.log( null && 1 ); // null
    console.log( undefined && null && 0 ); // undefined
    ```

### 단락 평가(short circuit evaluation)

단락 평가(short circuit evaluation)란, 논리 연산자를 왼쪽에서 부터 평가하는데 결과가 이미 **확실하게** 정해지면 거기서 평가를 그만두고 바로 값을 반환하는 것을 의미.

**OR**의 경우 첫 번째 `true` 를 찾은 순간, 그 뒤에 어떤 연산자가 있든 무조건 `true` 이기 때문에 바로 참을 반환합니다.

아래 코드의 경우 첫 번째 `true` 를 확인하고 바로 참을 반환합니다.

```js
let result = true || ('... 뭐든 간에 상관없다'); 
console.log( result ); // true
```
**AND**의 경우 거짓을 만나게 되면 무조건 `false` 이기 때문에 평가를 종료하고 바로 거짓을 반환합니다.

```js
let result = false && ('... 뭐든 간에 상관없다');
console.log( result ); // false
```

### ! (NOT)

- `!true` → `false`
- `!false` → `true`

느낌표를 논리 연산자 앞에 붙이면, 참은 거짓으로, 거짓은 참으로 변환된다.

### '!!' trick

NOT을 연달아 사용하면 값을 불린형으로 변환할 수 있다.

```js
console.log(!!"string"); // true
console.log(!!null);     // false
```
이는 내장 함수 `Boolean(..)` 의 결과와 같다.

## 2.12 null 병합 연산자 '??'

스펙에 추가된 지 얼마 안된 문법. 구식 브라우저는 폴리필이 필요하다.

- null 병합 연산자 (nullish coalescing operator) `??` <br />
    `a ?? b` → `a` 가 `null` 도 아니고 `undefined` 도 아니면 `a`; 그 외는 `b` <br />
    삼항연산자로 표현하면 이것과 같다 → `x = (a != null && a != undefined) ? a : b`

- `??` 도 체이닝이 가능하다. <br />
    `null`이나 `undefined`가 아닌 첫 번째 피연산자를 반환 <br />
    →  `fname ?? lname ?? nickName ?? "Anonymous"`

### '??' 와 '||' 의 차이

- `||` 는 첫 번째 truthy값을 반환
- `??` 는 첫 번째 defined된 값을 반환

```js
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0   ; 0은 정의되어 있기때문에 0이 출력된다.
```

## 2.13 반복문

### 'for'문

```js
for (초기식; 조건식; 증감식/감소식) {
    // statements
}
```
아래와 같이 무한루프를 만들수도 있다.

```js
for(;;) {
    // 끊임 없이 반복한다.
} 
```
### 'while'문

```js
초기식

while (조건식) {
    증감식
}
```
`for`문 하고는 다르게 초기식이랑 증감/감소 하는 구절이 반복문에 포함되어 있지 않다. 그렇기 때문에 반복문 외부에서 따로 초기식을 선언하고, 내부에서 증감/감소를 해준다.

`while`문도 `for`문과 마찬가지로 무한루프를 만들 수 있다.

```js
while(true) {
    // 끈임 없이 반복한다.
}
```
### 'do..while'문

```js
초기식

do {
    증감/감소
} while (조건식)
```
### 'while' vs 'do-while'

- `do..while`문의 경우는 조건과 상관없이 무조건 한 번은 실행.
- 무조건 한 번은 실행되야 하는 경우 `do..while` 문을 사용.

### break

- 무한 루프에서 빠져나올 때 사용된다.
- 혹은 조건이 만족 되었을때 임의로 루프 도중 탈출이 가능!

아래 코드는 `i` 가 7이 되면 반복문을 탈출한다.

```js
let i = 0;

while(true) {
    if (i == 7) {
        break;
    }

    console.log(i);
    ++i;
}
```
### continue

- 반복문을 탈출하지 않고, 다음 반복으로 넘어간다

아래는 `i`가 짝수일 경우 다음 반복으로 넘긴다. 즉, 홀수만 출력된다.

```js
for(let i=0; i<10; ++i) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}
```
### label

레이블을 사용해서 반복문을 탈출 할 수 있다.

```js
LOOP: 
for (...) {
    for (...) {
        for(...) {
            if (true) {
                break LOOP;
            }
        }		
    }
}
```
위 코드의 경우, 레이블을 사용하지 않으면 조건문을 사용해서 안쪽에서 부터 `break`로 탈출해야 한다. 아주 살짝 코드가 길어진다. 레이블은 웬만하면 사용하지 않는것이 좋지만, 위와 같은 경우는 예외로 사용해도 괜찮다 (개인적인 생각).

## 2.14 switch문

- 복수의 `if` 조건문은 `switch` 문으로 바꿀 수 있다.

```js
switch(x) {
    case '1':  // if (x === '1')
        break;
    case 'value': // if (x === 'value')
        break
    default: // else
}
```
검사 할 데이터를 `switch(..)`에 넘겨주고, 해당 데이터와 비교 할 값들을 `case` 에 작성한다.

`case`는 `if`문에 해당하고 `default`는 `else`와 같다.

### fall through - 1

`break`문이 없으면, 해당 조건을 만족하더라도 탈출하지 않고 `break`를 만나거나 `switch`문이 끝날때까지 이어지는 `case`문을 실행한다(fall-through).

```js
let x = 7;
switch(x) {
    case 7:
        console.log('lucky!');
    case 4:
        console.log('bad luck!');
    case 1:
        console.log("you're the best");
        break;
    default:
        console.log('okay');
}
```
위 코드는 첫 번째 `case 7:` 이 실행되지만 `break`가 없기 때문에 이어서 `case 4:`, `case 1:`을 실행하고 `break` 를 만나서 `switch`문을 빠져나오게 된다.

### fall through - 2

fall through를 사용해서 비슷한 값들을 묶어줄 수 있다.

아래는 입력한 숫자가 짝수인지 홀수인지 판별하는 간단한 코드이다.

```js
let num = prompt('enter a number', 0);

switch(num) {
    case '1':
    case '3':
    case '5':
    case '7':
    case '9':
        console.log('홀수!');
        break;
    case '2':
    case '4':
    case '6':
    case '8':
    case '10':
        console.log('짝수');
        break;
    default:
        console.log('숫자');
}
```
`switch`는 일치 비교(`===`)를 사용하므로 자동으로 형변환이 이루어지지 않는다.

## Reference
- [2.9 비교 연산자](https://ko.javascript.info/comparison)
- [2.10 if와 '?'를 사용한 조건 처리](https://ko.javascript.info/ifelse)
- [2.11 논리 연산자](https://ko.javascript.info/logical-operators)
- [2.12 null 병합 연산자 '??'](https://ko.javascript.info/nullish-coalescing-operator)
- [2.13 while과 for 반복문](https://ko.javascript.info/while-for)
- [2.14 switch문](https://ko.javascript.info/switch)