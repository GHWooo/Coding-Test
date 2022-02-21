# 문제 이해가 중요하다고 생각
# 회문 조건으로 봤을 때 
# 2가 되는 조건 : 완벽한 대칭 일 때
# 1이 되는 조건 : 하나를 뺀다면 완벽한 대칭 일 때
# 0이 되는 조건 : 나머지의 경우 -> 대칭을 위하여 빼야할 문자가 2개 이상일 때
# 위 조건을 구분하여 문자열을 확인

import sys

# 입력 받을 문자열 개수
T = int(sys.stdin.readline())

# 결과값을 저장 할 리스트
result = []

# 대칭이 아닌 두번째 요소를 찾기 전까지의 함수 -> 2개 이상 틀리면 의미가 없으므로
def test_2(S, p_l, p_r):
    r = 0

    while p_l < p_r and r < 1:
        if S[p_l] == S[p_r]:
            p_l += 1
            p_r -= 1
        else:
            r += 1

    return r

# 대칭이 아닌 첫번째 요소를 찾기 전까지의 함수
def test_1(S, p_l, p_r):
    r = 0

    while p_l < p_r and r < 2:
        if S[p_l] == S[p_r]:
            p_l += 1
            p_r -= 1
        else:
            r += 1
            t_1 = test_2(S, p_l, p_r-1)
            t_2 = test_2(S, p_l+1, p_r)

            if t_1 != 0 and t_2 != 0:
                r += 1
            else:
                break

    return r

# 문자열을 입력 받아 회문 조건 확인    
for _ in range(T):
    S = list(map(str, sys.stdin.readline().rstrip()))

    # 문자열의 왼쪽 끝과 오른쪽 끝의 인덱스
    # p_l은 오른쪽으로, p_r은 왼쪽으로 이동하면서 확인
    # 두개의 인덱스가 같아지거나 가로지르면 종료
    p_l = 0
    p_r = len(S) - 1

    # test_1에서 확인한 문자열의 종류를 결과 리스트에 추가
    # 문자열과 왼쪽, 오른쪽 끝 인덱스를 넘겨줌
    result.append(test_1(S, p_l, p_r))

# 결과 출력
for i in result:
    print(i)

    