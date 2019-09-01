---
layout: post
title: "[C] 불(Boolean) 자료형"
ref: c-boolean
date: 2018-10-30 17:53:00
categories: C
lang: ko
---

불(Boolean) 자료형은 *참*(1)과 *거짓*(0)을 나타내는 논리 자료형으로, 단 두 개의 값 만을 나타낸다. 
이 자료형의 이름인 _불_ 은 영국의 논리학자/수학자인 _조지 불 (George Boole)_ 의 이름에서 유래했으며, 간혹 왜 불리언이 아닌 불이라고 하는 사람들이 있는데, 이는 _Boole + an_ 으로 _불의 연산라_ 라는 의미이다. 고로 한국어로는 불 연산자(Bool Operator)라고 부르는게 맞다.

C에는 다른 대부분의 언어와 다르게 `bool`이라는 키워드가 따로 존재하지 않으며 참과 거짓을 나타내는 `true`와 `false`조차 없다.
그렇기에 불 자료형을 사용하기 위해서는 대강 아래와 같은 매크로를 직접 지정해서 사용해야 한다.

{% highlight c %}

typedef int bool;

#define TRUE 1
#define FALSE 0

bool bAlive = TRUE;

while(bAlive)
{
...
}
{% endhighlight %}

하지만 C99 업데이트 이후 여러개의 키워드가 새로 추가되었는데, 불 자료형이 그 중 하나다.<br/>
이 자료형을 사용하기 위해서는 변수 명 앞에 `_Bool`을 추가하면 된다.

개인적으로 이해가 안가는 부분이 있는데, 
불 자료형의 키워드는 만들었으면서 왜 `true`와 `false`는 추가하지 않았냐는 것이다. <br />
그렇기 때문에 여전히 아래와 같이 매크로를 지정해서 사용한다.

```c
#define TRUE 1
#define FALSE 0

_Bool bAlive = TRUE;

while(bAlive)
{
...
}
```

위와 같은 문제에 싫증이 난걸까?
사실 C99 이후부터 `stdbool.h`라는 헤더파일을 제공하기는 한다. <br />

`bool`, `true`, 그리고 `false`가 이미 매크로로 지정되어 있는 아주 오래된 코드를 유지보수하는 입장이 아니라면, `stdbool.h` 헤더파일을 추가해 `_Bool` 대신 `bool`, 그리고 참과 거짓을 나타내는 `true`와 `false`를 안전하게 사용할 수 있다.

```c
#include <stdbool.h>

bool bAlive = true;

while(bAlive)
{
...
}
```

위에서 안전하게 사용할 수 있다라고 한 의미는 `stdbool.h` 헤더파일이 사실 매크로이기 때문이다. 그렇기 때문에 매크로의 중복을 피하기 위해서 오래된 코드에서는 사용하지 않는게 좋다.

헤더파일 안을 살펴보면 대략 이런 모양이다:

```c
#ifndef _STDBOOL_H
#define _STDBOOL_H

#define bool        _Bool
#define true        1
#define false        0

#endif
```

`stdbool.h` 헤더파일의 전체 코드의 링크는 아래 Reference에서 확인할 수 있다.

<br />
## Reference
- [stdbool.h](https://sites.uclouvain.be/SystInfo/usr/include/stdbool.h.html) <a id="stdbool"></a>
- [usage of new keywords in c99](https://www.daniweb.com/programming/software-development/threads/240998/usage-of-new-keywords-in-c99)<a id="usage"></a>
