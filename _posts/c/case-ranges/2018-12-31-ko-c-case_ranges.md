---
layout: post
title: "[C] switch문 case 범위 지정"
ref: c-case-ranges
date: 2018-12-31 23:32:00
categories: C
lang: ko
---

## 목차
- [Switch 문](#switch)
- [Case 범위 지정](#case)
	* [문법](#syntax)
	* [예제](#ex)
- [Reference](#ref)

<hr />
<br />
## Switch문 <a id="switch"></a>
Switch문은 여러개의 case들로 이루어져 있으며 각 case는 오직 하나의 경우/값만을 담당한다.
또한 switch문의 처리속도는 대체적으로 `if-else`문 보다 빠르다고 한다<sup>[1,2](#switch-ifelse)</sup>.

```c
int n = 5;
switch(n)
{
	case 1:
		expression;
		break;
	case 5: 
		expression:
		break;
	default: 
		expression;
}
```

오직 하나의 경우만 검사가 가능한 switch문의 특징때문에, 범위를 검사할때는 사용되지 않는다.
예를들어 시험 성적의 점수를 입력받고 90 ~ 100은 **A**, 80 ~ 90은 **B**, ... 의 
점수를 주는 프로그래음 작성한다고 할 때, switch문을 사용하면 아래와 같은 비효율적인 방법을
사용해야 한다.

```c
int score = 79;
char grade = '';

switch(score)
{
	case 100: 
		grade = 'A';
		break;
	case 99: 
		grade = 'A';
		break;
	case 98: 
		grade = 'A';
		break;
	...
	...
	case 80:
		grade = 'B';
		break;
	case 79:
		grade = 'C';
		break;
	...
	...
	case 60:
		grade = 'D';
		break;
	default:
		grade = 'F';
}

```

하지만 GCC 컴파일러가 언어 확장<sup>[3](#case-ranges)</sup>의 일환으로 제공하는 [_Case Ranges_](https://gcc.gnu.org/onlinedocs/gcc/Case-Ranges.html#Case-Ranges)를 사용하면 case에 범위를 지정할 수 있다.


<br />
## Case 범위 지정 <a id="case"></a>
Case의 범위지정은 C의 표준이 아니라 컴파일러가 제공한다는 것을 유념하도록 하자.

### 문법 <a id="syntax"></a>
```c
case: low ... high:
	// code
	break;
```
범위를 지정할 때 `low`와 `high` 앞뒤로 꼭 공백이 한 칸 존재해야 한다. 공백이 없으면 
파싱이 제대로 되지 않아 오류가 발생한다. 또한 범위는 항상 낮은 쪽에서 높은 쪽으로 
지정을 하기 때문에 `high ... low`를 할 경우, **빈 범위를 지정했다**는 경고가 발생한다.

### 예제 <a id="ex"></a>
```c
int score = 79;
char grade = '';

switch(score)
{
	case 90 ... 100:
		grade = 'A';
		break;
	case 80 ... 89:
		grade = 'B';
		break;
	case 70 ... 79:
		grade = 'C';
		break;
	case 60 ... 69:
		grade = 'D';
		break;
	default:
		grade = 'F';
}
```

<br />
## Reference <a id="ref"></a>
1. [stackoverflow : if-else vs. switch](https://stackoverflow.com/questions/395618/is-there-any-significant-difference-between-using-if-else-and-switch-case-in-c)<a id="switch-ifelse"></a>
3. [stackoverflow : switch case ranges](https://stackoverflow.com/questions/36748934/how-can-i-use-ranges-in-a-switch-case-statement-in-c)<a id="case-ranges"></a>
2. [geeksforgeeks : switch vs. else](https://www.geeksforgeeks.org/switch-vs-else/)
