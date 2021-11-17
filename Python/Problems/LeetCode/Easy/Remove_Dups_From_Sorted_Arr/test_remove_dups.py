import unittest
from remove_dups import remove_dups


class TestRemoveDups(unittest.TestCase):

    def test_with_arr_size_three(self):
        result = remove_dups([1, 1, 2])
        print("result ", result)
        self.assertEqual(result, 2)


if __name__ == '__main__':
    unittest.main()


