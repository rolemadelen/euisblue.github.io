---
layout: post
title:  "Basic Ruby: Hello World"
date:   2021-01-26 07:00:00 +1400
category: Ruby
permalink: /ruby-basic/helloworld
lang: en
---

## Hello World

Create a `hello.rb` file and type the following:

{% highlight ruby %}
puts 'Hello, world!'
{% endhighlight %}

run this code by

{% highlight shell %}
$ ruby hello.rb
Hello, world!
{% endhighlight %}

You can use the `-e` flag to run the short code directly from the terminal. Don't forget the wrapping quotes (`""`).

{% highlight shell %}
$ ruby -e "puts 'Hello, world!'"
Hello, world!
{% endhighlight %}

## Comments

### one-line comments

{% highlight ruby %}
# this is a comment
# puts "this wont be printed"

puts "Hello!"
{% endhighlight %}

### multiline comments

{% highlight ruby %}
=begin
This is a multi-
line comments!
puts "Hello!"
=end

puts "World!"
{% endhighlight %}

## Executable ruby scripts

You always need to use `ruby` to run the script.
To omit this command we can do the following:

1. make your file executable (`chmod u+x hello.rb`)
2. add a *[shebang](https://en.wikibooks.org/wiki/Ruby_Programming/Hello_world)* line (`#!/usr/bin/env ruby`)

And now we can just run the script like this

{% highlight shell %}
$ ./hello
{% endhighlight %}

If your script is something that you use daily, you can move it to `~/bin` directory and just call its name to run the script (`hello.rb`) just like other programs like `bash`, `vim`, and so on...

## Reference

- [https://en.wikibooks.org/wiki/Ruby_Programming/Hello_world](https://en.wikibooks.org/wiki/Ruby_Programming/Hello_world)