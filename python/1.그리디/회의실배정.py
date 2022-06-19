from operator import itemgetter
from sys import stdin

n = int(input())
data = []
count = 0

for i in range(n):
    data.append(list(map(int,stdin.readline().split())))

data.sort(key=itemgetter(1))
e_point = data[n-1][1]
data.sort(reverse = True)

for i in range(n):
    if data[i][1] <= e_point:
        count += 1
        e_point = data[i][0]

print(count)

# 최적

# import sys
# input = sys.stdin.readline 
# import time

# def solve():
#     N = int(input())
#     dic = {} 
#     for _ in range(N):
#         start, end = map(int, input().split())
#         if dic.get(start): 
#             dic[start].append(end)  # min(dic.get(start, float('inf')), end)
#         else:
#             dic[start] = [end] 
    
#     for k in dic.keys():
#         dic[k].sort()
        
#     keys = sorted(dic.keys())
#     end = 0
#     count = 0
#     for key in keys:
#         for e in dic[key]:
#             if e < end:
#                 end = e
#             elif key >= end:
#                 count += 1
#                 end = e

#     print(count)
# start = time.time()

# solve()