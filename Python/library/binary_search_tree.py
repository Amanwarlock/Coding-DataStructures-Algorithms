
class TreeNode:

    data = None
    left = None
    right = None
    parent = None

    def __init__(self, val):
        self.data = val

    def insert(self, val):
        if val <= self.data:  # go left
            if self.left is not None:
                self.left.insert(val)
            else:
                self.left = TreeNode(val)
        else:  # go right
            if self.right is not None:
                self.right.insert(val)
            else:
                self.right = TreeNode(val)

"""
    - In Binary search tree nodes are inserted according to some strict condition
    - All nodes <= to current node are inserted left
    - Node > than current node are inserted to the right
"""
class BinarySearchTree:

    root = None

    def insert(self, val):
        if self.root is None:
            self.root = TreeNode(val)
        else:
            self.root.insert(val)
