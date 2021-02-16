---
layout: post
title:  "Basic Ruby: Data Types"
date:   2021-02-06 07:00:00 +1400
category: Ruby
permalink: /ruby-basic/data-types
lang: en
---

Ruby has 8 primitive types and 3 more data types derived from the Numeric superclass. Everything has a class in Ruby.

{% highlight ruby %}
h = {"hash?" => "yep, it\\'s a hash!", "the answer to everything" => 42, :linux => "fun for coders."}

puts "Stringy string McString!".class	# String
puts 1.class                          # Fixnum
puts 1.class.superclass               # Integer
puts 1.class.superclass.superclass    # Numeric

puts 4.3.class                        # Float
puts 4.3.class.superclass             # Numeric

puts nil.class                        # NilClass
puts h.class                          # Hash
puts :symbol.class                    # Symbol
puts [].class                         # Array
puts (1..8).class                     # Range
{% endhighlight %}

Every object has a method called `class` that returns that object's class.

## Constants

1. Constants start with capital letters.
`Constant` is a constant.
`constant` is NOT a constant.
2. You CAN change values of constants, but Ruby will give you a warning.

## Symbols

Ruby's object oriented ways have a cost => lots of objects slows down the program. Every time you type a string, Ruby makes a new object. It dosen't matter whether two strings are identical. Every instance is new.

{% highlight ruby %}
irb> "live long and prosper".object_id
=> 180
irb> "live long and prosper".object_id
=> 200
{% endhighlight %}

You can see that the object ID returned by irb Ruby is different.

To get around this memory hoggishness, you can use *Symbols*.
`Symbol` is a lightweight object best used for comparisons and internal logic.

{% highlight ruby %}
irb> :my_symbol.object_id
=> 2042268
irb> :my_symbol.object_id
=> 2042268
{% endhighlight %}

Symbols are denoted by the colon, like `:symbol_name`.

## Hashes

Hashes are like dictionaries. You have a *key*, a reference, and you *look it up* to find the associated object.

{% highlight ruby %}
hash = { 
    :leia => "Princess from Alderaan",
    :han  => "Rebel without a cause",
    :luke => "Farmboy turned Jedi"
}

puts hash[:leia]	# Princess from Alderaan
puts hash[:han]		# Rebel without a cause
puts hash[:luke]	# Farmboy turned Jedi
{% endhighlight %}

Or we can also write it this way:

{% highlight ruby %}
hash = { 
    :leia => "Princess from Alderaan",
    :han  => "Rebel without a cause",
    :luke => "Farmboy turned Jedi"
}

hash.each do |key, value|
    puts value
end
{% endhighlight %}

### delete

Maybe you want off Luke from the hash.

{% highlight ruby %}
hash.delete(:luke)
{% endhighlight %}

Now Luke is no longer in the hash.

Or you can delete particular keys in general using `delete_if`. For example, you can delete all keys that contains the word *"farmboy"*

{% highlight ruby %}
hash.delete_if { |key, value| value.downcase.match("farmboy") }
{% endhighlight %}

This iterates through each key-value pair and deletes one that matches the condition.

### add

We can add new key-value pair:

{% highlight ruby %}
hash[:lando] = "Dashing and debonair city administrator."
{% endhighlight %}

### others

- `hash.length` => measure the hash
- `hash.keys` => display all keys in the hash as an array

---

## Arrays

`Arrays` are a lot like `Hash` except that the keys are always consecutive numbers, and always starts at 0.

### creation of an array

There are two ways to create an array in Ruby:

{% highlight ruby %}
array1 = ["hello", "this", "is", "an", "array!"]
array2 = []
{% endhighlight %}

### insertion

We can use `<<` operator to insert an item to the array.

{% highlight ruby %}
array2 = []
array2 << "This"   # index 0
array2 << "is"     # index 1
array2 << "also"   # index 2
array2 << "an"     # index 3
array2 << "array!" # index 4
{% endhighlight %}

### deletion

To remove an item from the array, use `Array.pop`.

{% highlight ruby %}
string = array2.pop
puts string  # array!
{% endhighlight %}

