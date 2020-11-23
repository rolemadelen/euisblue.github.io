---
category: database
url_path: '/mysql-table-read'
title: "MySQL - Read data"
type: 'mysql'
date: '2020-11-23 19:20:00 +0900'

layout: null
---

- [MySQL cheatsheet](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3)
- [MySQL Data type cheatsheet](https://tableplus.com/blog/2018/07/mysql-data-types-cheatsheet.html)

## How to read all data

In order to print all data in the table, run the following command:
```sql
mysql> SELECT * FROM topic;
```

Results:
```sql
+----+------------+-------------------+---------------------+--------+-----------+
| id | title      | description       | created             | author | profile   |
+----+------------+-------------------+---------------------+--------+-----------+
|  1 | MySQL      | MySQL is ...      | 2020-11-22 08:50:21 | eubug  | teacher   |
|  2 | Oracle     | Oracle is ...     | 2020-11-23 19:14:06 | eubug  | teacher   |
|  3 | SQL Server | SQL Server is ... | 2020-11-23 19:14:29 | Egoing | developer |
|  4 | PostreSQL  | PostgreSQL is ... | 2020-11-23 19:14:46 | Egoing | developer |
|  5 | MongoDB    | MongoDB is ...    | 2020-11-23 19:15:03 | Jii    | developer |
+----+------------+-------------------+---------------------+--------+-----------+
```

## How to filter columns

### SELECT
Let's say you only want to view `title` column

```sql
mysql> SELECT title FROM topic;

+------------+
| title      |
+------------+
| MySQL      |
| Oracle     |
| SQL Server |
| PostreSQL  |
| MongoDB    |
+------------+
```

Print `title`, `description`, and `profile`

```sql
mysql> SELECT title, description, profile FROM topic;

+------------+-------------------+-----------+
| title      | description       | profile   |
+------------+-------------------+-----------+
| MySQL      | MySQL is ...      | teacher   |
| Oracle     | Oracle is ...     | teacher   |
| SQL Server | SQL Server is ... | developer |
| PostreSQL  | PostgreSQL is ... | developer |
| MongoDB    | MongoDB is ...    | developer |
+------------+-------------------+-----------+
```

### WHERE

```sql
mysql> SELECT * FROM topic where author='eubug';

+----+--------+---------------+---------------------+--------+---------+
| id | title  | description   | created             | author | profile |
+----+--------+---------------+---------------------+--------+---------+
|  1 | MySQL  | MySQL is ...  | 2020-11-22 08:50:21 | eubug  | teacher |
|  2 | Oracle | Oracle is ... | 2020-11-23 19:14:06 | eubug  | teacher |
+----+--------+---------------+---------------------+--------+---------+
```

## How to sort the table

Let's sort the table by author's name

- `ASC` : ascending order
- `DESC` : descending order

```sql
mysql> SELECT id, title, created, author FROM topic ORDER BY author ASC;

+----+------------+---------------------+--------+
| id | title      | created             | author |
+----+------------+---------------------+--------+
|  3 | SQL Server | 2020-11-23 19:14:29 | Egoing |
|  4 | PostreSQL  | 2020-11-23 19:14:46 | Egoing |
|  1 | MySQL      | 2020-11-22 08:50:21 | eubug  |
|  2 | Oracle     | 2020-11-23 19:14:06 | eubug  |
|  5 | MongoDB    | 2020-11-23 19:15:03 | Jii    |
+----+------------+---------------------+--------+

mysql> SELECT id, title, created, author FROM topic ORDER BY author DESC;

+----+------------+---------------------+--------+
| id | title      | created             | author |
+----+------------+---------------------+--------+
|  5 | MongoDB    | 2020-11-23 19:15:03 | Jii    |
|  1 | MySQL      | 2020-11-22 08:50:21 | eubug  |
|  2 | Oracle     | 2020-11-23 19:14:06 | eubug  |
|  3 | SQL Server | 2020-11-23 19:14:29 | Egoing |
|  4 | PostreSQL  | 2020-11-23 19:14:46 | Egoing |
+----+------------+---------------------+--------+
```