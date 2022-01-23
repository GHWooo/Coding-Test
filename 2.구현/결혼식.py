import sys
input = sys.stdin.readline

n = int(input())
m = int(input())

data = []

for _ in range(m):
    data.append(list(map(int,input().split())))

data.sort()
f_1 = []
re = []

for i in data:
    if i[0] == 1:
        if i[1] not in f_1:
            f_1.append(i[1])
            re.append(i[1])
    else:
        for k in f_1:
            if k in i:
                if i[0] not in re:
                    re.append(i[0])
                elif i[1] not in re:
                    re.append(i[1])

print(len(re))


# 최적풀이

# import sys
# input = sys.stdin.readline

# n = int(input())
# m = int(input())

# friends = [[] for _ in range(n+1)]
# for _ in range(m):
#     a, b = map(int, input().split())
#     friends[a].append(b)
#     friends[b].append(a)

# invite = set()

# for friend in friends[1]:
#     invite.add(friend)
#     for f_o_f in friends[friend]:
#         invite.add(f_o_f)

# print(len(invite)-1)
