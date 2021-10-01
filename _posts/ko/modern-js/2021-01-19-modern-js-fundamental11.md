---
layout: post
title:  "모던 자바스크립트 4.2"
subtitle: "객체: 참조에 의한 객체 복사"
date:   2021-01-19 07:00:00 +1400
author: "Jeyeyeu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
hidden: false
lang: ko
permalink: /ko/modern-js/fundamental11/
tags:
  - javascript
  - modern js 
---

## 4.2 참조에 의한 객체 복사
- 원시 자료형(primitive data types)의 값들은 '값 그대로' 저장/할당되고 복사된다. 
- 객체는 참조에 의해 (by reference) 저장되고 복사가 이루어진다.

### 원시값 복사 
```js
let user = 'Eubug';
let str = user;

user = 'Kim';

console.log(user); // Kim
console.log(str); // Eubug
```

`user`와 `str`은 독립된 변수들이다. 서로 각기 다른 상자에 값을 보관하고 있으므로, `user`의 값을 바꿨다고 해서 `str`의 값은 바뀌지 않는다.

### 객체 복사

```js
let user = {
	name: 'Eubug',
};

let obj = user;
obj.name = 'Kim';

console.log(obj.name); // Kim
console.log(user.name); // Kim
```

`user`  **객체의 주소**가 `obj`에 복사된다. 즉, 둘 다 같은 상자를 가리킨다.
그렇기 때문에 `obj`에서 `name`을 바꾸면, 하나의 같은 상자이기 때문에 `obj.name === user.name`이 된다.

### 객체 비교
다시 한 번 말하지만, 객체는 프로퍼티들이 아닌 객체의 주소가 복사된다. 이는 객체를 비교할 때도 마찬가지로, 객체의 주소끼리 비교를 한다.

```js
let objectA = {};
let objectB = {};

console.log( objectA === objectB ); // false
```

둘 다 빈 객체 이지만, 서로 주소가 다르기 때문에 `false`가 출력된다.
그 반면, 아래의 경우는 `true`가 출력된다.

```js
let objectA = {};
let objectB = objectA;

console.log( objectA === objectB ); // true
```

### 프로퍼티를 복사하는 법
`for...in`을 사용해서 프로퍼티를 하나하나 복사하는 법도 있지만, `Object.assign`을 사용하면 간단하다.

```js
let user = {
	name: 'Eubug',
	age: 19,
};

let clone = {};

Object.assign(clone, user);
```

`Object.assign`의 문법은 아래와 같다.

```js
Object.assign(dest, [src1, src2, src3, ...]);
```
- `dest`: 이 객체로 복사한다.
- `src1, src2, src3, ...`: 복사하고자 하는 객체.
- 복사를 완료한 `dest`를 반환한다.

### 동일한 프로퍼티 복사
`Object.assign`으로 복사를 진행할 때, 같은 이름의 프로퍼티가 존재하면, `src`가 `dest`의 프로퍼티를 덮어쓴다.

```js
let user = {
	name: 'Eubug',
	age: 19,
};

let clone = {
	age: 29,
};

console.log( clone.age ); // 29
Object.assign(clone, user);
console.log( clone.age ); // 19
```

### 깊은 복사
```js
let user = {
	name: 'Eubug',
	sizes: {
		height: 170,
		weight: 45,
	};
};

let clone = Object.assign( {}, user );

console.log( clone.sizes === user.sizes ); // true
```

객체안에 객체가 있는 경우, 단순히 `Object.assign`을 사용하면 앝은 복사 (shallow copy/cloning)가 일어난다. 쉽게말해 서로 해당 객체를 공유하게 된다.

이를 해결하기 위해서는 반복문으로 몰뎐서 `user[key]`가 객체인지 확인한 후, 객체면 값을 하나하나 복사해줘야 한다. 이 과정을 깊은 복사 (deep copy/cloning)
- 깊은 복사에서 사용되는 표준 알고리즘: https://html.spec.whatwg.org/multipage/structured-data.html#safe-passing-of-structured-data
- JavaScript 라이브러리 [Lodash](https://lodash.com)의 [\_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep)을 사용하면 바로 깊은 복사가 가능하다.

## Reference
- [4.2 참조에 의한 객체 복사](https://ko.javascript.info/object-copy)