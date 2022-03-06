import sys

N = int(sys.stdin.readline())

list = [int(input()) for _ in range(N)]

list.sort()

for i in list:
    print(i)