---
layout: post
title:  "Modern JS 2.6-7: 자바스크립트 기본 #2"
date:   2021-01-05 07:00:00 +1400
category: JavaScript
permalink: /ko/modern-js/fundamental2/
lang: ko
---

alert, prompt, confirm 그리고 자료형의 묵시적/명시적 변환에 대해 알아본다.

## 2.6 alert, prompt, confirm

### alert

{% highlight js %}
alert('hello world');
{% endhighlight %}

위 코드를 실행하면 'hello world'라는 메세지를 보여주는 모달 창(modal window)이 뜬다.

### prompt

사용자가 입력할 수 있는 입력 필드와 확인 및 취소가 달린 모달 창을 띄운다.

{% highlight js %}
let name = prompt(message, [default]);
{% endhighlight %}

`prompt`는 두 개의 인자를 받는다. 

1. message → 사용자에게 보여줄 문자열
2. default → 초기 값

[default] 에서 대괄호는 이 인자가 필수가 아닌 선택값이라는 것을 의미.

{% highlight js %}
let name = prompt(message); // 잘 작동한다.
{% endhighlight %}

하지만 IE 에서는 초기값을 쓰지 않으면 `undefined`가 명시된다고 한다.

아래의 코드를 실행하고 '**Eubug**'를 입력하면 `name` 변수에는 문자열 "**Eubug**"가 저장된다.

{% highlight js %}
let name = prompt("당신의 이름은?", '이름을 입력해주세요');

console.log(name); // Eubug
{% endhighlight %}

### confirm

{% highlight js %}
confirm(question)
{% endhighlight %}

사용자가 질문(`question`)에 확인을 누르면 `true`, 그 외의 경우는 `false`를 반환하는 모달 창을 띄운다.

아래와 같이 사용할 수 있다.

{% highlight js %}
let is2Even = confirm("2는 짝수인가요?")

console.log(is2Even); // 확인을 눌렀으면 true 아니면 false
{% endhighlight %}

---

## 2.7 type conversion

### implicit conversion

묵시적 형변환 (implicit conversion) → 자동으로 변환이 이루어진다.

`alert`의 경우 전달받은 값이 무엇이든지 문자열로 자동 변환해서 모달 창에 출력한다.

{% highlight js %}
alert(123);
{% endhighlight %}

### explicit conversion

명시적 형 변환 (explicit conversion) → 의도를 가지고 직접 타입을 명시한다.

{% highlight js %}
// 명시적으로 숫자 123을 문자열로 변환.
let value = String(123);
typeof(value); // 'String'

// 문자열을 숫자로 변환.
value = Number("123");
typeof(value); // 'Number'
{% endhighlight %}

### 숫자형 변환

#### 묵시적

나누기 연산의 경우 자동으로 문자열을 숫자로 형변환하여 값을 계산한다.

{% highlight js %}
console.log("9" / "3"); // 3이 출력된다.
{% endhighlight %}

숫자인 문자열이 아닌, 모든 문자열이다. 그래서 아래와 같이 `'abc'`를 가지고도 일단 연산은 가능하다. 하지만 결과는 `NaN` (Not a Number)이 된다.

{% highlight js %}
console.log('abc' / '3'); // NaN / 3 -> NaN
{% endhighlight %}

#### 명시적

`Number(데이터)` 와 같이 형변환이 가능하다.

숫자형 변환 규칙

{% highlight js %}
Number(undefined); // NaN
Number(null);      // 0

Number(true);      // 1
Number(false);     // 0

Number('   ');     // 0 -> 공백이 제거되고 빈 문자열은 0
Number('  9 ');    // 9
Number('abc');     // NaN
{% endhighlight %}

### 불린형 변환

#### 묵시적

논리 연산을 수행할 때 자동으로 불린형 형변환이 일어난다.

{% highlight js %}
console.log(3 > 5);  // false
console.log(3 < 5);  // true
{% endhighlight %}

#### 명시적

`Boolean(데이터)` 와 같이 형변환이 가능하다.

불린형 변환 규칙

- `false` → 숫자 0, 빈 문자열, `NaN`, `undefined`
- `true` → 위 `false`에 해당하지 않는 모든 값

## 참조 링크
- 2.6: [https://ko.javascript.info/alert-prompt-confirm](https://ko.javascript.info/alert-prompt-confirm)
- 2.7: [https://ko.javascript.info/type-conversions](https://ko.javascript.info/type-conversions)