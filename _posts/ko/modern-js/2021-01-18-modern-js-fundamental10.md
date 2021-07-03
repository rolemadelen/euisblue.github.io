---
layout: post
title:  "모던 자바스크립트 4.1"
subtitle: "객체: 기본 (Objects, the basics)"
date:   2021-01-18 08:00:00 +1400
author: "J2ieu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
hidden: false
lang: ko
permalink: /ko/modern-js/fundamental10/
tags:
  - javascript
  - modern-js 
---

## 4.1 객체
아래와 같이 `키(key) : 값(value)` 쌍의 프로퍼티(property)로 구성되어있다.

```js
let someObject = {
    key : value
};
```

객체를 만드는 두 가지 방법:
1. 객체 생성자
```js
let user = new Object();
```
2. 객체 리터털
```js
let user = {};
```

### 리터럴과 프로퍼티
```js
let user = {
    name: "Eubug",
    age: 19,
};
```

`user`라는 객체에는 두 개의 프로퍼티가 존재한다: `name`과 `age`. 

프로퍼티 이름은 여러 단어를 조합해서 사용할 수도 있다.
```js
let user = {
    "my name": "Eubug",
    age: 19,
    "love programming": true,
};
```

복수 단어인 경우에는 따옴표로 묶어주어야 한다.

### 프로퍼티 읽기
```js
console.log( user.name ); // Eubug
console.log( user.age ); // 19
```

복수 단어인 경우 위 처럼 접근이 불가능하다.
```js
console.log( user.love programming ); // 에러
```

**대괄호 표기법**을 사용.
```js
console.log( user["love programming"] ); // true
```


### 프로퍼티 추가
```js
user.isHuman = true; 
user["is animal"] = true;
```

위를 객체 리터럴 형식으로 선언하면 아래와 같다.
```js
let user = {
    isHuman: true,
    "is animal": true,
};
```

### 프로퍼티 제거
```js
delete user.isHuman;
delete user["is animal"];
```

### 상수 객체
일반적인 상수와 다르게, 상수 객체는 수정 될 수 있다.
```js
const user = {
    name: "Eubug",
};

user.name = 'Eu';
console.log( user.name ); // Eu
```

일반적인 상수와 다르다고 했지만 사실 특별한 케이스는 아니고, `user`가 상수이기 때문에 이 객체를 바꿀 수 없는것. 프로퍼티는 수정이 가능하다.
```js
const user = {
    name: "Eubug";
};

/* 상수 객체를 바꾸려고 하므로 오류가 난다 */
user = {
    age: "19"
};
```

### 변수 프로퍼티
위 예제에서는 계속 프로퍼티의 값으로 문자열로 접근을 했다. 하지만 프로퍼티는 변수를 사용해서 접근도 가능하다. 이 때, **대괄호 표기법으로만 접근이 가능하다.**
```js
let key = "name";

console.log( user.key ); // 오류 
console.log( user[key] );
```

### 계산된 프로퍼티
객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우, 계산된 프로퍼티 (computed property)라고 부른다.

```js
let fruit = prompt("어떤 과일을 구매하겠습니까?", "apple");

let bag = {
    [fruit]: 5, // fruit를 동적으로 받아온다 
};

console.log( bag.apple ); // fruit가 'apple'이면 5를 반환
```

개인적으로 좀 어색한 방법이었는데, 아래와 같은 코드라고 하니까 바로 이해가 됐다.
```js
let fruit = prompt("어떤 과일을 구매하겠습니까?", "apple");
let bag = {};

bag[fruit] = 5;
```

### 단축 프로퍼티
```js
function makeUser(name, ag) {
    return {
        name: name,
        age: age,
    };
}

let user = makeUser('Eubug', 19);
console.dir(user);
```

위 처럼 함수를 사용해서 객체를 반환할 때, 인자와 프로퍼티 이름이 같다면 단축 구문(property value shorthand)을 사용할 수 있다.
```js
function makeUser(name, ag) {
    return {
        name, // name: name과 같다
        age, // aga: age와 같다
    };
}

```

### 프로퍼티 존재 여부 확인
객체의 경우 존재하지 않은 프로퍼티에 접근이 가능하다. 다만 `undefined`를 반환하는데, 이를 이용해서 프로퍼티의 존재 여부를 확인 할 수 있다.

```js
let user = { };

if (user.name === undefined) {
    user.name = 'Eubug';
}
```

혹은 `"key" in 객체이름` 을 사용해서 확인할 수 있다.
```js
let user = {
    name: 'Eubug',
};

console.log("name" in user); // true
console.log("age" in user); // false
```

`undefined`를 조건문으로 확인하는 것 말고 `in`이 따로 존재하는 이유는, 프로퍼티가 실제로 존재하고 그 값이 `undefined`일 수 있기 때문이다.
```js
let user = {
    name: undefined,
};

console.log( user.name ); // undefined 하지만 프로퍼티는 존재함
console.log( "name" in user); // true
```

### `for...in` 반복문
객체의 프로퍼티들을 모두 출력하는 방법.
```js
let user = {
    name: "Eubug",
    age: 19,
    "is human": true,
};

for (let key in user) {
    // key(name) - value(Eubug)
    // key(age) - value(19)
    // key(is human) - value(true)
    console.log(`key(${key}) - value(${user[key]})`);
}
```

## Reference
- [4.1 객체](https://ko.javascript.info/object)