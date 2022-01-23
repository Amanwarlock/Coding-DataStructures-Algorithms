/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(values) {
      const queue = [this];
      let i = 0;
      while (queue.length > 0) {
        let current = queue.shift();
        for (let side of ["left", "right"]) {
          if (!current[side]) {
            if (values[i] !== null) {
              current[side] = new TreeNode(values[i]);
            }
            i++;
            if (i >= values.length) return this;
          }
          if (current[side]) queue.push(current[side]);
        }
      }
      return this;
    }
  }
  
  const tree = new TreeNode(1);
  tree.insert([2,3,4,5,null,6,null,7,null,null,null,null,8,null,null,null]);
  // ------- Code to generate our binary tree -------
  
/**
 * 
 * @description 
 *  For this solution we need to priotize the right side, so we modify pre, inorder and post order traversals as below:
 *  1. Pre-order - NRL (NLR)
 *  2. In-order - RNL (LNR)
 *  3. Post-order - RLN (LRN)
 */

  // ------- Our Solution -------
  /**
   * Pre-order with modified NRL is implemented in this function (solution)
   */
  const dfs = (node, currentLevel, result) => {
    if(!node) return;
    if(currentLevel >= result.length) { 
      result.push(node.value);
    }
    // Pre-order DFS traversal in NRL order prioritizing right side of the tree
    if(node.right) {
      dfs(node.right, currentLevel + 1, result);
    }
    
    if(node.left) {
      dfs(node.left, currentLevel + 1, result);
    }
  }
  
  const rightSideViewDFS = function(root) {
    const result = [];
    
    dfs(root, 0, result);
    return result;
  };
  
  console.log(rightSideViewDFS(tree))