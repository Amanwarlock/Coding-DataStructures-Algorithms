arr = ["apple", "banana", "carrot", "ele", "duck", "papel", "tarroc", "cudk", "eel", "lee"]


def sort_chars(c):
    return ''.join(sorted(c))


def sort_helper(a, b):
    a = sort_chars(a)
    b = sort_chars(b)

    return a - b


def group_anagrams1(anagrams):
    return sorted(anagrams, key=sort_chars)


print(f"Result -1 : {group_anagrams1(arr)}")


def group_anagrams2(anagrams):
    my_dict = {}

    for item in anagrams:
        char = sort_chars(item)
        if char not in my_dict:
            my_dict[char] = []

        my_dict[char].append(item)

    index = 0
    for key in my_dict.keys():
        for val in my_dict[key]:
            anagrams[index] = val
            index += 1

    return anagrams


print(f"Result -2 : {group_anagrams2(arr)}")