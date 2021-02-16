---
layout: post
title:  "Basic Ruby: Encoding"
date:   2021-01-30 07:00:00 +1400
category: Ruby
permalink: /ruby-basic/encoding
lang: en
---

Ruby 1.9 has the following encodings:

-   ASCII-8BIT
-   UTF-8
-   US-ASCII
-   Big5
-   Big5-HKSCS
-   Big5-UAO
-   CP949
-   ...and lot more

Full list of encodings: [here](https://en.wikibooks.org/wiki/Ruby_Programming/Encoding)

## Using Encodings

Since Ruby 2.0, all ruby source files are encoded with UTF-8 by default. To change the encoding, use _magic comment_. The magic comment must come directly after a _[shebang comment](https://en.wikipedia.org/wiki/Shebang_(Unix))_.

The syntax of the magic comment requires only one thing:

-   a string must contain `coding:`

So the following are valid magic comments:

{% highlight ruby %}
#encoding: UTF-8
#coding: UTF-8
#blah blah coding: US-ASCII
{% endhighlight %}

## Encodings and Individual Strings

You can use `encode` and `force_encoding` to encode each string differently.

{% highlight ruby %}
#encoding: ISO-8859-1
"Olé!".encode("UTF-8") #Valid
"Olé!".encode("US-ASCII") #Error
{% endhighlight %}

Here's the catch of `encode`. Although displayed characters and the meaning will remain the same, the underlying bytes most likely will not. **`encode` is free to change the underlying bytes of a string.**

String [documentation](https://ruby-doc.org/core-1.9.3/String.html#method-i-encode%7C)

`force_encoding` is used to tell Ruby the encoding of a string that already has the correct bytes for that encoding. It will **never** modify the underlying bytes of a string.

{% highlight ruby %}
#encoding: ISO-8859-1
"\\\\u27d0".force_encoding("UTF-8")
{% endhighlight %}

## Reference
- [Ruby Programming/Encoding](https://en.wikibooks.org/wiki/Ruby_Programming/Encoding)