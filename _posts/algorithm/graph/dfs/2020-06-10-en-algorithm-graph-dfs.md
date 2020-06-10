---
layout: post
title: "Graph - Depth First Search (DFS)"
ref: algorithm-dfs
date: 2020-06-10 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: en
---

<center>
<img src="/assets/images/algorithm/graph/dfs/dfs.gif" width="250px" height="250px"> <br>
<span style="font-size:11px"><i>gif source: <a href="https://en.wikipedia.org/wiki/Depth-first_search">Wikipedia - DFS</a></i></span>
</center>

## Depth First Search

DFS is an algorithm for searching (traversing) tree or graph. This algorithm starts at a root node for tree 
or any specified node (starting node) for a graph and explores as far as possible along each 
branch (or neighbors) before [backtracking](https://en.wikipedia.org/wiki/Backtracking).

DFS(Depth First Search) can be implemented using either a recursion or stack.

<div class="divider"></div>

### Recursion 
```cpp
#define vi vector<int>
#define vb vector<bool>

void dfs(vector<vi > &graph, vb &visited, int start) 
{
  visited[start] = true;
  vi neighbors = graph[start];

  for(int i=0; i<neighbors.size(); ++i) 
  {
    if(visited[neighbors[i]] == false) 
    {
      dfs(graph, visited, start);
    }
  }
}
```

### Stack
```cpp
#define vi vector<int>
#define vb vector<bool>

void dfs(vector<vi > &graph, vb &visited, int start) 
{
  visited[start] = true;
  stack<int> s;
  s.push(start);

  while(!s.empty()) 
  {
    int curr = s.top();
    s.pop();
    vi = graph[curr];

    for(int v : n) 
    {
      if(visited[v] == false) 
      {
        visited[v] = true;
        s.push(curr);
        s.push(v);
        break;
      }
    }
  }
}
```
