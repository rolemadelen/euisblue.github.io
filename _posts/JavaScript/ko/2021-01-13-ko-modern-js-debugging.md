---
layout: post
title:  "Modern JS 3.1: 디버깅"
date:   2021-01-13 07:00:00 +1400
category: JavaScript
permalink: /ko/modern-js/debugging/
lang: ko
---

컴퓨터가 집 한 채 만하던 시절, 컴퓨터에 오류가 나서 확인해보니 같이 [벌레](https://en.wikipedia.org/wiki/Debugging#/media/File:First_Computer_Bug,_1945.jpg)가 들어가 있었다. 여기서 유래한 것이 바로 현재 컴퓨터나 게임 등의 오류를 의미하는 버그(bug)이다. 

그리고 이 버그를 해결해가는 과정을 디버깅(debugging) 이라고 한다. 

### debugger 명령어
자바스크립트 코드에서 `debugger` 명령어를 사용해서 직접 중단점(break point)을 설정할 수 있다.

{% highlight js %}
function hello(name) 
{
	let phrase = `Hello, ${name}!`;
	debugger; // <-- 중단점과 같은 역할을 한다.
	hello('Eubug');
}
{% endhighlight %}

### 멈추면 보이는 것들

중단점을 설정하고 프로그램이 멈췄을 때, 비로소 디버깅 영역에 있는 기능들을 사용 할 수 있다.

1. **Watch** - 변수의 값들을 확인 할 수 있고 표현식도 확인이 가능하다.
2. **Call Stack** - 프로그램이 어디서 부터 시작해서 해당 중단점까지 왔는지, 경로를 역순으로 보여준다.
3. **Scope** - 현재 정의된 모든 변수들을 지역변수와 전역변수로 구분해서 보여준다. 

위 기능 외에도 해당 중단점에서 다음줄의 코드를 실행하거나, 다음 함수 또는 다음 중단점을 만날때까지 실행 하거나, 하는 기능도 존재한다.

## 참조
- [3.1 Chrome으로 디버깅하기](https://ko.javascript.info/debugging-chrome)