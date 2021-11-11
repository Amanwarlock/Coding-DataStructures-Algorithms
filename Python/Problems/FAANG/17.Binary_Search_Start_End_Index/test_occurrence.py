import unittest
from occurrence import occurrence


class OccurrenceTest(unittest.TestCase):

    def test_with_occurrence_of_5_is_3(self):
        arr = [1, 3, 3, 5, 5, 5, 8, 9]
        target = 5
        result = occurrence(arr, target)
        print(f'Occurrence of {target}: {result}')
        self.assertEqual(result, 3)


if __name__ == '__main__':
    unittest.main()
