N, M = map(int, input().split())

if N // 2 < M:
    M = N-M

up, down = 1, 1
for i in range(M, 0, -1):
    up *= N
    down *= M

    N -= 1
    M -= 1

print(up // down)