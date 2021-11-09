class NumberOfIslands:
    directions = [
        [-1, 0],  # up
        [0, 1],  # right
        [1, 0],  # down
        [0, -1]  # left
    ]

    @staticmethod
    def number_of_islands_bfs(matrix):

        island_count = 0

        for row in range(len(matrix)):
            for col in range(len(matrix[0])):
                if matrix[row][col] == 1:
                    island_count += 1
                    queue = [[row, col]]

                    while len(queue) > 0:
                        curr = queue.pop(0)
                        curr_row = curr[0]
                        curr_col = curr[1]

                        matrix[curr_row][curr_col] = 0

                        for i, curr_dir in enumerate(NumberOfIslands.directions):
                            next_row = curr_row + curr_dir[0]
                            next_col = curr_col + curr_dir[1]

                            if next_row < 0 or next_row >= len(matrix) or next_col < 0 or next_col >= len(matrix[0]):
                                continue

                            if matrix[next_row][next_col] == 1:
                                queue.append([next_row, next_col])

        return island_count

    @staticmethod
    def number_of_islands_dfs(matrix):

        islands_count = 0

        for row in range(len(matrix)):
            for col in range(len(matrix[0])):
                if matrix[row][col] == 1:
                    islands_count += 1
                    NumberOfIslands.dfs(matrix, row, col)

        return islands_count

    @staticmethod
    def dfs(matrix, row, col):
        if row < 0 or col < 0 or row >= len(matrix) or col >= len(matrix[0]):
            return

        if matrix[row][col] == 1:
            matrix[row][col] = 0
            for i, curr_dir in enumerate(NumberOfIslands.directions):
                NumberOfIslands.dfs(matrix, row + curr_dir[0], col + curr_dir[1])
