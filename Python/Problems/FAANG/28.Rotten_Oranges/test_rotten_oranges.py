import unittest
from rotten_oranges import rotten_oranges


class RottenOrangesTest(unittest.TestCase):

    def test_with_rotten_orange_count_seven(self):
        matrix = [
            [2, 1, 1, 0, 0],
            [1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 1, 0, 0, 1]
        ]
        result = rotten_oranges(matrix)
        print(f"Time taken to rot all fresh oranges = {result}")
        self.assertEqual(result, 7)


if __name__ == '__main__':
    unittest.main()
