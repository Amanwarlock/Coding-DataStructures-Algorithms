import unittest
from library.binary_search_tree import BinarySearchTree
from level_order import level_order_bfs, level_order_dfs


class LevelOrderTest(unittest.TestCase):
    """
                    9
            4               20
        1       6       15      170
        """

    def test_level_order_bfs_one(self):
        arr = [9, 4, 1, 6, 20, 15, 170]
        tree = BinarySearchTree()
        for i, num in enumerate(arr):
            tree.insert(num)
        result = level_order_bfs(tree.root)
        print(f' BFS Level Order Result - 1: {result}')
        self.assertEqual(result, [[9], [4, 20], [1, 6, 15, 170]])

    """
                                20
                        10               30
                   5            15
                3       7           17             


        """

    def test_level_order_bfs_two(self):
        arr = [20, 10, 5, 3, 7, 30, 15, 17]
        tree = BinarySearchTree()
        for i, num in enumerate(arr):
            tree.insert(num)
        result = level_order_bfs(tree.root)
        print(f' BFS Level Order Result - 2: {result}')
        self.assertEqual(result, [[20], [10, 30], [5, 15], [3, 7, 17]])

    """
                        9
                4               20
            1       6       15      170
            """

    def test_level_order_Dfs_one(self):
        arr = [9, 4, 1, 6, 20, 15, 170]
        tree = BinarySearchTree()
        for i, num in enumerate(arr):
            tree.insert(num)
        result = level_order_dfs(tree.root)
        print(f' DFS Level Order Result - 1: {result}')
        self.assertEqual(result, [[9], [4, 20], [1, 6, 15, 170]])

    """
                            20
                    10               30
               5            15
            3       7           17             


    """

    def test_level_order_dfs_two(self):
        arr = [20, 10, 5, 3, 7, 30, 15, 17]
        tree = BinarySearchTree()
        for i, num in enumerate(arr):
            tree.insert(num)
        result = level_order_dfs(tree.root)
        print(f' DFS Level Order Result - 2: {result}')
        self.assertEqual(result, [[20], [10, 30], [5, 15], [3, 7, 17]])


if __name__ == '__main__':
    unittest.main()
