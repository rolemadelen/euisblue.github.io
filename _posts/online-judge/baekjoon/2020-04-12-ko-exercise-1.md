---
layout: post
title: "Set 1-4: 실습 1"
ref: boj-exercise-1
date: 2020-04-12 04:52:00
categories: Baekjoon OJ
lang: ko
---

## 실습 1

|번호|문제|난이도|
|:-:|:--|:--|
|[2446](#2446)|별 찍기 - 9|Bronze 3|
|[2523](#2523)|별 찍기 - 13|Bronze 3|
|[5543](#5543)|상근날드|Bronze 4|
|[10039](#10039)|평균 점수|Bronze 4|
|[10817](#10817)|세 수|Bronze 3|
|[10996](#10996)|별 찍기 - 21|Bronze 2|

<div class="divider"></div>

### [10039. 평균 점수](https://www.acmicpc.net/problem/10039) <a id="10039"></a>
```rb
avg = 0
for i in 0...5
    a = gets.to_i
    avg += (a<40) ? 40 : a
end

puts avg/5
```

### [5543. 상근날드](https://www.acmicpc.net/problem/5543) <a id="5543"></a>
```rb
burger = gets.to_i

for i in 0...2
    a = gets.to_i
    if a < burger
        burger = a
    end
end

drink = gets.to_i
a = gets.to_i
if a < drink
    drink = a
end

puts burger + drink - 50
```

### [10817. 세 수](https://www.acmicpc.net/problem/10817) <a id="10817"></a>
```rb
a, b, c = gets.split.map(&:to_i)
if (a>=b && a<=c) || (a<=b && a>=c)
    puts a
elsif (b>=a && b<=c) || (b<=a && b>=c)
    puts b
else
    puts c
end
```

### [2523. 별 찍기 - 13](https://www.acmicpc.net/problem/2523) <a id="2523"></a>
```rb
n = gets.to_i

for i in 1..n
    puts '*'*i
end
(n-1).downto(1) do |i|
    puts '*'*i
end
```

### [2446. 별 찍기 - 9](https://www.acmicpc.net/problem/2446) <a id="2446"></a>
```rb
n = gets.to_i

(n).downto(1) do |i|
    print ' ' * (n - i)
    puts '*' * (2*i-1)
end
for i in 2..n
    print ' ' * (n - i)
    puts '*' * (2*(i-1)+1)
end
```

### [10996. 별 찍기 - 21](https://www.acmicpc.net/problem/10996) <a id="10996"></a>
```rb
n = gets.to_i
if n==1
    puts '*'
else
    for i in 1..(n*2)
        for j in 1..n
            if i&1==1
                print "#{j&1==1 ? '*' : ' '}"
            else
                print "#{j&1==1 ? ' ' : '*'}"
            end
        end
        puts
    end
end
```
