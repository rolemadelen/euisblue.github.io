---
category: git
url_path: '/remote'
title: 'Adding a new remote'
type: 'git'

layout: null
---

## Remote add 
```sh
$ git init
$ git add
$ git commit

$ git remote add origin git@github.com:username/new_repo
$ git pull origin master
$ git push origin master
```

You might face an issue where it says `refuse to merge unrelated histories`. 
In this case, use the following option to the `pull` command.

```sh
$ git pull origin master --allow-unrelated-histories
```

## Reference
[Git - Refusing to merge unrelated histories](https://www.educative.io/edpresso/the-fatal-refusing-to-merge-unrelated-histories-git-error)
