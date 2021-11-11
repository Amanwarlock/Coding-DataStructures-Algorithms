
def occurrence(arr, target):

    if len(arr) == 0:
        return 0

    first_pos = binary_search(arr, 0, len(arr) - 1, target)

    if first_pos == -1:
        return 0

    start_pos = first_pos
    end_pos = first_pos
    temp_1 = -1
    temp_2 = -1

    while start_pos != -1:
        temp_1 = start_pos
        start_pos = binary_search(arr, 0, start_pos - 1, target)

    start_pos = temp_1

    while end_pos != -1:
        temp_2 = end_pos
        end_pos =  binary_search(arr, end_pos + 1, len(arr)-1, target)

    end_pos = temp_2

    return end_pos - start_pos + 1


def binary_search(arr, start, end, target):

    while start <= end:
        mid = (start + end) // 2
        guess = arr[mid]

        if guess == target:
            return mid
        elif target < guess:
            end = mid - 1
        else:
            start = mid + 1

    return -1
