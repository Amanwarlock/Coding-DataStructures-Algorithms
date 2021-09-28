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

const tree = new TreeNode(3);
tree.insert([
  6,
  1,
  9,
  2,
  null,
  4,
  null,
  5,
  null,
  null,
  null,
  null,
  8,
  null,
  null,
  null,
]);
// ------- Code to generate our binary tree -------

// ------- Our Solution - BFS -------
const levelOrderBFS = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const currentLevelValues = [];
    let length = queue.length,
      count = 0;

    while (count < length) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    result.push(currentLevelValues);
  }

  return result;
};

function levelOrderBFS2(root) {
  if (root === null) return [];

  let results = [];
  let currValues = [];
  let queue = [root];
  let currSize = queue.length;

  while (queue.length > 0) {
    let currNode = queue.shift();
    currValues.push(currNode.value);
    currSize--;

    if (currNode.left) {
      queue.push(currNode.left);
    }

    if (currNode.right) {
      queue.push(currNode.right);
    }
    // This condition should be at the last only; otherwise the last level will not be added as the queue becomes empty. It comes out of while loop;
    if (currSize <= 0) {
      results.push(currValues);
      currValues = [];
      currSize = queue.length;
    }
  }

  return results;
}

/**
 * @description: Efficient way
 */
function levelOrderBFS3(root) {
  if (!root) return [];
  
  let results = [];
  let currentLevel = [];
  
  currentLevel.push(root);

  while(currentLevel.length){
    results.push(currentLevel);
    let parent = currentLevel;
    currentLevel = [];
    for(let node of parent){
      if(node.left){
        currentLevel.push(node.left);
      }

      if(node.right){
        currentLevel.push(node.right);
      }

    }
  }

  return results;

}

console.log("BFS - 1 ::: ", levelOrderBFS(tree));

console.log("BFS - 2 ::: ", levelOrderBFS2(tree));

console.log("BFS - 3 ::: ", levelOrderBFS3(tree));

//------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Level Order - DFS
 */

function levelOrderDFS(root) {
  let result = [];
  dfs(root, result, 0);
  return result;
}

function dfs(node, result, level = 0) {
  if (node === null) return;

  let currLevelArr;

  if (level === result.length) {
    // if current level and size of final array is equal or current level is greater than arr , means it has not seen that level so far;
    currLevelArr = [];
    result.push(currLevelArr);
  } else {
    currLevelArr = result[level];
  }

  currLevelArr.push(node.value);

  dfs(node.left, result, level + 1);
  dfs(node.right, result, level + 1);
}

console.log("DFS ::: ", levelOrderDFS(tree));
