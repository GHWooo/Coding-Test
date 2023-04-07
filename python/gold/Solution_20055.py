N,K = map(int,input().split())

be = list(map(int,input().split()))
ro=[0]*N

count=0

while(be.count(0)<K):
    count+=1
    #회전
    a=be.pop()
    be.insert(0,a)

    ro.pop()
    ro.insert(0,0)

    #로봇 이동
    ro[N - 1] = 0

    for i in range(N-2,0,-1):
        if ro[i] and be[i+1] and (not ro[i+1]):
            ro[i]=0
            ro[i+1]=1
            be[i+1] = max(0,be[i+1]-1)

    ro[N - 1] = 0

    #로봇 추가
    if be[0] and (not ro[0]):
        ro[0]=1
        be[0] = max(0,be[0]-1)

print(count)
