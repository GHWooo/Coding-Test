import sys

N, K = map(int, sys.stdin.readline().split())

jewel = []
bag = []

for _ in range(N):
    jewel.append(list(map(int, sys.stdin.readline().split())))
for _ in range(K):
    bag.append(int(sys.stdin.readline()))

jewel.sort(key=lambda x : (-x[1], x[0]))
bag.sort()

total = 0

for w, p in jewel:
    if w <= bag[-1]:
        for b in bag:
            if w <= b:
                bag.remove(b)
                total += p
                break

print(total)