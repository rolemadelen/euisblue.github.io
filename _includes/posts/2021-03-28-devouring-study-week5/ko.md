지금까지 계속해서 달려왔기에 지난 주(Week 4)는 지금까지 배운것들을 복습하고 부족한 부분을 보충하는 시간으로 대체했었습니다.  충분한 휴식이 되었다고 믿고, 이제 다시 달려봅시다 🔥 

이번 주 주제는 **트리(Tree)**입니다. 그러면 바로 시작해볼까요?

[GitHub: 씹어먹는 스터디](https://github.com/devouring-algorithm-ds/algorithm-study-s1)

## 트리(Tree) 란

트리는 **노드로 이루어진 자료구조** 입니다.

![Tree Terms](/img/in-post/devouring/week5/tree-terms.jpg)

하나의 **루트 노드**와 0개 이상의 **자식 노드**들로 이루어져 있고, 각 노드들은 간선(edge)들로 연결이 되어있습니다.

트리는 **그래프의 일종**으로 **사이클(cycle)이 없는** 연결 그래프(connected graph)입니다.

![Tree check](/img/in-post/devouring/week5/tree-cycle.jpg)

왼쪽의 경우는 사이클이 존재하기 때문에 트리가 아닌 반면, 오른쪽은 트리입니다.

## 트리 기본 용어

| 용어  | 설명  |
|:-----|:-----|
| 차수(Degree) | 노드의 부속 트리의 개수 / 노드가 지닌 간선 수 |
| 루트(Root) 노드 | 트리의 최상위 노드|
| 부모(Parent) 노드 | 부속 트리를 가진 노드 / 특정 노드의 상위 노드|
| 자식(Child) 노드 | 부모에 속하는 부속노드 또는 / 특정 노드의 하위 노드|
| 형제(Sibling) | 동일한 부모 노드를 가지고 있는 자식 노드들 |
| 잎(Leaf) 노드 | 자식 노드가 존재하지 않는 노드 |
| 간선(Edge) | 한 노드와 다른 노드 사이의 연결선 |
| 레벨(Levels) | 트리의 특정 깊이를 가지는 노드의 집합 |
| 깊이(Depth) | 루트에서 특정 노드까지 도달하기 위해 거쳐야 하는 간선의 수 |
| 높이(Height) | 루트에서 가장 깊숙히 있는 노드까지의 깊이 |

예제와 함께 좀 더 알아보고 싶다면 [여기](https://www.gatevidyalay.com/tree-data-structure-tree-terminology/)를 참고해주세요.

## 트리의 특성
- 임의의 두 노드간의 경로는 유일하다 (반드시 1개의 경로만을 가진다).
- 노드가 `N`개인 노드는 항상 `N-1`개의 간선을 가진다.
- 그래프가 최소 간선으로 연결되어 있다면 트리이다 (최소 연결 트리). 
- `N`개의 노드와 `N-1`개의 간선으로 연결된 그래프는 트리이다.

## 이진 트리 (Binary Tree)
- 각 노드가 최대 2개의 자식을 갖는 트리
![Tree check](/img/in-post/devouring/week5/tree-binary-def.jpg)

### 이진 트리의 성질
1. 이진 트리의 최대 레벨이 `i`인 경우, 트리의 최대 노드의 개수는 `(2^i) - 1` 이다. 
  + 루트 노드의 레벨이 0일 경우는 `2^i` 노드.
2. 리프 노드의 개수는 2개의 자식 노드를 가지고 있는 부모 노드의 개수 + 1 이다.
3. 높이 `h`인 이진 트리는 최대 `(2^h) - 1`개의 노드를 가진다. 
4. 노드가 `n`개인 이진 트리는 최소 `log_2(n+1)`의 레벨 혹은 높이를 가진다.
5. 노드가 `n`개인 이진 트리는 최소 `log_2(n)`, 최대 `n`의 높이를 가진다.
6. 노드가 `n`개인 이진 트리는 정확히 `n+1`개의 널(null)을 참조한다.

### 이진 트리의 종류
- **이진 탐색 트리** (Binary Search Tree)
  + 왼쪽 자식들의 값은 부모의 값보다 작다.
  + 오른쪽 자식들의 값은 부모의 값보다 크다.
- **완전 이진 트리** (Full/Strict Binary Tree)
  + 마지막 레벨을 제외한, 트리의 모든 레벨에 노드가 꽉 차 있다.
  + 마지막 레벨은 꽉 차 있지 않아도 된다.
  + 왼쪽에서 오른쪽순으로 노드가 채워져있다.
  + 배열을 사용해 효율적으로 표현이 가능하다.
- **전 이진 트리** (Complete Binary Tree)
  + 모든 노드가 0개 또는 2개의 자식들을 가지는 이진 트리다.
- **포화 이진 트리** (Perfect Binary Tree)
  + 완전 이진 트리 AND 전 이진 트리
  + 노드가 정확히 `(2^h) - 1`개이다 (위 이진 트리의 성질 3번 참고).

🛑 여기서 질문!

아래 A, B, C, D의 트리가 있습니다. 
각각 어떤 트리를 나타내고 있을까요? 각 트리가 여러 종류의 트리를 나타낼 수 있습니다.

![Binary Tree Types Questions](/img/in-post/devouring/week5/tree-binary-types-q.jpg)

## 트리 순회 (Tree Traversal)

![Binary Tree Traversals](/img/in-post/devouring/week5/tree-traversal.jpg)

- **inorder** (중위 순회): 왼쪽, root, 오른쪽
  ```ruby
  def inorder(root)
    inorder(root.left)
    print root.data
    inorder(root.right)
  end
  ```
- **preorder** (전위 순회): root, 왼쪽, 오른쪽
  ```ruby
  def preorder(root)
    print root.data
    preorder(root.left)
    preorder(root.right)
  end
  ```
- **postorder** (후위 순회): 왼쪽, 오른쪽, root
  ```ruby
  def postorder(root)
    postorder(root.left)
    postorder(root.right)
    print root.data
  end
  ```

## 이진 트리 노드 삽입

왼쪽에서 오른쪽, 순차적으로 하나하나 삽입하는 `insertNode(...)` 함수를 살펴봅시다.

과정은 이렇습니다.
1. 루트가 비어있으면 루트에 노드를 추가한다.
2. 큐를 사용해서 레벨 단위로 노드를 탐색한다. <br>
    2-1) 노드의 왼쪽이 비어있지 않다면 큐에 추가하고, 비어있으면 노드를 삽입한다. <br>
    2-2) 노드의 오른쪽이 비어있지 않다면 큐에 추가하고, 비어있으면 노드를 삽입한다. <br>

