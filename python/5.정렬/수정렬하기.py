# 오름차순 정렬을 하면 쉽게 풀 수 있는 문제

import sys

# 입력받을 수 입력
N = int(sys.stdin.readline())

# 리스트 생성과 동시에 요소 입력
list = [int(input()) for _ in range(N)]

# 오름차순 정렬
list.sort()

# 첫번째 요소부터 출력
for i in list:
    print(i)