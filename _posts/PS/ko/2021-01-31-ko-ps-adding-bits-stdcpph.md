---
layout: post
title:  "[MacOS] bits/stdc++.h 추가하기"
date:   2021-01-31 07:00:00 +1400
category: PS
permalink: /ko/ps/adding-bits-stdcpph
lang: ko
---

오랜만에 PS를 하려고 코드를 작성하고 컴파일 했더니 `<bits/stdc++.h>` 가 없다고 컴파일 에러가 났다.

맥에서 해당 헤더가 존재하지 않는건지 아니면 내가 실수로 뭘 하면서 지워버린 건지 모르겠지만, 어쨌든 없다고 하니 직접 추가했다. 

1. `/usr/local/library`로 이동.
2. `bits/stdc++.h` 파일 만들고 연다.
3. 아래의`stdc++.h` 를 복사 ([libstdc++](https://gcc.gnu.org/onlinedocs/gcc-4.6.2/libstdc++/api/a01040_source.html))

    ```c
    // C
    #ifndef _GLIBCXX_NO_ASSERT
    #include <cassert>
    #endif
    #include <cctype>
    #include <cerrno>
    #include <cfloat>
    #include <ciso646>
    #include <climits>
    #include <clocale>
    #include <cmath>
    #include <csetjmp>
    #include <csignal>
    #include <cstdarg>
    #include <cstddef>
    #include <cstdio>
    #include <cstdlib>
    #include <cstring>
    #include <ctime>

    #ifdef __GXX_EXPERIMENTAL_CXX0X__
    #include <ccomplex>
    #include <cfenv>
    #include <cinttypes>
    #include <cstdbool>
    #include <cstdint>
    #include <ctgmath>
    #include <cwchar>
    #include <cwctype>
    #endif

    // C++
    #include <algorithm>
    #include <bitset>
    #include <complex>
    #include <deque>
    #include <exception>
    #include <fstream>
    #include <functional>
    #include <iomanip>
    #include <ios>
    #include <iosfwd>
    #include <iostream>
    #include <istream>
    #include <iterator>
    #include <limits>
    #include <list>
    #include <locale>
    #include <map>
    #include <memory>
    #include <new>
    #include <numeric>
    #include <ostream>
    #include <queue>
    #include <set>
    #include <sstream>
    #include <stack>
    #include <stdexcept>
    #include <streambuf>
    #include <string>
    #include <typeinfo>
    #include <utility>
    #include <valarray>
    #include <vector>

    #ifdef __GXX_EXPERIMENTAL_CXX0X__
    #include <array>
    #include <atomic>
    #include <chrono>
    #include <condition_variable>
    #include <forward_list>
    #include <future>
    #include <initializer_list>
    #include <mutex>
    #include <random>
    #include <ratio>
    #include <regex>
    #include <system_error>
    #include <thread>
    #include <tuple>
    #include <typeindex>
    #include <type_traits>
    #include <unordered_map>
    #include <unordered_set>
    #endif
    ```

4. 저장하고 다시 컴파일하면 문제없이 된다.

## 참조
- [https://qiita.com/K_Lightning/items/55821df2fe850f12659d](https://qiita.com/K_Lightning/items/55821df2fe850f12659d)