```ruby
def  insertNode(data)
    # 1) 루트가 비어있나?
    if root == null
        root = new Node(data);
    else
    # 2) 루트가 존재한다. 큐를 사용해서 레벨 단위 (BFS)로 탐색 
    queue Q;
    Q.push(root);

        while Q is NOT empty
            Node temp = Q.front  # 앞에 노드를 가져오고
            Q.pop # 노드를 큐에서 삭제

            ## 2-1) 왼쪽 자식이 비어있는지 확인 
            if temp.left != NULL
                Q.push(temp.left)
            else 
                temp.left = new Node(data)
                return;
            end

            ## 2-2) 왼쪽 자식이 비어있는지 확인 
            if temp.right != NULL 
                Q.push(temp.right)
            else 
                temp.right = new Node(data)
                return;
            end
        end
    end
end
```

## 생각해 볼 문제
1. 현재 `insertNode(...)`의 경우 왼쪽에서 오른쪽 차례대로 삽입이 되는데요. 왼쪽 자식에 노드를 추가하는 `insertLeft(...)`함수와 오른쪽 자식에 노드를 추가하는 `insertRight(...)`함수를 구현해보세요.
2. 트리의 마지막 (가장 깊이 있는 오른쪽 노드)를 삭제하는 `deleteNode(...)`함수를 구현해보세요.

## Reference
- [https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)
- [https://fe-churi.tistory.com/16](https://fe-churi.tistory.com/16)
- [https://www.baeldung.com/cs/binary-tree-intro](https://www.baeldung.com/cs/binary-tree-intro)
- [https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html](https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html)