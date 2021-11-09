string1 = "ab#z"
string2 = "az#z"


def backspace_compare(str1, str2):
    p1 = len(str1) - 1
    p2 = len(str2) - 1
    while p1 >= 0 or p2 >= 0:
        if str1[p1] == '#' or str2[p2] == '#':
            if str1[p1] == '#':
                backcount = 2
                while backcount > 0:
                    p1 -= 1
                    backcount -= 1
                    if str1[p1] == '#':
                        backcount += 2
            elif str2[p2] == '#':
                backcount = 2
                while backcount > 0:
                    p2 -= 1
                    backcount -= 1
                    if str2[p2] == '#':
                        backcount += 2
        else:
            if str1[p1] != str2[p2]:
                return False
            else:
                p1 -= 1
                p2 -= 1

    return True


print(backspace_compare(string1, string2))