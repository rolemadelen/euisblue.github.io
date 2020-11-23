---
category: database
url_path: '/mysql-table-update'
title: "MySQL - Update data"
type: 'mysql'
date: '2020-11-23 19:40:00 +0900'

layout: null
---

- [MySQL cheatsheet](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3)
- [MySQL Data type cheatsheet](https://tableplus.com/blog/2018/07/mysql-data-types-cheatsheet.html)

## How to update data

Here's what our table looks like:
```sql
mysql> SELECT * FROM topic;
+----+------------+-------------------+---------------------+--------+-----------+
| id | title      | description       | created             | author | profile   |
+----+------------+-------------------+---------------------+--------+-----------+
|  1 | MySQL      | MySQL is ...      | 2020-11-22 08:50:21 | eubug  | teacher   |
|  2 | ORacle     | ORacle is         | 2020-11-23 19:14:06 | eubug  | teacher   |
|  3 | SQL Server | SQL Server is ... | 2020-11-23 19:14:29 | Egoing | developer |
|  4 | PostreSQL  | PostgreSQL is ... | 2020-11-23 19:14:46 | Egoing | developer |
|  5 | MongoDB    | MongoDB is ...    | 2020-11-23 19:15:03 | Jii    | developer |
+----+------------+-------------------+---------------------+--------+-----------+
```

Let's fix the typo in `ORacle` to `Oracle`.

```sql
mysql> UPDATE topic SET title='Oracle', description='Oracle is ...' WHERE id=2;o
Query OK, 1 row affected (0.00 sec)

mysql> SELECT * FROM topic WHERE id = 2;
+----+--------+---------------+---------------------+--------+---------+
| id | title  | description   | created             | author | profile |
+----+--------+---------------+---------------------+--------+---------+
|  2 | Oracle | Oracle is ... | 2020-11-23 19:14:06 | eubug  | teacher |
+----+--------+---------------+---------------------+--------+---------+
```

It fixed correctly.

Don't forget about `WHERE`. If you forget that command, it will be a disaster.