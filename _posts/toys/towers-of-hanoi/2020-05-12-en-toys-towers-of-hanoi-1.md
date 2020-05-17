---
layout: post
title: "Towers of Hanoi pt. 1"
ref: toys-towers-of-hanoi
date: 2020-05-12 22:50:00 +0900
categories: Toys
lang: en
---

I started making simple terminal based 2d Towers of Hanoi game.

I'm still not sure how I want to represent each towers but for now, I'm using an array.
I will use this like a stack.
```rb
  def initialize(disk=3)
    @disk = disk
    @towers = [[*1..disk], [0]*disk, [0]*disk]
  end
```

For the each movement when user selects towers to move `from` and `to`, I thought about 
popping from `from` tower and push it to `to` tower. And it works but the problem is it 
fails to draw them correctly (forget about the alignments for now).

```
ᐞ                        
ᐞᐞᐞ                      
ᐞᐞᐞᐞᐞ                    
tower1     tower2     tower3
1 2

ᐞᐞᐞ       ᐞ              
ᐞᐞᐞᐞᐞ                    
                         
tower1     tower2     tower3
```
This is because I iterate through all towers vertically.

```rb
def draw_towers
  disk = 'ᐞ'
  0.upto(@disk-1) do |i|
    t1 = @towers[0][i]==0 ? '' : disk * (2*@towers[0][i]-1)
    t2 = @towers[1][i]==0 ? '' : disk * (2*@towers[1][i]-1)
    t3 = @towers[2][i]==0 ? '' : disk * (2*@towers[2][i]-1)

    puts "%-5s     %-5s     %-5s" % [t1, t2, t3]
  end
  puts "tower1     tower2     tower3"
end
```

So I thought about using `0` as a filler to draw them out correctly, and it worked for the 
first draw but not after that.

```
ᐞ                        
ᐞᐞᐞ                      
ᐞᐞᐞᐞᐞ                    
tower1     tower2     tower3
1 2
                         
ᐞᐞᐞ                      
ᐞᐞᐞᐞᐞ     ᐞ              
tower1     tower2     tower3
1 3
                         
ᐞᐞᐞ                      
ᐞᐞᐞᐞᐞ     ᐞ              
tower1     tower2     tower3
```

For the first draw, arrays look like this
```
moving from t1 to t2

t1: 1 2 3  -> 0 2 3
t2: 0 0 0  -> 0 0 1
t3: 0 0 0  -> 0 0 0
```

Then for the 2nd and after, it's keep pushing/popping that filler(`0`)
```
moving t1 to t2

t1: 0 2 3  -> 0 2 3
t2: 0 0 1  -> 0 0 1
t3: 0 0 0  -> 0 0 0
```

So next will be fixing this issue.
