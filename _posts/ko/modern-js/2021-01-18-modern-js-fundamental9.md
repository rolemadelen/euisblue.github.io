---
layout: post
title:  "모던 자바스크립트 3.5 - 3.6"
subtitle: "코드 품질: 테스트 자동화와 Mocha • 폴리필"
date:   2021-01-18 07:00:00 +1400
author: "Jeyeyeu"
header-img: "img/post-bg-js.jpg"
header-mask: 0.5
catalog: true
hidden: false
lang: ko
permalink: /ko/modern-js/fundamental9/
tags:
  - javascript
  - modern js 
---

## 3.5 테스트 자동화와 Mocha

### 테스트 자동화?

테스트는 왜 하는 걸까?

예를들어 제곱함수인 `pow(x, n)`를 작성하고 있다고 해보자.

실행 결과가 기대한 결과와 다를 때, 매개변수의 값을 확인하고, 함수의 코드를 수정하고 재실행해서 다시 확인하는 작업이 이루어진다. 예를들어 `pow(2, 2)`가 잘 작동하고 `pow(2, 3)`이 실패했다면, 이 숫자와 관련되서 코드가 잘 작동하도록 고칠 것이다. 그러면 끝난건가? 아니다. `pow(2, 2)`에서도 잘 작동하는지 다시 확인해야 하는데 이 과정을 빠트리게 되는 경우가 많다.

그렇기 때문에 테스팅 자동화를 하면, 개발자가 매번 코드를 수정할 때 마다 테스트 케이스를 하나하나 실행 해 볼 필요가 없다.

### Behavior Driven Development (BDD)

BDD는 '행위 주도 개발'이라고 해석할 수 있다. BDD는 TDD의 개념이 포함된 것이기 때문에 얼핏보면 서로 비슷해 보인다.

하지만 BDD는 TDD에서 한 발 나아가, 행동 하나하나를 작은 단위로 쪼개어 테스트 케이스를 작성하는 것이 아닌, 시나리오 단위로 테스트 케이스를 작성하며, 각 시나리오는 기본적인 패턴으로 Given, When, Then의 구조를 가진다.

```jsx
describe("pow", function() { // Given

  it("주어진 숫자의 n 제곱", function() { // When
    assert.equal(pow(2, 3), 8); // Then
  });

});
```

-   Given: 시나리오 진행에 필요한 값을 설정. 예시에서는 함수 `pow` 가 어떤 동작을 하는지 설명.
-   When: 시나리오 진행에 필요한 조건을 명시. 누구나 이해할 수 있는 자연어로 설명.
-   Then: 시나리오를 완료했을 때 보장해야 하는 결과를 명시.

### 테스트 프레임워크

-   [Mocha](https://mochajs.org): `describe` `it`과 같은 테스팅 함수와 테스트 실행 관련 주요 함수를 제공한다.
    -   [Karma](https://karma-runner.github.io/latest/index.html)라는 고수준의 테스트 러너(test-runner)를 사용하면 다양한 종류의 테스트를 자동으로 실행할 수 있다.
-   [Chai](https://www.chaijs.com): 다양한 assertion을 제공하는 라이브러리.

### 예제

index.html

```html
<!DOCTYPE html>
<html>
<head>
  <!-- 결과 출력에 사용되는 mocha css를 불러옵니다. -->
  <link rel="stylesheet" href="<https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css>">
  <!-- Mocha 프레임워크 코드를 불러옵니다. -->
  <script src="<https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js>"></script>
  <script>
    mocha.setup('bdd'); // 기본 셋업
  </script>
  <!-- chai를 불러옵니다 -->
  <script src="<https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js>"></script>
  <script>
    // chai의 다양한 기능 중, assert를 전역에 선언합니다.
    let assert = chai.assert;
  </script>
</head>

<body>

  <script>
    function pow(x, n) {
      let val = x;
			for (let i = 2; i<=n; ++i) {
				val *= x;
			}
	
			return x;
    }
  </script>

  <!-- 테스트(describe, it...)가 있는 스크립트를 불러옵니다. -->
  <script src="test.js"></script>

  <!-- 테스트 결과를 id가 "mocha"인 요소에 출력하도록 합니다.-->
  <div id="mocha"></div>

  <!-- 테스트를 실행합니다! -->
  <script>
    mocha.run();
  </script>
</body>

</html>
```

test.js

```js
describe("pow", function() {

  describe("x를 세 번 곱합니다.", function() {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("x를 5번 곱합니다.", function() {
    function makeTest(x) {
      let expected = x * x * x * x * x;
      it(`${x}을/를 5번 곱하면 ${expected}입니다.`, function() {
        assert.equal(pow(x, 5), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

});
```

## 3.6 폴리필

JS는 끊임없이 진화하는 언어이다. 새로운 제안(proposal)이 정기적으로 등록, 분석되고, 가치가 있다고 판단되는 제안은 [](https://tc39.es/ecma262/)[https://tc39.es/ecma262/](https://tc39.es/ecma262/) 에 추가된다. 그리고 궁극적으로 [요구사양(specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/))에 등록된다.

엔진별로 어떤 기능을 지원하는지 확인이 가능하다 → [](https://kangax.github.io/compat-table/es6/)[https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

### 바벨

새로 추가된 기능을 사용하는 경우, 구 버전의 브라우저에서 지원하지 않을 수 있다. 이럴 때 바벨을 사용할 수 있다.

바벨의 주요 역할:

-   바벨은 트랜스파일러 (transpiler)로 모던 자바스크립트 코드를 구 표준을 준수하는 코드로 바꿔준다.
    
-   폴리필
    
    변경된 표준을 준수할 수 있게 기존 함수의 동작 방식을 수정하거나, 새롭게 구현한 함수의 스크립트를 '**폴리필 (polyfill)**' 이라고 한다. 이름 그대로 구현이 누락된 새로운 기능을 매꿔주는 역할을 한다.
	
## Reference
- [3.5 테스트 자동화와 Mocha](https://ko.javascript.info/testing-mocha)
- [3.6 폴리필](https://ko.javascript.info/polyfills)