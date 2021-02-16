---
layout: post
title:  "[MacOS] Adding bits/stdc++.h"
date:   2021-01-31 07:00:00 +1400
category: PS
permalink: /ps/adding-bits-stdcpph
lang: en
---

Seems like Mac doesn't come with `bits/stdc++.h`. So I added it manually.

- open your terminal and move to `/usr/local/library`
- create and open `bits/stdc++.h` with your favorite editor.
- copy the following `stdc++.h` ([libstdc++](https://gcc.gnu.org/onlinedocs/gcc-4.6.2/libstdc++/api/a01040_source.html))

{% highlight c %}
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
{% endhighlight %}

- Save it and compile your code.

## Reference

- [https://qiita.com/K\\_Lightning/items/55821df2fe850f12659d](https://qiita.com/K%5C%5C_Lightning/items/55821df2fe850f12659d)