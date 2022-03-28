# 규칙을 찾아주면 되는 문제
# 오름차순을 기준으로 4번째 계단부터 반복적으로 적용되는 규칙이고
# 그 규칙도 경우의 수가 있기 때문에 쉽지 않았던 문제

# 해당 계단의 최대값을 구하는 규칙
# 첫번째 계단 -> 첫번째 값
# 두번째 계단 -> 첫번째 값 + 두번째 값
# 세번째 계단 -> 첫번째 값 + 세번째 값과,
#             두번째 값 + 세번째 값 중 큰 값
# 네번째 계단 -> 두번째 계단의 최대값 + 네번째 값과,
#             첫번째 계단의 최대값 + 세번째 값 + 네번째 값 중 큰 값
# ...
# 위의 규칙이 네번째 부터는 반복적으로 적용된다.

# 반복되는 규칙을 수식으로 표현하자면
# 계단의 값을 저장한 리스트 = ValList, 계단의 최대값을 저장한 리스트 = MaxValList
# MaxValList[i] = max(MaxValList[i - 2] + ValList[i],
#                     MaxValList[i - 3] + ValList[i - 1] + ValList[i])

import sys

# 계단의 개수 입력
N = int(sys.stdin.readline())

# 계단의 개수는 300개 이하이므로 300개의 빈 리스트를 생성
# 해당 계단의 값을 저장할 리스트
Nlist = [0 for _ in range(301)]
# 해당 계단의 최대 값을 저장할 리스트
MaxValue = [0 for _ in range(301)]

# 계단마다 값을 삽입
for i in range(N):
    Nlist[i] = int(sys.stdin.readline())

# 4번째 부터 규칙이 반복되므로, 3번째까지는 하드 코딩
MaxValue[0] = Nlist[0]
MaxValue[1] = Nlist[0] + Nlist[1]
MaxValue[2] = max(Nlist[0] + Nlist[2], Nlist[1] + Nlist[2])

# 4번째 계단부터는 규칙을 적용하며 마지막 계단까지 진행
for i in range(3, N):
    MaxValue[i] = max(MaxValue[i-2] + Nlist[i],
                        MaxValue[i-3] + Nlist[i] + Nlist[i-1])

# 마지막 계단의 최대 값을 출력
print(MaxValue[N-1])