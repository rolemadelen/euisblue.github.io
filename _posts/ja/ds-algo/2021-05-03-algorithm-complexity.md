---
layout: post
title:  "時間・空間複雑度"
subtitle: "競プロ？時間複雑度？空間複雑度？オーダー記法？"
date:   2021-05-03 07:00:00 +1400
author: "J2ieu"
header-img: "img/post-bg-ds-algo.jpg"
header-mask: 0.6
catalog: true
hidden: false
lang: "ja"
korean: true
english: true
permalink: /ja/algorithm/complexity/
tags:
  - algorithm
<<<<<<< HEAD
<<<<<<< HEAD
  - 競プロ
=======
  - ps
>>>>>>> ba229b1 (Design Modified)
=======
  - 競プロ
>>>>>>> 8534215 (tags splitted by a space)
---

## 時間複雑度 (Time Complexity)
- 時間複雑度は入力の大きさと問題を解決する時かかる時に間の相関関係です。
- 普通競プロでは１億もの演算を１秒で計算します。
  + TMI: 令和３年5月、世界性能のスパコンは日本の[富岳](https://blog.global.fujitsu.com/fgb/2020-06-22/supercomputer-fugaku-named-world-fastest/)(Fugaku)で、演算スピードのトップは537petaFLOPS(PF)です。 
  1PFが1000兆の演算速度を意味します。つまり、富岳は１秒に53.7京回の演算ができます。

下の`countEven()`関数は１~N間の偶数の回数を返します。

それぞれの演算が何回行われるか確認してみましょう。

```cpp
int countEven(int N) {
    int cnt = 0;

    for(int i=1; i<=N; ++i) {
        if(i % 2 == 0) ++cnt;
    }

    return cnt;
}
```

- ２行: `cnt = 0` (+1)
- forループ
  + ４行: `i=1` (+1)
  + ４行 - N回振り返す: `i <= N` & `++i` (+2) 
  + ５行 - N回振り返す: `i % 2 == 0` (+2) & `++cnt` (+1)
- ８行: `return cnt` (+1)

２-８行の演算を含めると`1+1*N(2+2+1)+1 = 5N+3`になります。これで`countEven()`関数がどのぐらいの演算をするか確認できます。

<br>

一般的なPCでは１秒に約１億の計算ができると言いました。たとえば `N=10_000_000` の場合、`5N+3`は５千万になるので１秒以内に実行できます。
しかし `N=50_000_000` の場合にはNが2.5億になるので１秒以上の時間がかかります。

<br>

ところで`5N + 3`と時間複雑度はなんの関係があるんでしょう。ここで大事なのは比例性(proportionality)です。`N`が大きくなればなるほど演算回数とプログラムの実行時間が増加します。そして逆に`N`が小さくなればなるほど演算回数やプログラムの実行時間が減少します。

<br>

Big-Oh表記法を使って、`countEven()`関数の時間複雑度は`O(N)`になります。

### Big-Oh表記法
アルゴリズムの効率性を分析するための表記法です。支配項以外のすべての係数と項は無視されます。

```
- O(N)   ==> N+3, 10N + logN, 5N + 10sqrtN, ...
- O(N^2) ==> 5N^2 + 10N + 7, 10N^2 + 1, ...
- O(1)   ==> 1, 5, 17, ...
```

オーダー表記のグラフ。

![Big-Oh Chart](/img/in-post/ds-algo/complexity/big-oh.png)

時間複雑度を計算して、だいたい自分のプログラムがどのぐらい速いか遅いかが判断できます。

## 空間複雑度
- 空間複雑度は入力の大きさと使用したメモリ空間の相関関係です。
- 一般的に、競プロの問題のメモリ制限は512MBです。 512MBは、int系の変数を120万個使うことと一緒です。

競プロでメモリが問題になるときはふだんはないので、普通は空間より時間複雑度のほうもっと考えながらアルゴリズムを実装します。
しかし、たまにメモリの制限がすごく厳しい問題も存在するのでそこだけ気をつけてください。

## Reference
- [https://blog.encrypted.gg/922](https://blog.encrypted.gg/922)
- [Big Oh Chart](https://danielmiessler.com/study/big-o-notation/)