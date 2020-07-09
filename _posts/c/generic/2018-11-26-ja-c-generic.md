---
layout: post
title: "C言語・変数のデータ型出力する方法"
ref: c-generic
date: 2018-11-26 19:15:00
last_modified_at: 2020-05-04 18:00:00
categories: C
lang: ja
---

連結リストでstackを実行してコンパイルすると互いに異なるデータ型の値を代入しているっとエラーが出てました。

問題が起こった部分はこれです。
```c
temp->next = stack->head;
```
`next`と`head`のデータ型は全部`Node *`のはず。なんでエラーが出たのかなっと思って、データ型を出力する方法を調べた結果、`_Generic`というの発見。

```c
#define typename(x) _Generic((x),                                                                     \
    _Bool: "_Bool",                     unsigned char: "unsigned char",          \
    char: "char",                       signed char: "signed char",            \
    short int: "short int",             unsigned short int: "unsigned short int",     \
    int: "int",                         unsigned int: "unsigned int",           \
    long int: "long int",               unsigned long int: "unsigned long int",      \
    long long int: "long long int",     unsigned long long int: "unsigned long long int", \
    float: "float",                     double: "double",                 \
    long double: "long double",         char *: "pointer to char",        \
    void *: "pointer to void",          int *: "pointer to int",         \
    default: "other") 
```

マクロ(macro)で各のデータ型と文字列を指定して出力するのができます。

```c
int main(void)
{
  int x = 5;
  char y = 6;
  double z = 10;

  printf("type of x: %s\n", typename(x)); // output "int"
  printf("type of y: %s\n", typename(y)); // output "char"
  printf("type of z: %s\n", typename(z)); // output "double"

  return 0;
}
```

マクロに`struct Node * : "pointer to Node"`を追加して`temp->next`と`stk->head`のデータ型を確認すると`other`と`pointer to Node`でした。`temp->next`のデータ型が`Node *`じゃないという意味です。

なのでノードの構造体をちゃんと見るとエラーがありました。

```c
typedef struct {
  struct Node *next;
  // code
} Node;

typedef struct {
  Node *head;
  // code
} Stack;
```

`struct`の名が指定されてなかったんです。

```c
typedef struct Node {
  struct Node *next;
  // code
} Node;

typedef struct Stack {
  Node *head;
  // code
} Stack;
```

## 参照
- [StackOverflow : Checking certain type](https://stackoverflow.com/questions/6280055/how-do-i-check-if-a-variable-is-of-a-certain-type-compare-two-types-in-c)
- [StackOverflow : typedef struct](https://stackoverflow.com/questions/17720223/c-typedef-struct-name-vs-typedef-struct-name/23660072)
