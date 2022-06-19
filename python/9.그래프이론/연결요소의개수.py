import sys
# 재귀의 깊이를 설정해 주지 않으면 런타임 에러 발생
sys.setrecursionlimit(10000)

input = sys.stdin.readline

# 정점의 개수와 간선의 개수 입력
N, M = map(int, input().split())

# 해당 정점을 확인 했음을 표시하는 리스트
visited = [0 for _ in range(N+1)]
# 간선으로 연결되어있는 상태를 표시할 리스트
component = [[] for _ in range(N+1)]

for _ in range(M):
    a, b = map(int, input().split())
    # 양방향으로 확인해야 하기 때문에 양쪽 다 연결된 요소를 넣어준다.
    component[a].append(b)
    component[b].append(a)

# 연결되어있는 요소를 재귀함수를 통해 확인 표시를 한다.
def Graph(t):
    # 확인 표시를 한 후
    visited[t] = 1
    # 연결되어 있는 요소가
    for i in component[t]:
        # 아직 확인하지 않았다면 재귀함수 실행
        if visited[i] == 0:
            Graph(i)
    
result = 0

# 1부터 반복하며 확인하지 않았다면 결과에 1을 더하고 함수 실행
for i in range(1, N+1, 1):
    if visited[i] == 0:
        result += 1
        Graph(i)

print(result)