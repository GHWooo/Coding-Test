import sys
from collections import deque

N = int(sys.stdin.readline())

list = [0] * (N+1)

st = deque()
st.append(N)

list[N] = 1

def dynamic(N, list, st):
    while st:
        subst = st.popleft()

        if subst % 3 == 0 and list[subst // 3] == 0:
            if subst // 3 == 1:
                print(list[subst])
                break 
            else:
                list[subst // 3] = list[subst] + 1
                st.append(subst // 3)
        
        if subst % 2 == 0 and list[subst // 2] == 0:
            if subst // 2 == 1:
                print(list[subst])
                break
            else:
                list[subst // 2] = list[subst] + 1
                st.append(subst // 2)
        
        if list[subst - 1] == 0:
            if subst - 1 == 1:
                print(list[subst])
                break
            else:
                list[subst -1] = list[subst] + 1
                st.append(subst -1)

if N == 1:
    print(0)
else:
    dynamic(N, list, st)