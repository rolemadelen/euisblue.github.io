---
layout: post
title:  "모던 자바스크립트 4.3"
subtitle: "객체: 가비지 컬렉션"
date:   2021-01-20 07:00:00 +1400
author: "J2ieu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
hidden: false
lang: ko
permalink: /ko/modern-js/fundamental12/
tags:
  - javascript
<<<<<<< HEAD
  - modern js 
=======
  - modern-js 
>>>>>>> ba229b1 (Design Modified)
---

## 4.3 가비지 컬렉션
자바스크립트에는 '[가비지 컬렉터 (Garbage Collector)](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))'라는 것이 존재한다. 이 친구는 우리가 만드는 변수, 객체, 함수 등, 메모리를 차지하는 아이들을 살펴보면서 더 이상 사용되지 않는 메모리를 자동으로 해제한다.

### 가비지 컬렉션 기준
'도달 가능성(reachability)'이라는 개념을 사용해서 메모리 관리를 한다.
- 도달이 가능(reachable)한가? -> 메모리에서 삭제하지 않음.
- 도달 할 수 없는가(unreachable)? -> 메모리에서 삭제 됨.

reachable? 도달 할 수 있다? 아래의 예제를 살펴보자.

```js
function foo() {
    let name = "Eubug";
    console.log(name);
}

foo();
```

함수 `foo`안에 지역변수인 `name`이 존재한다. 함수가 실행되는 동안 `name`이라는 변수에 접근이 가능하다 (도달 가능). 그렇기 때문에 함수가 실행되는 동안 `name`은 메모리에 존재하게 된다. 

함수 `foo`가 종료 되면 어떻게  될까? 더 이상 `name`에 도달할 수가 없다. 그렇기 때문에 가비지 컬렉터(이하 GC)는 _'아, `name`에 도달할 방법이 없으니 메모리에서 삭제해도 되겠군!'_ 하고 삭제하게 된다.

반대로 전역 변수의 경우:
```js
let globalName = 'Eubug';

function foo() {
    console.log(globalName);
}

foo();

console.log(globalName);
```

어디에 있던 항상 도달할 수 있기 때문에 이러한 값들은 프로그램이 끝날 때까지 메모리에 존재하기 때문에 _루트(root)_ 라고 불린다.

### 객체 참조
위에서 지역 변수와 전역 변수 얘기를 했다. 객체도 다를 것이 없다.

```js
let user = {
    name: "Eubug",
};

console.log( user.name ); // Eubug
```

전역 변수인 `user`는 프로퍼티 `name`을 참조하고 있다. 아래와 같이 `user`에 다른 값(e.g. `null`)을 대입하면 참조가 사라진다.
```js
user = null;
```

더 이상 도달이 불가능한 `name` 프로퍼티는 GC에 의해 메모리에서 삭제된다.

### 객체 복수 참조
```js
let user = {
    name: "Eubug",
};

let admin = user; // 또 다른 참조 생성

user = null; // 참조 하나를 제거

console.log( admin.name ); // Eubug
```

`admin`과 `user` 두 개의 참조가 존재한다. `user`에 참조를 지워도, `admin`으로 `name`프로퍼티에 접근이 가능하기 때문에 해당 객체는 메모리에서 삭제 되지 않는다.

### 내부 알고리즘
**mark-and-sweep** 알고리즘이 사용된다. 이 알고리즘의 대략적인 과정은 아래와 같다:
1. GC 루트 정보를 수집하고 기억(mark)한다.
2. 루트가 참조하고 있는 모든 객체들을 방문하고 이것들을 마킹한다.
3. 마킹된 모든 객체에 방문하고, 그 객체들이 참조하는 객체들 또한 마킹한다. 한 번 방문한 객체는 마킹되어 있기 때문에 두 번 방문하는 일은 없다.
4. 루트에서 도달 가능한 모든 객체를 방문할 때까지 위 과정을 반복한다.
5. 마킹되지 않은 객체를 메모리에서 삭제한다.

### GC 최적화 기법
#### 세대별 수집 (Generation Collection) 
객체의 상당수는 생성된 이후 금방 쓸모가 없어진다. 이러한 객체들을 '새로운 객체'로 구분하고 GC는 이들을 공격적으로 확인하고 필요없으면 바로 제거한다. 이 과정에서 살아남은 (오래 살아있는) 객체들을 '오래된 객체'로 분류하고 GC는 '새로운 객체'보다 덜 감시하게 된다.

#### 점진적 수집 (Incremental Collection)
객체가 많아질 수록 GC가 모든 객체를 방문하고 마킹하는데 소모되는 시간이 증가하여 실행 속도가 느려지게 된다. 이를 개선하기 위해 GC를 여러 부분으로 분리하여 각 부분을 별도로 수행하게 한다.

#### 유휴 시간 수집 (Idle-time Collection)
GC는 실행에 주는 영향을 최소화하기 위해 CPU가 유휴 상태일 때에만 가비지 컬렉션을 실행한다.

### Notes
- 저수준 프로그래밍에 익숙하다면 [V8 Garbage Collector](http://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection) 글을 읽어보자

## Reference
- [4.3 가비지 컬렉션](https://ko.javascript.info/garbage-collection)