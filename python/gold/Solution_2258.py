# 생각보다 까다로웠던 문제
# 중요하게 봐야할 2가지
# 1. 정렬 기준 첫번째는 가격의 오름차순  ->  최소값을 구하면 되기 때문
# 2. 정렬 기준 두번째는 무게의 내림차순  ->  같은 가격일 경우엔 크기가 큰 것 부터 구매해야 하기 때문
# 2-1. 같은 무게를 살때를 고려  ->  이것 때문에 어려웠음. 
#                             고기를 살 때 그 가격보다 싼것은 덤으로 받지만
#                             같은 가격의 고기를 추가로 값을 지불해야 함

import sys

# 고기의 개수와 필요한 무게를 입력
N, M = map(int, sys.stdin.readline().split())

# 고기의 무게와 가격을 입력 받을 리스트
meat = []

# 고기의 무게와 가격 삽입
for _ in range(N):
    meat.append(list(map(int, sys.stdin.readline().split())))

# 두번째 인덱스인 가격을 오름차순하고,
# 같은 가격일 경우 첫번째 인덱스인 무게를 내림차순으로 정렬
meat.sort(key=lambda x: (x[1], -x[0]))

# 사게 될 무게를 저장할 변수
weight = 0
# 사게 될 가격을 저장할 변수
price = 0
# 사게 될 가격들을 저장할 리스트
result = []

# 고기의 개수만큼 반복
for i in range(N):
    # 해당된 고기의 무게를 추가
    weight += meat[i][0]

    # 만약 전의 고기와 가격이 같다면
    if i >= 1 and meat[i][1] == meat[i-1][1]:
        # 가격 갱신이 아닌 추가
        price += meat[i][1]

        # 만약 무게가 필요한 무게 이상이라면
        if weight >= M:
            # 결과 리스트에 삽입
            result.append(price)
    # 전의 고기와 가격이 다르다면
    else:
        # 가격 갱신
        price = meat[i][1]

        # 만약 무게가 필요한 무게 이상이라면
        if weight >= M:
            # 결과 리스트에 삽입
            result.append(price)
            # 중복된 가격의 고기가 아닌데 적정 무게라면
            # 그 이후엔 이 가격보다 싸게 나올 수 없기 때문에 종료
            break

# 만약 결과 리스트에 요소가 있다면
if result:
    # 가장 최소 가격을 출력
    print(min(result))
# 없다면 -1을 출력
else:
    print(-1)