import sys
sys.setrecursionlimit(10000)

input = sys.stdin.readline

N, M = map(int, input().split())

visited = [0 for _ in range(N+1)]
component = [[] for _ in range(N+1)]

for _ in range(M):
    a, b = map(int, input().split())
    component[a].append(b)
    component[b].append(a)

def Graph(t):
    visited[t] = 1
    for i in component[t]:
        if visited[i] == 0:
            Graph(i)
    
result = 0

for i in range(1, N+1, 1):
    if visited[i] == 0:
        result += 1
        Graph(i)

print(result)