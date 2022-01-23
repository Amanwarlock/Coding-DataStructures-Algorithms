let inputLines = ["5", "3 1 7 5 4"];

class NodeT {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.heightLft = 0;
    this.heightRght = 0;
  }

  insert(value) {
    const newNode = new NodeT(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          // go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  getHeight(node) {
    if (node.left) {
      this.heightLft += 1;
    }
    if (node.right) {
      this.heightRght += 1;
    }
    const incleft = () => this.heightLft +=1;
    const incright = () => this.heightRght +=1;
    this.traversePreorder(node.left, incleft, []);
    this.traversePreorder(node.right, incright, []);

    return this.heightLft > this.heightRght ? this.heightLft : this.heightRght;
  }

  traversePreorder(node, fn, list) {
    if (node) {
      list.push(node.value);
      if (node.left || node.right) {
        fn();
      }
      if (node.left) {
        this.traversePreorder(node.left, fn, list);
      }
      if (node.right) {
        this.traversePreorder(node.right, fn, list);
      }
    }
  }

  printTree(node) {
    let tree = new NodeT(node.value);
    tree.left = node.left === null ? null : this.printTree(node.left);
    tree.right = node.right === null ? null : this.printTree(node.right);
    return tree;
  }
}

function main() {
  // Enter your code here
  const n = +inputLines[0]; // number of nodes;
  const arr = inputLines[1].split(" ").map((n) => +n);

  const myBinaryTree = new BinaryTree();

  for (let i = 0; i < arr.length; i++) {
    myBinaryTree.insert(arr[i]);
  }
  let height = myBinaryTree.getHeight(myBinaryTree.root);
  console.log(height);
  //console.log(JSON.stringify(myBinaryTree.printTree(myBinaryTree.root)));
}

main();
