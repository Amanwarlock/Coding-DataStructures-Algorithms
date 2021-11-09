directions = [
    [-1, 0],  # up
    [0, 1],  # right
    [1, 0],  # down
    [0, -1]  # left
]

ROTTEN = 2
FRESH = 1
EMPTY = 0


def rotten_oranges(matrix):
    queue = []
    fresh_oranges_count = 0
    minutes = 0

    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            if matrix[row][col] == ROTTEN:
                queue.append([row, col])

            if matrix[row][col] == FRESH:
                fresh_oranges_count += 1

    current_len = len(queue)

    while len(queue) > 0:
        if current_len == 0:
            minutes += 1
            current_len = len(queue)

        current_pos = queue.pop(0)
        current_len -= 1

        for i, curr_dir in enumerate(directions):
            next_row = curr_dir[0] + current_pos[0]
            next_col = curr_dir[1] + current_pos[1]

            if next_row < 0 or next_col < 0 or next_row >= len(matrix) or next_col >= len(matrix[0]):
                continue

            if matrix[next_row][next_col] == FRESH:
                matrix[next_row][next_col] = ROTTEN
                fresh_oranges_count -= 1
                queue.append([next_row, next_col])

    if fresh_oranges_count == 0:
        return minutes

    return -1
