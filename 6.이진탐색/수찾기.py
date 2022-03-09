# 이진(이분) 탐색으로 풀이
# 탐색하려는 리스트를 오름차순 or 내림차순으로 정렬하고
# 가운데를 확인, 아니라면 범위에 맞게 왼쪽, 오른쪽의 가운데를 탐색
# 위의 과정을 반복

import sys

# 탐색하려는 리스트와 비교하는 리스트를 각각 입력
N = int(sys.stdin.readline())
listN = list(map(int, sys.stdin.readline().split()))
listN.sort()

M = int(sys.stdin.readline())
listM = list(map(int, sys.stdin.readline().split()))

# 비교하는 리스트의 요소 하나와 탐색하려는 리스트를 입력하여 이진 탐색
def binary(i, listN):
    # 초기 왼쪽, 오른쪽 인덱스를 설정
    lp = 0
    rp = len(listN) -1

    # 이진 탐색으로 왼쪽 인덱스가 오른쪽 인덱스보다 커지지 않을때 까지 반복
    while lp <= rp:
        # 가운데 인덱스 설정
        mid = int((lp + rp) / 2)
        
        # 만약 가운데 인덱스에 해당하는 요소가 맞다면 True를 리턴하고 종료
        if listN[mid] == i:
            return True

        # 아니라면 가운데 인덱스의 요소와 비교하여 다음 범위를 지정
        if listN[mid] > i:
            rp = mid - 1
        elif listN[mid] < i:
            lp = mid + 1

# 비교하는 리스트의 요소를 하나씩 입력하여 참, 거짓 확인
for i in listM:
    if binary(i, listN):
        print(1)
    else:
        print(0)