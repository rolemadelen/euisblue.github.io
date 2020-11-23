---
category: database
url_path: '/mysql'
title: "MySQL - DATABASE basic commands"
type: 'mysql'
date: '2020-11-22 08:00:00 +0900'

layout: null
---

- [MySQL cheatsheet](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3)

### CREATE a new DB
Creating a new database.

```sql
mysql> CREATE DATABASE eubug
```

### DELETE existing DB
Deleting (or dropping) the existing database.

```sql
mysql> DROP DATABASE eubug
```

### SHOW existing DB
List all exstinig database.

```sql
mysql> SHOW DATABASES;
```

### USE the DB
You need to choose which DB to use.

```sql
mysql> USE eubug;
```