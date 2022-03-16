import sys

T = int(sys.stdin.readline())

Nlist = [int(sys.stdin.readline()) for _ in range(T)]

def fibonacci(n, zero, one):
    if n == 0:
        zero += 1
    elif n == 1:
        one += 1
    else:
        subzero1, subone1 = fibonacci(n-1, zero, one)
        subzero2, subone2 = fibonacci(n-2, zero, one)
        zero += (subzero1 + subzero2)
        one += (subone1 + subone2)

    return zero, one


for i in Nlist:
    zero = 0
    one = 0

    resultZero, resultOne = fibonacci(i, zero, one)
    print(resultZero, resultOne)

    
