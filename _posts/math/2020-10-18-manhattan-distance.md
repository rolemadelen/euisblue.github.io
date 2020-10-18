---
category: math
url_path: '/distance'
title: "Manhattan Distance"
type: 'math'
date: '2020-10-18 10:55:00 +0900'

layout: null
---

## Manhattan Distance

Also known as the *L1 Distance* or *Taxicab Geometry*.

<img src="/assets/images/math/manhattan-distance.png" width="400px" height="400px" alt="manhattan distance"/>
- **Green** (shortest distance) → [Euclidean Distance](/#/euclidean-distance)
- **Red, blue, yellow** total distances are same → Manhattan Distance
 
**Manhattan distance** is the sum of absolute value of differences.

For example, let supoose that the bottom-left point and upper-right point is `(x1, y1)` and `(x2, y2)` respectively.
The manhattan distance of two points can be calculated as `Abs(x1 - x2) + Abs(y1 - y2)`.

So the final equation of the manhattan distance looks like this:

<img src="/assets/images/math/manhattan-distance-eq.png" alt="manhattan distance"/>

## Code

Belowe is the code used to solve parts of [this](https://atcoder.jp/contests/abc180/tasks/abc180_b) problem in AtCoder.
We're trying to find the manhattan distance between a point and the origin.

```cpp
#include <iostream>
#include <vector>
using namespace std;

int manhattanDistance(vector<int> x, vector<int> y)
{
  int distance = 0;
  const int SIZE = x.size();

  for (int i=0; i<SIZE; ++i)
  {
    distance += abs(x[i] - y[i]); 
  }

  return distance;
}

int main()
{
  vector<int> x {-1, 2, 3};
  vector<int> y {4, 0, -3};
  cout << manhattanDistance(x, y) << endl;

  return 0;
}
```

## Reference
- [Manhattan Distance](https://www.sciencedirect.com/topics/mathematics/manhattan-distance)