---
layout: post
title:  "Basic Ruby: ASCII"
date:   2021-01-29 07:00:00
category: Ruby
permalink: /ruby-basic/ascii
lang: en
---

What is Ascii?

Each character in a string like `Hello world!` is represented by a number between 0 and 127.

For example:

- `A` => 65 ------ `a` => 97
- `B` => 66 ------ `b` => 98
- `C` => 67 ------ `c` => 99
- `D` => 68 ------ `d` => 100
- ...and so on

These values are called *ASCII* numbers.

## Print ASCII

In Ruby 1.8, you can use `?`operator to print the ascii number of a character.

{% highlight ruby %}
puts ?H
puts ?e
puts ?l
puts ?l
puts ?o

puts ?\\s #space
puts ?\\t #tab
{% endhighlight %}

`?` operator no longer works in Ruby 1.9. Instead, use `ord` method.

{% highlight ruby %}
puts "H".ord
puts "e".ord
puts "l".ord
puts "l".ord
puts "o".ord
puts "---------"
puts "\\s".ord
puts "\\t".ord
{% endhighlight %}

result

{% highlight shell %}
$ ascii.rb
72
101
108
108
111
---------
32
9
{% endhighlight %}

## ASCII Chart

[Ascii Chart](http://www.asciitable.com/)

## Reference
- [Ruby Programming/ASCII](https://en.wikibooks.org/wiki/Ruby_Programming/ASCII)