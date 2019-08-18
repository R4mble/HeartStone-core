function fact(n)
    return n==0 and 1 or n * fact(n-1)
 end

print(fact(4))