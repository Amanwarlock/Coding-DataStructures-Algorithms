def remove_dups(nums):
    if len(nums) == 0:
        return 0

    if len(nums) == 1:
        return 1

    left = 1

    for right in range(1, len(nums)):
        if nums[right] != nums[right - 1]:
            nums[left] = nums[right]
            left += 1

    return left
