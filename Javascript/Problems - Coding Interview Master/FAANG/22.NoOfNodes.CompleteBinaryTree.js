/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
                      
                        N                 2^0 = 1 node
                N               N         2^1 = 2
            N       N       N       N     2^2 = 4
          N   N   N   N   N   N   N   N   2^3 = 8  

          h = 4

          2^(h-1) - 1 = upper count

          Upper count = (1 + 2 + 4 = 7 nodes) (2^3 - 1 = 8 - 1 = 7)

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
  
  const tree = new TreeNode();
  tree.insert([1,1,1,1,1,1,1,1,1,1,1, null, null, null]);
  
  // ------- Code to generate our binary tree -------
  
  // ------- Our Solution -------
  
  const getTreeHeight = function(root) {
    let height = 0;
    while(root.left !== null) {
      height++;
      root = root.left;
    }
    
    return height;
  }
  
  const nodeExists = function(idxToFind, height, node) {
    let left = 0, right = Math.pow(2, height) - 1, count = 0;
    
    while(count < height) { // contiue only till as deep as the tree's height; as we want to decide whether to turn left or right as long as we are within the height;
      const midOfNode = Math.ceil((left + right) / 2);
      
      if(idxToFind >= midOfNode) {// go right
        node = node.right;
        left = midOfNode;
      } else {
        node = node.left;
        right = midOfNode - 1;
      }
      
      count++;
    }
    
    return node !== null;
  }
  

  /**
   *  T - O(logN) 
   *  S - O(logN)
   */
  const countNodes = function(root) {
    if(!root) return 0;
    
    const height = getTreeHeight(root);
    
    if(height === 0) return 1; // If there is only one node, then no need to proceed, count of nodes will be only 1
    
    const upperCount = Math.pow(2, height) - 1 // No of nodes in upper level except the very last level;
    
    let left = 0, right = upperCount;
    
    while(left < right) {
      const idxToFind = Math.ceil((left + right) / 2); // round up
      
      if(nodeExists(idxToFind, height, root)) {
        left = idxToFind; // don't lloose the reference to left, as this is the porinter of no no nodes in last level
      } else {
        right = idxToFind - 1;
      }
    }
    
    return upperCount + left + 1;
  };
  
  console.log(countNodes(tree))