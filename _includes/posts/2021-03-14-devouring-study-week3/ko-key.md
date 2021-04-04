《[스택 & 큐](/devouring-study/week3/)》의 생각해볼 문제였던 후위표기법(postfix)에 대해 살펴봅시다.

## 후위표기식(postfix notation)

`A*(B+C)`와 같은 식을 **중위표기식**(Infix Notation)이라고 하는데, 이를 `ABC+*`와 같이 연산자들이 오른쪽에 오도록 표기할 수 있다. 이런 표기 방식을 **후위표기식**(Postfix Notation)이라고 한다.

**스택**을 처음 배울 때 가장 많이 접하게 되는 문제로써, 스택 자료구조를 사용해 중위표기식을 후위표기식으로 변환할 수 있다.

해당 알고리즘은 아래의 행동을 반복한다.

1.  피연산자 (숫자, 여기서는 A~Z)의 경우 바로 출력한다.
    
    ```ruby
    if (expr[i]>='A' and expr[i]<='Z') 
        print expr[i]
    end
    ```
    
2.  여는 괄호(`(`)의 경우 스택에 push한다.
    
    ```ruby
    if (expr[i]=='(')
        op << expr[i]
    end
    ```
    
3.  닫는 괄호(`)`)를 만난 경우, 스택에서 여는 괄호를 만날때까지 pop한다.
    
    ```ruby
    if (expr[i]==')')
        while op.last != '('
            print op.last 
            op.pop
        end
        op.pop
    end
    ```
    
4.  연산자를 만난 경우, 아래의 조건이 참이면 스택에 push한다.
    
    1.  스택이 비어있는 경우
    2.  스택 top이 여는 괄호(`(`)인 경우
    3.  지금 만난 연산자의 우선순위가, 스택 top의 연산자의 우선순위 보다 높은 경우
5.  4번이 해당하지 않을 경우, 지금 만난 연산자의 우선순위보다 낮거나 같은 연산자들을 스택에서 전부 pop한 후, 지금의 연산자를 push한다.
    
    ```ruby
    if (expr[i]=='+' or expr[i]=='-' or expr[i]=='*' or expr[i]=='/')
        ## 4번
        if (op.size==0 || op.last=='(' || 
           (priority(expr[i]) > priority(op.last)))
         op << expr[i] 
         ## 5번
        else 
            while priority(expr[i]) <= priority(op.last)
                print op.last 
                op.pop 
            end
            op << expr[i]
        end
    end
    ```
    
6.  5번까지의 연산이 완료된 후, 스택에 남아있는 연산자들을 전부 출력한다.
    
    ```ruby
    op.size.times do
        print op.pop
    end
    ```
    
--- 

`A*(B+C)`를 예로 들어보자.  <br>
`A`는 피연산자이기 1번 규칙을 따라 곧바로 출력한다.

![postfix1](/img/in-post/devouring/week3/postfix1.jpg)

`*` 연산자의 경우 4번 규칙 (스택이 비어있는 경우)에 때라 스택에 집어넣고, `(` 연산자는 2번 규칙을 따라 스택에 집어넣는다.

![postfix2](/img/in-post/devouring/week3/postfix2.jpg)

`B`는 1번 규칙을 따라 곧바로 출력한다. <br>
`+`의 경우 4번 규칙 중 `스택의 top이 여는 괄호인 경우`에 해당하기 때문에 스택에 push한다.

![postfix3](/img/in-post/devouring/week3/postfix3.jpg)

`C`또한 피연산자이기 때문에 바로 출력한다.

![postfix4](/img/in-post/devouring/week3/postfix4.jpg)

`)` 연산자는 3번 규칙에 따라 `(` 연산자가 나올때까지 스택을 pop한다.

![postfix5](/img/in-post/devouring/week3/postfix5.jpg)

모든 연산자들과 피연산자들의 스캔이 끝났다. 끝으로, 스택이 비어있는지 확인하고 남아있는 것들을 전부 pop해준다.

![postfix6](/img/in-post/devouring/week3/postfix6.jpg)

[전체 코드](https://github.com/eubug17/ds-algo/blob/master/algorithm/stack/infix2postfix/infix2postfix.rb)

## 후위표현 수식 계산 (Evaluating Postfix Expression)

반대로 후위 표현식을 계산하는 방법은 간단합니다.

1. 후위 표현식을 왼쪽부터 한 글자씩 읽는다.
2. 피연산자이면, 스택에 `push`한다.
3. 연산자를 만나면 스택에서 `A = pop()`, `B = pop()`.
    - `A [연산] B`를 계산, 계산 결과를 스택에 `push`한다.
4. 수식의 끝에 도달하면, 스택에서 남아있는 값이 계산 결과가 된다.

```cpp
#include <iostream>
#include <cstring>

using namespace std;

#include "stack.hpp"

int main()
{
  Stack<int> *numbers = new Stack<int>();
  string expr;

  getline(cin, expr);

  for(size_t i=0; i<expr.size(); ++i) {
    if(isdigit(expr[i])) {
      numbers->push(expr[i]-'0');
    } else if(expr[i] == ' ') {
      continue;
    } else {
      int a = numbers->pop();
      int b = numbers->pop();

      cout << "a: " << a << ' ' << "b: " << b << endl;

      switch(expr[i]) {
        case '+':
          numbers->push(b+a);
          break;
        case '-':
          numbers->push(b-a);
          break;
        case '/':
          numbers->push(b/a);
          break;
        case '*':
          numbers->push(b*a);
          break;
      }
    }
  }

  cout << "Result: " << numbers->pop() << endl;
  delete numbers;

  return 0;
}
```