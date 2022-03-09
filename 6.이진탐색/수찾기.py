import sys

N = int(sys.stdin.readline())

listN = list(map(int, sys.stdin.readline().split()))
listN.sort()

M = int(sys.stdin.readline())

listM = list(map(int, sys.stdin.readline().split()))

def binary(i, listN):
    lp = 0
    rp = len(listN) -1

    while lp <= rp:
        mid = int((lp + rp) / 2)
        
        if listN[mid] == i:
            return True

        if listN[mid] > i:
            rp = mid - 1
        elif listN[mid] < i:
            lp = mid + 1

for i in listM:
    if binary(i, listN):
        print(1)
    else:
        print(0)