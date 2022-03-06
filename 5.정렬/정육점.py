import sys

N, M = map(int, sys.stdin.readline().split())

meat = []

for _ in range(N):
    meat.append(list(map(int, sys.stdin.readline().split())))

meat.sort(key=lambda x: (x[1], -x[0]))

weight = 0
price = 0
result = []

for i in range(N):
    weight += meat[i][0]

    if i >= 1 and meat[i][1] == meat[i-1][1]:
        price += meat[i][1]

        if weight >= M:
            result.append(price)
    else:
        price = meat[i][1]

        if weight >= M:
            result.append(price)
            break

if result:
    print(min(result))
else:
    print(-1)