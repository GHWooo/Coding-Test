import sys

list = []

for _ in range(9):
    list.append(int(sys.stdin.readline()))

end = 0
x, y = 0, 0

for i in range(9):
    for j in range(i+1, 9):
        if (sum(list) - (list[i] + list[j])) == 100:
            x = list[i]
            y = list[j]
            end = 1
            break
    
    if end == 1:
        break

list.remove(x)
list.remove(y)
list.sort()

for i in list:
    print(i)