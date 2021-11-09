string = "abcbcadb"


def longest_substring(word):
    left = 0
    char_map = {}
    longest = 0

    for i, c in enumerate(word):
        if c in char_map and char_map[c] >= left:
            left = char_map[c] + 1

        char_map[c] = i
        longest = max(longest, i - left + 1)

    return longest


print(longest_substring(string))
