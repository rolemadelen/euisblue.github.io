---
layout: post
title: "Merge Repositories without losing git histories"
ref: til-20200813-git
date: 2020-08-13 05:00:00 +0900
categories: TIL
lang: en
---

깃허브 관리하던 도중 여러 repository들을 하나로 통합하고 싶다는 생각이 들었다.
하지만 지금까지의 커밋 로그들은 그대로 가져가고 싶어서 찾아보았더니 할 수 있었다.

```
git remote add -f old_repo <OldRpeo repo URL>
git merge old_repo/master
mkdir old_repo
git commit -m “Move old_repo files into subdir”
```

