---
layout: post
title:  "Basic Ruby: Here Document"
date:   2021-01-28 07:00:00 +1400
category: Ruby
permalink: /ruby-basic/here-document
lang: en
---

`<<` operator is followed by an identifier that marks the end of the here document. The end mark is called the terminator.

{% highlight ruby %}
puts <<GROCERY_LIST
Grocery List
_____________
1. Salad mix
2. Strawberris.*
3. Cereal.
4. Milk.*

* Organic
GROCERY_LIST
{% endhighlight %}

result:

{% highlight shell %}
Grocery List
_____________
1. Salad mix
2. Strawberris.*
3. Cereal.
4. Milk.*

* Organic
{% endhighlight %}

We can pass multiple arguments to `puts`. The string literal created from the here-document is inserted into the argument list wherever the `<<` operator appears.

In the code below, the here-document is passed in as the 3rd argument. We get the same output as above.

{% highlight ruby %}
puts 'Grocery list', '------------', <<GROCERY_LIST, '* Organic'
1. Salad mix.
2. Strawberries.*
3. Cereal.
4. Milk.*

GROCERY_LIST
{% endhighlight %}

## Multiple here documents

{% highlight ruby %}
puts 'Computer Language', '-------------', <<COMPLANG, "\\nLanguage", '------------', <<LANGUAGE
1. C/C++
2. Ruby
3. JavaScript
COMPLANG
1. English
2. Korean
3. Japanese
LANGUAGE
{% endhighlight %}

result:

{% highlight shell %}
Computer Language
-------------
1. C/C++
2. Ruby
3. JavaScript

Language
------------
1. English
2. Korean
3. Japanese
{% endhighlight %}

## Indenting

Any spaces or indents will be preserved inside the here document, but there must not be any spaces before the terminator.

{% highlight ruby %}
puts 'Computer Language', '-------------', <<COMPLANG, "\\nLanguage", '------------', <<LANGUAGE
  1. C/C++
  2. Ruby
  3. JavaScript
COMPLANG
  1. English
   2. Korean
    3. Japanese
LANGUAGE
{% endhighlight %}

result:

{% highlight shell %}
Computer Language
-------------
  1. C/C++
  2. Ruby
  3. JavaScript

Language
------------
  1. English
   2. Korean
    3. Japanese
{% endhighlight %}

### indent the terminator

If for  any reason you want to indent the terminator, use `<<-` operator.

## Quoting rules

### double-quoting rules

When no quotes are around the identifier, then the here document follows the double quoting rules. You can apply every rules that applies to the double quote string.

You can also explicitly put double quotes around the identifier but it's not recommended.

### single-quoting rules

To apply single quoting rules to the here document, place single quotes around the identifier.

{% highlight ruby %}
puts <<'FOOD_LIST'
1. Hamburger
2. Kimchi
3. Takoyaki
FOOD_LIST
{% endhighlight %}

## Reference
- [Ruby Programming/Here documents](https://en.wikibooks.org/wiki/Ruby_Programming/Here_documents)