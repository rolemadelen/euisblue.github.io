---
layout: post
title:  "Basic Ruby: Strings & Alternate Quotes"
date:   2021-01-27 07:00:00 +1400
category: Ruby
permalink: /ruby-basic/strings-and-alternate-quotes
lang: en
---

We can create a string literal using single or double quotes.

{% highlight ruby %}
puts 'Hello world'
puts "Hello world"
{% endhighlight %}

There's not much of difference between single and double quotes in Ruby. However, take a look at the following code:

{% highlight ruby %}
puts "Betty's pie shop"
puts 'Betty\\'s pie shop'
{% endhighlight %}

When a double quote is used, we can simply add apostrophe with no issue. With single quotes, however, we need *escape sequence* to tell the program that this single quote is part of the string.

## Single quotes

Supports only 2 escape sequences

- `\'` - single quote
- `\\` - single backslash

Everything else between single quotes is treated literally.

## Double quotes

You can escape more sequences than single quotes. It also allows you to embed variables or expressions in string literals (*interpolation*)

### escape sequences

- `\'` - single quote
- `\\` - single backslash
- `\a` - bell/alert
- `\b` - backspace
- `\r` - carriage return
- `\n` - newline
- `\s` - space
- `\t` - tab

### string interpolation

{% highlight ruby %}
name = "Eubug"
puts "Hello my name is #{name}" 
# Hello my name is Eubug
{% endhighlight %}

## puts & print

- `puts` automatically attach `\n` at the end.
- `print` does not.

{% highlight ruby %}
puts "Hello", "World"
## Hello
## World

print "Hello", "World"
## HelloWorld
{% endhighlight %}

---

# Alternative quotes

There's more than one way to quote string literals in Ruby.

- `%q` operator: `%q(abc)` == `'abc'`
- `%Q` operator: `%Q(abc's)` == `"abc's"`

## alternate single quotes

Let's say we're trying to print out the following path:

{% highlight ruby %}
puts 'c:\\bus schedules\\napolean\\the portland bus schedule.txt'
{% endhighlight %}

There are couple issues here.

- `\b` in `\c:\\bus`
- `\n` in `\napolean`
- `\t` in `\the`

These will be treated as escape sequences. We can use our alternate single quote method and choose our own *delimiter* which marks the beginning and end of the string literal.

{% highlight ruby %}
puts %q(c:\\bus schedules\\\\napolean\\\\the portland bus schedule.txt)
puts %q!c:\\bus schedules\\\\napolean\\\\the portland bus schedule.txt!
puts %q^c:\\bus schedules\\\\napolean\\\\the portland bus schedule.txt^
puts %q{c:\\bus schedules\\\\napolean\\\\the portland bus schedule.txt}
puts %q<c:\\bus schedules\\\\napolean\\\\the portland bus schedule.txt>
puts %q/c:\\bus schedules\\\\napolean\\\\the portland bus schedule.txt/
puts %q#c:\\bus schedules\\\\napolean\\\\the portland bus schedule.txt#
{% endhighlight %}

But if your delimiter shows up as a string inside the quote, you need to escape it.

- Exceptions: you don't need to escape sequence when using matching braces.

## alternate double quotes

It works much the same as the `%q` operator.
Since this is a double quote, you can use string interpolation.

{% highlight ruby %}
name = "napoleon"
puts %Q(c:\\bus schedules\\#{name}\\\\the portland bus schedule.txt)
name = "eubug"
puts %Q(c:\\bus schedules\\#{name}\\\\the portland bus schedule.txt)
{% endhighlight %}

# Reference

- [Ruby Programming](https://en.wikibooks.org/wiki/Ruby_Programming)
- [https://en.wikibooks.org/wiki/Ruby_Programming/Strings](https://en.wikibooks.org/wiki/Ruby_Programming/Strings)
- [https://en.wikibooks.org/wiki/Ruby_Programming/Alternate_quotes](https://en.wikibooks.org/wiki/Ruby_Programming/Alternate_quotes)