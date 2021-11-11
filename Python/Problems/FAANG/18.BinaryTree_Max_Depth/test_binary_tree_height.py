import unittest
from library.binary_search_tree import BinarySearchTree
from binary_tree_height import get_height


class BinaryTreeHeightTest(unittest.TestCase):

    """
                9
        4               20
    1       6       15      170
    """
    def test_of_tree_with_height_3(self):
        arr = [9, 4, 1, 6, 20, 15, 170]
        tree = BinarySearchTree()
        for i, num in enumerate(arr):
            tree.insert(num)
        result = get_height(tree.root)
        print(f'Height of Tree: {result}')
        self.assertEqual(result, 2)

    """
                        20
                10               30
           5            15
        3       7           17             
                        
                
    """
    def test_of_tree_two(self):
        arr = [20, 10, 5, 3, 7, 30, 15, 17]
        tree = BinarySearchTree()
        for i, num in enumerate(arr):
            tree.insert(num)
        result = get_height(tree.root)
        print(f'Height of Tree: {result}')
        self.assertEqual(result, 3)


if __name__ == '__main__':
    unittest.main()

