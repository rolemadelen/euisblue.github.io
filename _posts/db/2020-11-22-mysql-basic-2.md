---
category: database
url_path: '/mysql-table-write'
title: "MySQL - Create a new table and insert a data"
type: 'mysql'
date: '2020-11-22 08:30:00 +0900'

layout: null
---

- [MySQL cheatsheet](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3)
- [MySQL Data type cheatsheet](https://tableplus.com/blog/2018/07/mysql-data-types-cheatsheet.html)

## CREATE a new table
```sql
mysql>  CREATE TABLE tbl(
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NULL,
    created DATETIME NOT NULL,
    author VARCHAR(32) NULL,
    PRIMARY KEY(id),
    field1 datatype(length), ...
    field2 datatype(length), 
    ...
);
```
- `AUTO_INCREMENT` - automatically increments the value by 1
- `NULL` - allow empty string (optional)
- `NOT NULL` - not allowing empty string (must)
- `PRIMARY KEY(id)` - basically saying that `id` is the main key and must be unique. 

You may face this error:
```
ERROR 1820 (HY000): 
You must reset your password using ALTER USER statement 
before executing this statement.
```

In this case, do the below.
```sql
mysql> SET PASSWORD = PASSWORD('your_new_password');
```

## Inserting a data

To insert a new row, you use `INSERT INTO`.

```sql
mysql> INSERT INTO topic (field1, field2, ...) VALUES(value1, value2, ...);
```

If you forgot the structure of a table and don't remember the field, you can use `DESC`.

```sql
mysql> DESC topic;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| title       | varchar(100) | NO   |     | NULL    |                |
| description | text         | YES  |     | NULL    |                |
| created     | datetime     | NO   |     | NULL    |                |
| author      | varchar(32)  | YES  |     | NULL    |                |
| profile     | varchar(100) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+

mysql> INSERT INTO topic (title, description, created, author, profile) VALUES('MySQL', 'MySQL is ...', NOW(), 'eubug', 'teacher');
```

## Read

Run the following command to read all rows in the table
```sql
mysql> SELECT * FROM topic;
```

Result:
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