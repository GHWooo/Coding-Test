import sys

input = sys.stdin.readline

A = int(input())
B = int(input())

comList = [0 for _ in range(101)]
matchList = []

for _ in range(B):
    matchList.append(list(map(int, input().split())))

def Graph(t):
    for i in matchList:
        if i[0] == t:
            if comList[i[1]] == 0:
                comList[i[1]] = 1
                Graph(i[1])
        elif i[1] == t:
            if comList[i[0]] == 0:
                comList[i[0]] = 1
                Graph(i[0])

Graph(1)
print(sum(comList)-1)