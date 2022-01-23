N = int(input())
People = list(map(int, input().split()))
sum = 0

for a in range(N-1, 0, -1):
    for b in range(0, a, 1):
        if People[b] <= People[b+1]:
            continue
        else :
            temp = People[b+1]
            People[b+1] = People[b]
            People[b] = temp

for c in range(N):
    for d in range(0, c+1, 1):
        sum += People[d]

print(sum)