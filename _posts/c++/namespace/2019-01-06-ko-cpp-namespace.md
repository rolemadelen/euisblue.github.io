---
layout: post
title: "[C++] 이름공간 (namespace)"
ref: cpp-namespace
date: 2019-01-06 14:11:00
categories: C++
lang: ko
---

## 목차
- [이름 공간](#namespace)
- [기본 구조](#structure)
- [활용](#usage)
  * [범위 지정자(::)](#scope)
  * [이름 공간의 중첩](#nested)
  * [_using_ 키워드](#using)
  * [별칭 (Alias)](#nickname)
- [Reference](#ref)
<hr />
<br />

## 이름 공간 <a id="namespace"></a>
이름공간(namespace)이란 고유의 이름을 가지고 있는 대상물들의 집합이다. 때문에 하나의 이름공간 안에는
같은 이름을 가진 대상물(변수, 함수, 객체, ... 등등)이 존재할 수 없다.

<br />
## 기본 구조 <a id="structure"></a>
이름공간의 구조는 접근 제어자(access modifier)가 없는 클래스의 구조와 똑같다.
```c++
namespace 이름
{
	변수 ...
	상수 ...
	함수 ...
	개체 ...
	namespace 다른이름
	{
		...
	}
}
```
namespace 키워드를 이용해 원하는 이름의 이름공간을 만들고, 몸통에는 변수, 상수, 함수, 개체, 
 ... 등등이 올 수 있고, 원한다면 이름공간안에 또 다른 이름공간을 선언 할 수도 있다.


<br />
## 활용 <a id="usage"></a>
이름공간의 여러 활용방법을 예제와 함께 설명한다.

### 범위 지정자(::) <a id="scope"></a>
범위지정 연산자(::)를 이용해 해당 이름공간에 접근한다. 
```c++
#include <iostream>

namespace UCSD
{
	const string UC = "University of California";
	void printName();
}

namespace UCLA
{
	void printName();
}

int main()
{
	UCSD::printName();
	UCLA::printName();

	return 0;
}

void UCSD::printName()
{
	std::cout << UC + ", San Diego" << std::endl;
}

void UCLA::printName()
{
	std::cout << UCSD::UC + ", Los Angeles" << std::endl;
}
```

 main에서 범위 지정자를 사용해 각각 `UCSD`와 `UCLA` 공간속에 있는 `printName()`을 호출했다.
 범위지정을 하지 않으면 어떤 `printName()`을 사용하는지 알 수 없어 오류가 발생한다.

 `UCSD`안에는 `UCLA`에는 없는 `UC`라는 상수 문자열이 존재한다.
 `UCSD`속 `printName()`의 구현을 보면 범위 지정자없이 `UC`를 가리키는데,
 같은 이름공간에 존재하기에 따로 범위를 지정해줄 필요가 없다.  
 하지만 반대로 다른 이름공간(`UCLA`)에서 `UC`를 가리키기 위해서는 범위를 지정해야만 접근이 가능하다.

### 이름 공간의 중첩 <a id="nested"></a>
이름공간안에 또 다른 이름공간을 선언 할 수 있다.

```c++
#include <iostream>

namespace University
{
	int num = 2;

	namespace UCSD
	{
		std::string name="University of California, San Diego";
	}

	namespace UCLA
	{
		std::string name="University of California, Los Angeles";
	}
}

int main()
{
	std::cout << University::num << std::endl;
	std::cout << University::UCSD::name << std::endl;
	std::cout << University::UCLA::name << std::endl;

	return 0;
}
```

### using <a id="using"></a>
이름공간속 변수, 함수, 등등에 접근 하기 위해 범위지정 연산자를 계속해서 사용해야 한다. 
하지만 자주 사용하는 대상의 경우 계속해서 범위를 지정하는게 번거로울 수 있다. 이 때 using을
사용하면 마치 로컬에서 선언한 것 마냥 대상에 접근할 수 가 있다.

```c++
#include <iostream>

using std::cout;
using std::endl;
using std::string;

namespace UCSD
{
	string name="University of California, San Diego";
	void printName()
	{
		cout << name << endl;
	}
}

int main()
{
	using UCSD::name;
	using UCSD::printName;

	cout << name << endl;
	printName();

	return 0;
}
```

위 예제에서는 이름 공간속에 존재하는 대상들을 하나하나 명시했지만, 
이름 공간 전체를 명시 할 수도 있다.

```c++
#include <iostream>

using namespace std;

namespace UCSD
{
	string name="University of California, San Diego";
	void printName()
	{
		cout << name << endl;
	}
}

int main()
{
	using namespace UCSD;

	cout << name << endl;
	printName();

	return 0;
}
```

### 별칭 (Alias)<a id="nickname"></a>
원하는 대상에 접근하기 까지의 범위 또는 단순히 공간의 이름이 길 경우, 이름공간에 
별칭을 부여 할 수 있다.

```c++
#include <iostream>

using std::cout;
using std::endl;

namespace University
{
	namespace UCSD
	{
		namespace College
		{
			namespace Warren
			{
				int num = 1;
			}

			namespace Sixth
			{
				int num = 2;
			}
		}
	}
}

int main()
{
	namespace College = University::UCSD::College;
	cout << College::Warren::num << endl;
	cout << College::Sixth::num << endl;

	return 0;
}
```

<br />
## Reference <a id="ref"></a>
- [wikidocs.net](https://wikidocs.net/14043)
