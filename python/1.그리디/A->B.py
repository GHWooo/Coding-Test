# A->B로 가는 동안의 연산은 알 수 없지만
# 역으로 간다면 어떤 연산을 했는지 유추 가능 -> 역으로 B->A의 연산 횟수를 계산
# 연산이 불가한 경우를 찾는게 중요하다고 생각

import sys

A, B = map(int, sys.stdin.readline().split())
# 최소 연산횟수 +1 값을 출력해야하기 때문에 1부터 시작
count = 1

while True:
    # 연산이 가능한 경우
    # 역으로 계산했을경우 B가 결국 A와 같아지면 반복문 탈출
    if B == A:
        break
    # 연산이 불가능한 경우
    # B가 홀수인데 1의 자리가 '1'이 아니거나, B가 A보다 작아진다면 -1을 반환하고 반복문 탈출
    elif (B % 2 == 1 and B % 10 != 1) or B < A:
        count = -1
        break
    # 연산은 가능하나 아직 끝나지 않은 경우
    else:
        # 짝수라면 2가 곱해진 것이기 때문에 2로 나눠주고 연산횟수 +1
        if B % 2 == 0:
            B = int(B / 2)
            count += 1
        # 1의 자리가 '1' 이라면 10으로 나눠줘서 1을 없애고 연산횟수 +1
        # 위에서 다른 홀수의 경우를 차단했기 때문에 다른 홀수는 올 수 없다
        else:
            B = int(B / 10)
            count += 1

# 결과 출력
print(count) 



# 최적 풀이

# n,m = map(int,input().split())
# count=0
# while n!=m:
#     if n>m:
#         count=-2
#         break
#     elif str(m)[-1]=='1':
#         m=m//10
#         count+=1
#     elif m%2==0:
#         m=m//2
#         count+=1
#     else:
#         count=-2
#         break
# print(count+1)