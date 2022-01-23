N = int(input())
sum =  0

if N % 5 == 0 :
    sum += int(N / 5)
    print(sum)

else :

    if N < 5 :

        if N == 3 :
            print(1)
        
        else : 
            print(-1)

    else :
        A = int(N / 5)

        for i in range(A, -1, -1) :
            B = N - (i * 5)

            if B % 3 == 0 :
                sum += (int(B / 3) + i)
                print(sum)
                break

            elif i == 0 and B % 3 != 0 :
                print(-1)
                break

            else :
                continue 