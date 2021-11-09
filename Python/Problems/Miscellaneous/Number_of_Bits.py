def num_of_bits(x):
    num = 0
    while x:
        num += 1 & x
        x >>= 1
    return num


print(num_of_bits(1100))