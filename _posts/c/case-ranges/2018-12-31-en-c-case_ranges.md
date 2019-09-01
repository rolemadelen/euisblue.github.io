---
layout: post
title: "[C] Set ranges in switch-case statement"
ref: c-case-ranges
date: 2018-12-31 23:32:00
categories: C
lang: en
---

## Contents
- [Switch Statement](#switch)
- [Case Ranges](#case)
	* [syntax](#syntax)
	* [example](#ex)
- [Reference](#ref)

<hr />
<br />

## Switch Statement <a id="switch"></a>
Switch statement is used to check on a _single variable_, and its often faster<sup>[1,2](#switch-ifelse)</sup> than nested `if-else` statements (not always). 

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

Because of this characteristic, `switch` was out of the way when dealing with ranges of numbers.
For example, let say we want to print **A** for 90~100, **B** for 80~90, and so on..
With `switch` we have to do it this way:
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

However, GCC complier supports [_Case Ranges_](https://gcc.gnu.org/onlinedocs/gcc/Case-Ranges.html#Case-Ranges)	as a language extension<sup>[3](#case-ranges)</sup>, so you can set ranges in case labels.


<br />
## Case ranges <a id="case"></a>
Note that this is **NOT** C standard. It is an extension provided by the *language exetension* 
supported by the GCC compiler.

### Syntax
```c
case: low ... high:
	// code
	break;
```
You must separate `low` and `high` from `...` with one space otherwise it will be parsed wrong and
throw out an error.

If you flip `low` and `high`, you'll get **empty range specified** warning.

### Example <a id="ex"></a>
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