### empty?

If you continuously *pop* an element from the array, eventually the array will be empty. We can check the emptiness using `Arary.empty?` and use this in the loop to move all elements from one `Array` to another.

{% highlight ruby %}
array1 << array2.pop until array2.empty?
{% endhighlight %}

### set operations

Ruby's array supports basic set operations like *union* and *difference*.

{% highlight ruby %}
array3 = array1 + array2 # union
array4 = array1 - array2 # difference
{% endhighlight %}

- `arary3` -> contains all the elements of both `array1` and `array2`
- `array4` -> contains all of the elements that `array1` did, except for the ones that were also in `array2`

You can turn `Array` into a `String`:

{% highlight ruby %}
arr = ["my", "name", "is", "Eubug"]
console.log( arr.join("") ) # mynameisEubug
console.log( arr.join(" ") ) # my name is Eubug
{% endhighlight %}

---

## Strings

In Ruby, you can multiple `string`:

{% highlight ruby %}
"Danger!" * 5  # Danger!Danger!Danger!Danger!Danger!
{% endhighlight %}

You can also compare strings:

{% highlight ruby %}
"a" < "b" # true
{% endhighlight %}

When comparing characters in the string, it's actually comparing the ASCII values.
You can use `String.ord` or `?` operator to find character's ASCII value.

## Integer.chr

To perform the opposite conversion (from ASCII to a character), use `Integer.chr` method.

{% highlight ruby %}
puts 65.chr # A
puts 97.chr # a
{% endhighlight %}

## String.scan

To iterate through each characters in a `String` object, use `String.scan`:

{% highlight ruby %}
thing = "Red fish"
thing.scan(/./) { |letter| puts letter }
{% endhighlight %}

yields

{% highlight text %}
R
e
d

f
i
s
h
{% endhighlight %}

### regular expression

So what is this weird `/./` thing in the parameter? This is called a [regular expression](https://en.wikibooks.org/wiki/Ruby_Programming/Reference/Objects/Regexp). So in *"regex"* language, `/./` means *"any one character"*.

There's also a `=~` operator or *match operator* in Ruby. We can use this operator to check whether the `String` matches a given regex.

{% highlight irb %}
>> puts "Yes, there's a number" if "Eubug! <3" =~ /[0-9]/
Yes, there's a number
=> nil
{% endhighlight %}

The `String.match` works the same way except it can accept a `String` as a parameter.

{% highlight irb %}
>> string = "My name is Eubug"
>> string.match("Eubug")
=> #<MatchData "Eubug">
>> string.match("hello")
=> nil
{% endhighlight %}

## String.sub

We can replace a word in a string using the `String.sub` method.

{% highlight ruby %}
string1 = "2 + 2 = 4"
string2 = string1.sub("4", "5")	# 2 + 2 = 5
{% endhighlight %}

`String.sub` only replaces the first occurrence of a word. In order to replace *all* occurrences, use `String.gsub` which means *"global substitute"*:

{% highlight ruby %}
string = "He is dangerous! dangerous! dangerous!"
string.gsub("dangerous", "lovely")

puts string # He is lovely! lovely! lovely!
{% endhighlight %}

## Additional String Methods

{% highlight ruby %}
# Outputs 1585761545
"Mary J".hash

# Outputs "concatenate"
"concat" + "enate"

# Outputs "Washington"
"washington".capitalize

# Outputs "uppercase"
"UPPERCASE".downcase

# Outputs "LOWERCASE"
"lowercase".upcase

# Outputs "Henry VII"
"Henry VIII".chop

# Outputs "rorriM"
"Mirror".reverse

# Outputs 810
"All Fears".sum

# Outputs cRaZyWaTeRs
"CrAzYwAtErS".swapcase

# Outputs "Nexu" (next advances the word up one value, as if it were a number.)
"Next".next

# After this, nxt == "Neyn" (to help you understand the trippiness of next)
nxt = "Next"
20.times {nxt = nxt.next}
{% endhighlight %}

## Reference
- [Ruby Programming/Data types](https://en.wikibooks.org/wiki/Ruby_Programming/Data_types)