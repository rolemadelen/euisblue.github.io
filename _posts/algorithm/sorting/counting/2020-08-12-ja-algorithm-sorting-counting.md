---
layout: post
title: "Countingソート"
ref: algorithm-sort-counting
date: 2020-08-12 05:00:00 +0900
published: false
categories:
 - "Algorithm"
lang: ja
---

## Counting Sort

## The code

```rb
# 1 <= n <= 10,000,000
# any numbers between 1 to 10,000

n = gets.to_i
count = [0] * 10001;
n.times do
  count[gets.to_i] += 1
end

1.upto(10000) do |i|
  if count[i] > 0
    puts "#{i}\n" * count[i]
  end
end
```

## Time Complexity

## Reference
