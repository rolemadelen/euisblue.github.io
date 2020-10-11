---
category: git
url_path: '/reset'
title: 'Cancel Local Commits'
type: 'git'

layout: null
---

## How to Cancel Local Commits

This command will revert you commit back to one BUT also deletes all newly made content.
```sh
$ git reset --hard HEAD~1
```


To retain your changes but just cancel the local commit, you can use 
```sh
$ git reset HEAD~1
```
