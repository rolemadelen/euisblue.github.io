---
layout: post
title:  "모던 자바스크립트 3.2 - 3.4"
subtitle: "코드 품질: 코딩 스타일 • 주석 • 닌자 코드"
date:   2021-01-17 07:00:00 +1400
author: "Jeyeyeu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
hidden: false
lang: ko
permalink: /ko/modern-js/fundamental8/
tags:
  - javascript
  - modern js 
---

## 3.2 코딩 스타일

코딩 스타일에 관한 얘기와 스타일 가이드에 대해서 설명을 한다.

반 년 후에 내가 작성한 코드를 봤을 때 바로 이해할 수 있도록 간결하되 복잡하지 않은 (이런저런 트릭을 사용 한 한 줄 코드..등을 사용하지 않은) 코드로 작성하는 것이 중요하다. 좋은 코드 스타일이란 깔끔한 코드를 사용할 수 있도록 도움을 준다.

코딩 스타일은 사람마다, 팀 따라 스타일 가이드가 다를 수 있기 때문에 절대적인 건 없다.

코딩 스타일에 대해 얘기 할 때 자주 언급 되는 것들만 살짝 살펴보자.

### 괄호

대표적으로 두 가지 방법의 스타일이 있다.

1.  같은 줄에 시작
    ```js
    function foo() {
        if (...) {
            // code
        } else if (...) {
            // code
        } else {
            // code
        }
    }
    ```
    
2.  새로운 줄에 시작
    ```js
    function foo() {
        if (...) {
            // code
        } else if (...) {
            // code
        } else {
            // code
        }
    }
    ```

