nums_array = [1, 3, 7, 9, 2]
target_to_find = 11


def two_sums(arr, target):
    nums_map = {}
    for i, num in enumerate(arr):
        if num in nums_map:
            return [nums_map[num], i]
        else:
            num_to_find = target - num
            nums_map[num_to_find] = i

    return None


print(two_sums(nums_array, target_to_find))
