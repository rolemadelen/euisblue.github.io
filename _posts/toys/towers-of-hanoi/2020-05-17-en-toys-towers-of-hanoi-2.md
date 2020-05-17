---
layout: post
title: "Towers of Hanoi pt. 2"
ref: toys-towers-of-hanoi
date: 2020-05-17 17:30:00 +0900
categories: Toys
lang: en
---

This is the issue I had last time.
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

Because it iterates all towers vertically to draw, this is what happenes.
I couldn't figure it out how to position these disks properly, but it was an easy fix.

I wouldn't say this is the best way, but here's one way to fix it.

```rb
t1 = [nil] * (@disk-@towers[0].size)
t2 = [nil] * (@disk-@towers[1].size)
t3 = [nil] * (@disk-@towers[2].size)

0.upto(@disk-1) do |i|
  t1.push(@towers[0][i]==nil ? '' : disk * (2*@towers[0][i]-1))
  t2.push(@towers[1][i]==nil ? '' : disk * (2*@towers[1][i]-1))
  t3.push(@towers[2][i]==nil ? '' : disk * (2*@towers[2][i]-1))
end
```

I simply filled in the array with `nil`, and now it displays it correctly.

```
                      
                       ᐞ
ᐞᐞᐞᐞᐞ                  ᐞᐞᐞ
tower1     tower2     tower3
```

Next thing to work on is the winning logic and possibly a lose or give up.
