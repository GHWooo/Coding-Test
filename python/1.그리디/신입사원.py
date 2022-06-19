# 문제 이해가 가장 중요
# 서류와 면접을 각각 A, B라고 했을 때 합격 성립 조건
# 1. A, B의 순위를 합한 값이 N+1 보다 같거나 작아야한다
# 2. A의 순위를 기준으로 오름차순으로 정리했을 때 B의 순위는 내림차순으로 되어야 한다

import sys

T = int(sys.stdin.readline())
# 케이스 별 결과를 저장할 리스트 생성
result = []

for _ in range(T):
    # 각 케이스에 해당되는 순위를 저장할 리스트 생성
    Data = []
    N = int(sys.stdin.readline())

    # 면접과 서류 순위를 각각 입력
    for _ in range(N):     
        d = list(map(int, sys.stdin.readline().split()))
        # 위에서 설명한 첫번째 조건에 해당되는 순위만 리스트에 추가
        if d[0] + d[1] <= N+1:
            Data.append(d)

    # 하나의 시험 순위 기준으로 오름차순 정렬
    Data.sort()

    # 오름차순 기준 가장 첫번째 사람은 1위로 무조건 합격이므로 1부터 카운트
    count = 1

    # 오름차순으로 정렬되지 않은 나머지 하나의 시험 결과가
    # 내림차순인지 확인하기 위한 비교 
    t = 0   # 기준점
    j = 1   # 비교점
    while True:
        # 내려갈수록 값이 작아져야(순위가 높아져야) 하는데 1보다 작은 값은 없으므로 탈출
        if Data[t][1] == 1:
            break
        # 내림차순이 맞다면 기준점을 비교점으로 이동하고 비교점 += 1
        elif Data[t][1] > Data[j][1]:
            count += 1
            t = j
            j += 1
        # 내림차순이 아니라면 비교점만 += 1
        else:
            j += 1

    # 카운트 한 값을 결과 리스트에 저장     
    result.append(count)

#결과 값 출력
for s in result:
    print(s)
  


# 최적 풀이

# import sys
# t = int(sys.stdin.readline())

# def solve(n):
#     score = [0] * (n + 1)
#     for _ in range(n):
#         x, y = map(int, sys.stdin.readline().split())
#         score[x] = y

#     limit = n
#     for i in range(1, n + 1):
#         if score[i] > limit:
#             n -= 1
#         else:
#             limit = min(limit, score[i])
#     return n

# for _ in range(t):
#     print(solve(int(sys.stdin.readline())))