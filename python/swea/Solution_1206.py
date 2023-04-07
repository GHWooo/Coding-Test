# solved

T = 10
for test_case in range(1, T + 1):
    N = int(input())
    heightList = list(map(int, input().split()))
    visited = [0 for i in range(len(heightList))]
 
    result = 0
 
    for index in range(2, len(heightList)-2):
        if visited[index] == -1:
            continue
 
        tempList = [heightList[index - 2], heightList[index - 1], heightList[index + 1], heightList[index + 2]]
        maxValue = max(tempList)
 
        if heightList[index] > maxValue:
            result += (heightList[index] - maxValue)
            visited[index + 1] = -1
            visited[index + 2] = -1
 
    printValue = '#' + str(test_case) + ' ' + str(result)
    print(printValue)