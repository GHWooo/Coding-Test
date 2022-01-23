N, M = map(int, input().split())
j = int(input())

result = 0
loc_l = 1
loc_r = M

while j != 0:
    x = int(input())

    if loc_r < x:
        t = x - loc_r
        result += t

        loc_l += t
        loc_r += t
    
    elif loc_l > x:
        t = loc_l - x
        result += t

        loc_l -= t
        loc_r -= t

    j -= 1

print(result)