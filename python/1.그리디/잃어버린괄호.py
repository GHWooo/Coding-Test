import sys
input = sys.stdin.readline

N = list(input().split('-'))

result = 0

for i in range(len(N)):
    N[i] = list(N[i].split('+'))
    if i == 0:
        for k in range(len(N[i])):
            result += int(N[i][k])

    else:
        for k in range(len(N[i])):
            result -= int(N[i][k])


print(result)