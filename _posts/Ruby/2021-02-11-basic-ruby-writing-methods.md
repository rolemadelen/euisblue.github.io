---
layout: post
title:  "Basic Ruby: Writing methods"
date:   2021-02-11 07:00:00 +1400
category: Ruby
permalink: /ruby-basic/writing-methods
lang: en
---

Method definintion:
A method starts with the `def` keyword and ended with the `end`.

{% highlight ruby %}
def myMethod
    # something
end
{% endhighlight %}

You can define a method that takes parameters by providing its name of the variable in parentheses after the method name.

{% highlight ruby %}
def myMethod(arg1, arg2, ..., argN)
    puts arg1;
    puts arg2;
end
{% endhighlight %}

## Invoking methods

You can invoke methods with or without parentheses but it's a good practice to put parentheses to differentiate it from other variables.

{% highlight ruby %}
def add(a, b)
    puts a + b
end

add(1, 2) # 3
add 1, 2  # 3
add("abc", "xyz") # abcxyz
{% endhighlight %}

## Default values

We can assign a default value in the definition.

{% highlight ruby %}
def myMethod(message="This is a default value")
    puts message
end
	
myMethod();
myMethod("Where has the default value gone?");
{% endhighlight %}

## Returning values

You can return a value from the method using `return`.

{% highlight ruby %}
def myMethod
    return "Return!"
end

puts myMethod # Return!
{% endhighlight %}

But the below code will work too:

{% highlight ruby %}
def myMethod
    "This also works!!"
end

puts myMethod # This also works!!
{% endhighlight %}

The reason for this is that Ruby always returns the last evaluated statement.

## Reference
-  [Ruby Programming/Writing methods](https://en.wikibooks.org/wiki/Ruby_Programming/Writing_methods)
