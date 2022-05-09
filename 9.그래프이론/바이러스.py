import sys

input = sys.stdin.readline

# 컴퓨터의 개수와 연결된 쌍의 수 입력
A = int(input())
B = int(input())

# 확인했음을 표시할 리스트 생성
comList = [0 for _ in range(101)]
# 쌍을 입력할 리스트 생성
matchList = []

# 쌍을 matchList에 삽입
for _ in range(B):
    matchList.append(list(map(int, input().split())))

# 연결되어있는 컴퓨터의 수를 확인할 함수
def Graph(t):
    # matchList안에 있는 쌍을 전부 확인한다.
    for i in matchList:
        # 쌍의 원소 둘 중 하나라도 t와 같다면
        if i[0] == t:
            # 남은 원소를 확인 했는지 확인한다.
            # 확인을 아직 하지 않았다면
            if comList[i[1]] == 0:
                # 확인했다는 표시를 하고
                comList[i[1]] = 1
                # 해당 원소를 다시 재귀함수를 통해 실행한다.
                Graph(i[1])
        elif i[1] == t:
            if comList[i[0]] == 0:
                comList[i[0]] = 1
                Graph(i[0])

# 무조건 1부터 시작하기 때문에 1을 넣어준다.
Graph(1)
# 첫번째 컴퓨터는 세지 않기 때문에 1을 뺀 합의 개수를 출력한다.
print(sum(comList)-1)