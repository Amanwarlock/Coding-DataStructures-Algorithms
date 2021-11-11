
def get_height(node):
    if node is None:
        return -1

    return max(get_height(node.left), get_height(node.right)) + 1
