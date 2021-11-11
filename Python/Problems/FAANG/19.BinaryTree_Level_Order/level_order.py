def level_order_bfs(root):
    if root is None:
        return []

    result = []
    queue = [root]

    while len(queue) > 0:
        current_level = []
        count = 0
        current_size = len(queue)

        while count < current_size:
            current = queue.pop(0)
            count += 1
            current_level.append(current.data)

            if current.left is not None:
                queue.append(current.left)

            if current.right is not None:
                queue.append(current.right)

        result.append(current_level)

    return result


def level_order_dfs(root):
    if root is None:
        return []

    result = []
    dfs(root, result, 0)
    return result


def dfs(node, result, level):
    if node is None:
        return

    arr = None

    if level == len(result):
        arr = []
        result.append(arr)
    else:
        arr = result[level]

    arr.append(node.data)

    dfs(node.left, result, level+1)
    dfs(node.right, result, level+1)
