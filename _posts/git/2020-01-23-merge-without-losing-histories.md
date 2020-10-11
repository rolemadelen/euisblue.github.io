---
category: git
url_path: '/merge'
title: 'Merge repos without losing commit histories'
type: 'git'

layout: null
---

## Merging Repositories Without Losing File Histories

I was cleaning up my github and wanted to combine multiple repositories into one repo.
But once I remove the other repository, its history will be gone and I don't want that to happen.

Thanks to [Eric Lee - SaintGimp](https://saintgimp.org/about/), I was able to manage it without any issues.

## Initial Commit

Navigate to you new repo that you would like to combine other repositories.
```sh
$ mkdir new_repo
$ cd new_repo
```

In order to merge histories from other repo, we need a single commit to merge with.

```sh
$ git init
$ ls > deleteme.txt
$ git add .
$ git commit -m "Initial dummy commit"
```

Now we are ready to merge.

## Merging

Repeat below process with other repositories you would like to merge.
```sh
$ git remote add -f mergeA <mergeA repo URL>
$ git merge mergeA/master
$ mkdir mergeA
$ mv <all files to mergeA>
$ git commit -m "Move mergeA files into subdir"

$ git remote add -f mergeB <mergeB repo URL>
$ git merge mergeB/master
..
.. repeat
```

If you see an error `refused to merge unrelated histories` when merging, use `--allow-unrelated-histories` option.

## Reference
- [Merging Two Git Repositories Into One Repository Without Losing File History](https://saintgimp.org/2013/01/22/merging-two-git-repositories-into-one-repository-without-losing-file-history/)
- [Git refusing to merge unrelated histories on rebase](https://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories-on-rebase)