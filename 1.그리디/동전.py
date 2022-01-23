n, k = map(int, input().split())
result = 0
data = []

for i in range(n):
    num = int(input())
    data.append(num)

for i in range(n-1, -1, -1):
    if data[i] > k:
        continue
    else :
        result += k//data[i]
        k %= data[i]
        if k == 0 :
            break

print(result)

# 최적 풀이/52ms

# N, K = map(int, input().split())

# data = []
# for i in range(N) : 
# 	data.append(int(input()))

# result = 0
# while K > 0 :
#     coin = data.pop()   # 리스트 마지막 인덱스 값을 반환 후 삭제
#     ans += K // coin
#     K %= coin

# print(result)
