---
layout: post
title: "[C++] Namespace"
ref: cpp-namespace
date: 2019-01-06 14:11:00
categories: C++
lang: en
---

## Contents
- [Namespace](#namespace)
- [Basic Structure](#structure)
- [Usage](#usage)
  * [Scope Resolution Operator(::)](#scope)
  * [Nested Namespace](#nested)
  * [keyword _using_](#using)
  * [Alias](#nickname)
- [Reference](#ref)
<hr />
<br />

## Namespace <a id="namespace"></a>
I define _namespace_ as a group of unique named items; thus, no two items can have same name under
one same namespace.

<br />
## Basic Structure <a id="structure"></a>
The structure of a namespace is same as a class with no access modifier.

```c++
namespace Name
{
	vars ...
	const ...
	func ...
	obj ...
	namespace anotherName
	{
		...
	}
}
```
We can create a namespace with the name of your choice(_Name_) and can include any statements 
including declartion of another namespaces.

<br />
## Usage <a id="usage"></a>
Let's take a look at various examples and learn how to use namespaces in C++.

### Scope Resolution Operator(::) <a id="scope"></a>
We can use scope operator(::) to access a particular namespace.
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

In `main()`, we used scope operator to call `printName()` in both `UCSD` and `UCLA`.
We must use the scope opertor otherwise the compiler will throw an error since its not
obvious which `printName()` we're referring to.

We have a constant string `UC` inside the namespace `UCSD` but not in `UCLA`.
We can see that `UCSD::printName()` uses `UC` without the scope operator and this is allowed
since they're in the same namespace. For `UCLA::printName()`, however, scope operator must
be used since its on different namespace.

### Nested Namespace <a id="nested"></a>
We can declare another namespace within the namespace.

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

### keyword _using_ <a id="using"></a>
We can use the keyword `using` to make it easier for us to access certain items inside the 
namespace as if its declared locally (or globally).

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

We can also apply `using` on entrie namespace.

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

### Alias <a id="nickname"></a>
You may give new name to your long and complicated structure of a namespace.

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
