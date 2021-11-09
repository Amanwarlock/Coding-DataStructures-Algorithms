import unittest
from matrix_no_of_islands import NumberOfIslands


class TestNumberOfIslands(unittest.TestCase):

    def test_when_no_of_islands_is_two(self):
        matrix = [
            [1, 1, 1, 0, 0],
            [1, 1, 1, 0, 1],
            [0, 1, 0, 0, 1],
            [0, 0, 0, 1, 1]
        ]
        result = NumberOfIslands.number_of_islands_bfs(matrix)
        print(f'Result BFS = {result}')
        self.assertEqual(result, 2)

    def test_no_of_islands_dfs_with_two_islands(self):
        matrix = [
            [1, 1, 1, 0, 0],
            [1, 1, 1, 0, 1],
            [0, 1, 0, 0, 1],
            [0, 0, 0, 1, 1]
        ]
        result = NumberOfIslands.number_of_islands_dfs(matrix)
        print(f'Result DFS = {result}')
        self.assertEqual(result, 2)


if __name__ == '__main__':
    unittest.main()
