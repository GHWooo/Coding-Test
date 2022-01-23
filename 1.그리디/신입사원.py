import sys

T = int(sys.stdin.readline())
result = []

for _ in range(T):
    Data = []
    N = int(sys.stdin.readline())

    for _ in range(N):     
        d = list(map(int, sys.stdin.readline().split()))
        if d[0] + d[1] <= N+1:
            Data.append(d)

    Data.sort()

    count = 1

    t = 0
    j = 1
    while True:
        if Data[t][1] == 1:
            break
        elif Data[t][1] > Data[j][1]:
            count += 1
            t = j
            j += 1
        else:
            j += 1

            
    result.append(count)

for s in result:
    print(s)
  