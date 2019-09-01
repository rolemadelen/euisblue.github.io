---
layout: post
title: "[C] Boolean type"
ref: c-boolean
date: 2018-10-30 17:53:00
categories: C
lang: en
---

Boolean data type is a data type that has two values: *true* and *false*. It is named after **George Boole** who first defined an algebraic system of logic.

C did not have keywords like `bool` or even `true` and `false` that exist in many other programming lanugages.
In order to *replicate* boolean, we had code something like this:

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

After C99 updates, several keywords were added and boolean type was one of them. Now we can declare boolean types using its own keyword: `_Bool`.

However, they created the keword for boolean but not `true` and `false. So we still need to declare macros for those values:
{% highlight c %}

#define TRUE 1
#define FALSE 0

_Bool bAlive = TRUE;

while(bAlive)
{
...
}
{% endhighlight %}

C99 introduces new library `stdbool.h`. <br />
If you don't have any legacy code that already uses a macro for boolean, it is safe to include `stdbool.h` and use `bool`, `true`, and `false` like other programming language.

{% highlight c %}
#include <stdbool.h>

bool bAlive = true;

while(bAlive)
{
...
}
{% endhighlight %}

The reason why I mentioned about the safeness above is because `stdbool.h` is really nothing but a macro. You don't want to include something that interferes with your macro.

The inside looks roughly like this:

{% highlight c %}
#ifndef _STDBOOL_H
#define _STDBOOL_H

#define bool        _Bool
#define true        1
#define false        0

#endif
{% endhighlight %}

A link to the full code of `stdbool.h` can be found below on the reference.

<br />
## Reference
- [stdbool.h](https://sites.uclouvain.be/SystInfo/usr/include/stdbool.h.html) <a id="stdbool"></a>
- [usage of new keywords in c99](https://www.daniweb.com/programming/software-development/threads/240998/usage-of-new-keywords-in-c99)<a id="usage"></a>
