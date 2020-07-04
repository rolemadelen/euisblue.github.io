---
layout: post
title: "[Ruby] Singly Linked List"
ref: ds-linked-list-singly
date: 2020-05-09 07:50:00 +0900
published: true
categories:
 - "Data Structure"
lang: en
---

If you need a recap, please read <i>[What is Linked List?](./en-data-structure-linked-list)</i>.


## Singly Linked List
Singly Linked List, or SLL, is a list where data can only be accessed sequentially. SLL's node
consists of two parts: `value`, which represents the value of a data, and `next`, which 
is a pointer or reference to the next node.

## Operations of SLL
These are basic operations of Singly Linked List.

- `add()` adds a node to a list

```rb
def add(value)
  new_node = Node.new(value)
  if @head == nil
    @head = new_node
  else
    curr = @head
    while curr.next != nil
      curr = curr.next
    end

    curr.next = new_node
  end

  @length += 1
end
```

- `remove()` removes a node from a list

```rb
# first node => position 1
def remove(pos)
  return -1 if pos < 1 or pos > @length
  if pos==1
    @head = @head.next
  else
    curr = @head
    for i in 1...(pos-1)
      curr = curr.next
    end

    curr.next = curr.next.next
  end
```


- `search_node_at()` searches for a node at nth position from a list

```rb
# first node => position 1
def search_node_at(pos)
  if @head == nil
    puts "---- list is empty"
    return 
  elsif pos < 1 or pos > @length
    puts "---- invalid position"
    return
  else
    curr = @head
    for i in 1...pos
      curr = curr.next
    end
    return curr
  end
end
```

## Implementation

This is one possible implementation.

```rb
class SinglyLinkedList
  attr_reader :head, :length

  def initialize()
    @head = nil
    @length = 0
  end

  def add(value)
    new_node = Node.new(value)
    if @head == nil
      @head = new_node
    else
      curr = @head
      while curr.next != nil
        curr = curr.next
      end

      curr.next = new_node
    end

    @length += 1
  end

  # first node => position 1
  def remove(pos)
    return -1 if pos < 1 or pos > @length
    if pos==1
      @head = @head.next
    else
      curr = @head
      for i in 1...(pos-1)
        curr = curr.next
      end

      curr.next = curr.next.next
    end

    @length -= 1
  end

  # first node => position 1
  def search_node_at(pos)
    if @head == nil
      puts "---- list is empty"
      return 
    elsif pos < 1 or pos > @length
      puts "---- invalid position"
      return
    else
      curr = @head
      for i in 1...pos
        curr = curr.next
      end
      return curr
    end
  end

  def length()
    @length
  end

  def print_list()
    curr = @head
    for i in 0...@length
      print "#{curr.data} "
      curr = curr.next
    end
    puts
  end
end
```

Here's the `Node` class.
```rb
class Node
  attr_accessor :data, :next
  
  def initialize(data)
    @data = data
    @next = nil
  end
end
```

You can use it like this.

```rb
# create an instance of Singly Linked List
root = SinglyLinkedList.new()

# insert nodes with a data 1 to 5
1.upto(5) do |x|
  root.add(x)
end

puts "len: #{root.length}"
root.print_list

# remove the first node
root.remove(1)
puts "len: #{root.length}"
root.print_list

puts "search_node_at(2): #{root.search_node_at(2).data}"
```