JavaScript의 경우 공식 문서를 봐도 그렇고 1번의 방법을 사용하고 있는 것 같다. 내가 참고하는 [구글의 자바스크립트 코딩 스타일 가이드](https://google.github.io/styleguide/jsguide.html) 역시 이 방법을 사용하고 있기 때문에 나 역시 1번 스타일을 사용하고 있다.

### 들여쓰기

-   공백 2칸 또는 4칸
    
-   스페이스(space) vs. 탭(tab)
    
    → vim을 쓰면 탭의 거리를 4칸에서 2칸 또는 그 반대로 줄이거나 늘릴 수 있고, 탭을 자동으로 스페이스로 바꿔주는 것도 있어서 뭘 쓰든 상관은 없다. 나는 주로 탭 키를 사용한다.
    
    → 스페이스의 경우 탭 보다는 유연하다.
    

### 함수의 위치

함수들을 한 곳에 모아놓으면, 가독성을 높일 수 있다고 한다. 상단과 하단, 어느쪽에 위치시키는게 좋을까?

1.  함수들을 상단에 모두 선언.
    ```jsx
    // 함수 선언
    function createElement() {
      ...
    }
    
    function setHandler(elem) {
      ...
    }
    
    function walkAround() {
      ...
    }
    
    // 헬퍼 함수를 사용하는 코드
    let elem = createElement();
    setHandler(elem);
    walkAround();
    ```
    
2.  함수들을 하단에 모두 선언.
    
    ```jsx
    // 헬퍼 함수를 사용하는 코드
    let elem = createElement();
    setHandler(elem);
    walkAround();
    
    // --- 헬퍼 함수 ---
    function createElement() {
      ...
    }
    
    function setHandler(elem) {
      ...
    }
    
    function walkAround() {
      ...
    }
    ```
    

두 번째 방법을 선호한다고 하는데, 내 코드를 살펴보니 필자는 첫 번째 방법을 애용하고 있다.

### 스타일 가이드

스타일 가이드는 "코드를 어떻게 작성할지"에 대한 전반적인 규칙을 담은 문서이다. 팀원들이 모여 직접 스타일 가이드를 만드는 방법도 있지만, 이미 작성된 가이드 중 하나를 택해서 사용하는 편이다.

-   [Google 자바스크립트 스타일 가이드](https://google.github.io/styleguide/jsguide.html)
-   [Airbnb 자바스크립트 스타일 가이드](https://github.com/airbnb/javascript#functions)
-   [JavaScript Standard Style](https://standardjs.com/rules.html) ... 등등

### Linter

내가 작성한 코드가 스타일 가이드를 준수하고 있는지 확인해주는 일종의 문법 검사기이다.

유명한 Linter로는 아래의 세 가지가 있다:

1.  역사가 오래된 [JSLint.](http://www.jslint.com)
2.  JSLint보다 세팅이 유연한 [JSHint](https://jshint.com).
3.  가장 최근에 나온 [ESLint](https://eslint.org).

Linter는 플러그인 형태로 존재하기 때문에 사용하는 에디터와 결합해서 사용할 수 있다고 한다 (요즘 에디터는 거의 대부분 linter 플러그인을 지원한다고 한다).

### VS Code + ESLinter

VScode에 ESLint를 설정하는 방법은 아래 링크의 글을 확인:

[](https://www.notion.so/3-2-JavaScript-2-34b9b3db549e40ff8fde055ac61eedd9#37ddff1cde6f4297809f34dbef014385)[https://www.notion.so/3-2-JavaScript-2-34b9b3db549e40ff8fde055ac61eedd9#37ddff1cde6f4297809f34dbef014385](https://www.notion.so/3-2-JavaScript-2-34b9b3db549e40ff8fde055ac61eedd9#37ddff1cde6f4297809f34dbef014385)


## 3.3 주석

### 필요한 주석인가?

코드가 깔끔하고 이해하기 쉬울수록 주석이 거의 없다. 깔끔한 코드 그 자체로 주석의 역할을 하기 때문에 굳이 주석을 달 필요가 없는 것이다. 만약 본인 코드에 주석이 많다면 정말로 필요한 주석인지, 코드를 다시 작성해야 하는지 잘 생각해보자.

### 좋은 주석이란?

**I. 아키텍처를 설명하는 주석.**

**II. 함수의 설명과 매개변수 정보를 담고 있는 주석.**

```jsx
/**
 * x를 n번 곱한 수를 반환함
 *
 * @param {number} x 거듭제곱할 숫자
 * @param {number} n 곱할 횟수, 반드시 자연수여야 함
 * @return {number} x의 n 거듭제곱을 반환함
 */
function pow(x, n) {
  ...
}
```

위 코드는 [JSDocs](https://github.com/jsdoc/jsdoc) 라는 특별한 문법으로, 해당 함수의 관한 문서를 쉽게 만들 수 있다. JSDoc의 관한 자세한 정보는 [공식 문서](https://jsdoc.app)를 참조.

**III. 문제 해결에 사용된 기술을 사용한 이유에 대한 설명.**

1.  6개월 전 당신이 작성한 코드를 살펴 보면서 어떤 문제를 '가장 좋은 방식이 아닌 방법' 으로 해결한 것을 발견. 하지만 주석이 없어서 내가 왜 이 방식을 했는지 기억이 안난다.
2.  '아 내가 실력이 부족했구나..' 하고 당신이 알고있는 가장 좋은 방식으로 코드를 리팩토링.
3.  리팩토링하고 컴파일이 되지 않는다는 것을 발견.
4.  "아 이래서 내가 이 방식을 사용했구나" 하고 코드를 되돌렸지만 이미 시간은 낭비했음.

**VI. 미묘한 기능이 있고, 이 기능이 어디에 쓰이는지를 설명하는 주석.**

트릭이라던가, 자주 쓰이지 않는 기능을 사용한 코드의 경우 직감적으로 이해가 가지 않을 수 있다. 이럴 때 주석을 남겨두면 이해하기 편하다.

## 3.4 닌자 코드

유지보수 불가능하게 만들어 나를 해고할 수 없게 만드는 방법.

### 1. 코드 짧게 쓰기

변수는 무조건 한 글자. 조건문은 무조건 삼항연산자를 사용하자.

```jsx
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
```

### 2. 약어 사용 + 포괄적인 명사 사용하기

```jsx
dat = 'bug'
dat1 = 'Eu'
dat2 = dat + dat1
val = dat2
```

### 3. 철자가 유사한 단어 사용하기

```jsx
doesExist = false; // 존재하는가?
doseExist = true;  // 정량(dose)이 존재하는가?
```

### 4. 동의어 사용하기

다 같은 동작을 하는 코드지만, 코드가 길어 보이게 이름만 동의어로 바꿔서 작성하자. 그리고 중간에 정말로 다른 동작을 하는 함수를 끼어넣자.

```jsx
let val = 'hello';
show() { alert(val); }
display() { alert(val); }
print() { return val; }
printText() { console.log(val); }
printPage() { /* 프린터에서 프린트 */ }
```

### 5. 이름 재사용 하기

_와 이건 진짜 나빴다...🥵_

```jsx
function ninjaFunction(elem) {
  // 매개변수로 받아온 elem을 이용한 코드

  elem = clone(elem);

  // elem의 복제(clone)본을 이용한 코드
}
```

### 6. 재미로 언더스코어 사용하기

```jsx
_ = 3;
___ = 5;
function _2(_, __) { return (_ ?? __) + (__ ?? _); }

_2(_, __); // 결과는?
```

### 7. 과장 형용사 사용하기

`superman` `gentleman` 등등 아무 수식어를 갖다 붙여서 개발자들이 "superman이랑 gentleman 뭐가 다른거지?"하고 분석하도록 만들자. 사실은 둘 다 그냥 `man`인데 말이다.

### 8. 외부 변수 덮어쓰기

```jsx
let user = authenticateUser();

function render() {
  let user = anotherValue();
  ...
  ...함수 길이가 긺...
  ...
  ... // <-- 개발자는 user와 관련된 이 부분의 코드를 수정해야 함
  ...
}
```

### 9. 부작용이 있는 코드 작성하기

```jsx
let user = someUser();
let value = someValue();

function isEven(value1) {
    value = value1 % 2
    user = someFunction();
    return value;
}
```

### 10. 함수에 다양한 기능 넣기

함수명을 보고 "아 이 동작을 하는 함수구나" 하고 믿게 만들고 이것저것 하는 기능을 다 넣어버리자.

### 11. 함수 이름 반대로 짓기

함수 이름은 `isOdd`로 홀수를 판별하는 것 같은 함수를 선언하고 실제로는 짝수를 판별하는 코드를 작성하자.

```jsx
function isOdd(n) {
    return (n % 2) == 0; 
}

function isEven(n) {
    return (n % 2) == 1;
}
```

## Reference
- [3.2 코딩 스타일](https://ko.javascript.info/coding-style)
- [3.3 주석](https://ko.javascript.info/comments)
- [3.4 닌자 코드](https://ko.javascript.info/ninja-code)