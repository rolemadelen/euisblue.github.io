## 3.1 Chrome으로 디버깅하기

컴퓨터가 집 한 채 만하던 시절, 컴퓨터 오류가 나서 확인해보니 오른쪽 사진과 같이 벌레가 들어가 있었다. 여기서 유래한 것이 바로 현재 컴퓨터나 게임 등의 오류를 의미하는 버그(bug)이다.

그리고 이 버그를 해결해가는 과정을 디버깅(debugging) 이라고 한다.

크롬 브라우저에서 `F12` (MacOS는 `cmd + Opt + I`)를 누르면 개발자 도구가 열린다. 여러가지 탭(panel)들이 존재하는데 하나하나 살펴보자.

사용하는 크롬 버전에 따라 화면이 약간의 차이가 있을 수 있지만 기본적인 구성은 똑같다.

![images](https://eubug.space/_next/image?url=https%3A%2F%2Fapi.super.so%2Fasset%2Feubug.space%2Fabbc96e6-3ae5-463b-a414-64e154d8a96e.png&w=828&q=100)

*A computer log entry from the Mark II, with a moth taped to the page (source: [Wikipedia](https://en.wikipedia.org/wiki/Debugging)).*

### 콘솔 (console)

console탭을 클릭하면 콘솔 창이 열린다. 자바스크립트 코드를 실행해 볼 수 있다.

![console image](https://eubug.space/_next/image?url=https%3A%2F%2Fapi.super.so%2Fasset%2Feubug.space%2Fca3ce2c7-5ff7-4958-98f6-de9a5b7e21db.png&w=3840&q=100)

### 소스 (source)

소스탭은 기본적으로 세 개의 영역으로 구성이 되어있다.

![console src tab](https://eubug.space/_next/image?url=https%3A%2F%2Fapi.super.so%2Fasset%2Feubug.space%2F66ecc49d-4c94-4cb2-8445-c0c802906e41.png&w=3840&q=100)

1.  **파일 탐색 영역** - 페이지를 구성하는데 사용된 모든 리소스(HTML, JS, CSS, 이미지 파일 등등)를 볼 수 있다.
2.  **코드 에디터 영역** - 파일 탐색 영역에서 선택 한 파일의 코드를 확인 할 수 있다.
3.  **자바스크립트 디버깅 영역** - 디버깅에 관련된 기능을 제공한다.

참고로 사파리(Safari) 브라우저의 경우는 아래와 같이 되어있다. 구성이 약간 다르기는 하지만, 영역은 비슷하게 구분되어 있다.

![console src tab 2](https://eubug.space/_next/image?url=https%3A%2F%2Fapi.super.so%2Fasset%2Feubug.space%2F342207bd-792a-45e9-998b-74fef9c7a21d.png&w=3840&q=100)

### breakpoint

중단점(breakpoint)을 설정하고 프로그램을 실행하면, 자바스크립트의 실행이 해당 중단점이 있는 곳에서 중단됩니다.

중단 된 곳에서 다음 코드를 하나하나 실행 할 수 있고, 해당 위치에서 변수들의 값도 확인 할 수 있습니다.

![breakpoint](https://eubug.space/_next/image?url=https%3A%2F%2Fapi.super.so%2Fasset%2Feubug.space%2F1cfdd456-7f4c-48ac-aa9b-6cc108292682.png&w=1920&q=100)

코드 영역에서 라인넘버를 클릭하면 파란색 중단점이 설정된 것을 확인 할 수 있고, 디버깅 영역에 Breakpoints(중단점) 부분에 중단점이 설정된 라인의 코드를 확인 할 수 있다. 또한 해당 코드를 클릭하면 중단점이 설정된 곳으로 자동 이동한다.

참고로 특정한 경우에만 중단점이 실행되도록 하고 싶다면, 코드의 라인줄에서 오른쪽 클릭을 하면 조건부 중단점(conditional breakpoint)을 설정 할 수 있다.

### debugger keyword

위와 같은 경우는 개발자 도구를 열어서 일일이 중단점을 설정해 줘야 하는 불편함이 있다. 자바스크립트 코드에서 직접 설정 할 수 있는 방법이 있다. 바로 `debugger` 명령어를 사용하면 된다.

```jsx
function hello(name) 
{
	let phrase = `Hello, ${name}!`;

	debugger; // <-- 중단점과 같은 역할을 한다.

	hello('Eubug');
}
```

### debugging

중단점을 설정하고 프로그램이 멈췄을 때, 비로소 디버깅 영역에 있는 기능들을 사용 할 수 있다.

1.  **Watch** - 변수의 값들을 확인 할 수 있고 표현식도 확인이 가능하다.
2.  **Call Stack** - 프로그램이 어디서 부터 시작해서 해당 중단점까지 왔는지, 경로를 역순으로 보여준다.
3.  **Scope** - 현재 정의된 모든 변수들을 지역변수와 전역변수로 구분해서 보여준다.

위 기능 외에도 해당 중단점에서 다음줄의 코드를 실행하거나, 다음 함수 또는 다음 중단점을 만날때까지 실행 하거나, 하는 기능도 존재한다.

## Reference
- [3.1 Chrome으로 디버깅하기](https://ko.javascript.info/debugging-chrome)