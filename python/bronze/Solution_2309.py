# 9명의 난쟁이 중 7명을 뽑아야 하므로
# 포함되지 않은 2명만 찾으면 되는 문제

import sys

# 9명의 난쟁이가 들어갈 리스트
list = []

# 난쟁이 키 입력
for _ in range(9):
    list.append(int(sys.stdin.readline()))

# 포함되지 않는 2명을 찾았을 때 이중 반복문 탈출을 위한 변수
end = 0
# 포함되지 않는 2명을 저장할 변수
x, y = 0, 0

# 9명 중 2명을 뽑는 모든 경우의 수를 탐색
for i in range(9):
    for j in range(i+1, 9):
        # 9명의 키를 모두 합한 값에서 선택한 2명의 키를 빼면 100이 될때
        if (sum(list) - (list[i] + list[j])) == 100:
            # 두명의 키를 변수에 따로 저장      -->     따로 저장하지 않고 바로
            x = list[i]                        # 리스트에서 삭제해 버리면
            y = list[j]                        # 리스트 인덱스값이 바뀌기 때문에
            # 반복문 탈출을 위해 1설정              # y를 삭제할때 다른 것이 삭제 될 수도 있음      
            end = 1                            
            break

    # 끝났다면 탈출
    if end == 1:
        break

# 찾은 두명을 삭제하고 오름차순으로 정렬
list.remove(x)
list.remove(y)
list.sort()

# 결과 출력
for i in list:
    print(i)