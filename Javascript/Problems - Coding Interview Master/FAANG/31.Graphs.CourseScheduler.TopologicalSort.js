/**
 * @description https://leetcode.com/problems/course-schedule/
 * 
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] 
 * indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
 * 
 *
 * Three popular algorithms for graph problems are:
 *  1. Topological sort
 *  2. Dijkstra's algorithm
 *  3. Bellman-ford algorithm
 */



const p1 = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

/**
 * @description Topological sort with adjacency list
 *  T: O(n^2)
 *  S: O(n^2)
 */
const canFinishWithAdj = function(n, prerequisites) {
  const inDegree = new Array(n).fill(0); // Dependency
  const adjList = inDegree.map(() => []);
  
  for(let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0])
  }
  
  const stack = [];
  
  for(let i = 0; i < inDegree.length; i++) {
    if(inDegree[i] === 0) {
      stack.push(i);
    }
  }
  
  let count = 0; // to check if we covered all the nodes; if not all nodes then its a disjoint or disconnected grapjh with two separated or there is a cycle
  
  while(stack.length) {
    const current = stack.pop();
    count++;
    
    const adjacent = adjList[current]; // get the children of the course

    for(let i = 0; i < adjacent.length; i++) {
      const next = adjacent[i];
      inDegree[next]--;
      if(inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }
  
  return count === n;
};

canFinishWithAdj(6, p1)

//------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * @description Alternate method Topological sort with no adjaceny list
 *  T: O(n^2)
 *  S: O(n^2)
 */

 const p2 = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

 const canFinish = function(n, prerequisites) {
   const inDegree = new Array(n).fill(0);
   
   for(let i = 0; i < prerequisites.length; i++) {
     inDegree[prerequisites[i][0]]++;
   }
   
   const stack = [];
   
   for(let i = 0; i < inDegree.length; i++) {
     if(inDegree[i] === 0) {
       stack.push(i);
     }
   }
   
   let count = 0;
   
   while(stack.length) {
     const current = stack.pop();
     count++;
     
     for(let i = 0; i < prerequisites.length; i++) {
       const pair = prerequisites[i];
       if(pair[1] === current) {
         inDegree[pair[0]]--;
         if(inDegree[pair[0]] === 0) {
           stack.push(pair[0]);
         }
       }
     }
   }
   
   return count === n;
 };
 
 
 canFinish(6, p2)


 /**
  * @description Alternate 3  using naive BFS approach
  * 
  */

  const p3 = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

  const canFinish2 = function(n, prerequisites) {
    const adjList = new Array(n).fill(0).map(() => []);
    
    for(let i = 0; i < prerequisites.length; i++) {
      const pair = prerequisites[i];
      adjList[pair[1]].push(pair[0])
    }
  
    for(let v = 0; v < n; v++) {
      const queue = [];
      const seen = {};
      for(let i = 0; i < adjList[v].length; i++) {
        queue.push(adjList[v][i]);
      }
      
      while(queue.length) {
        const current = queue.shift();
        seen[current] = true;
  
        if(current === v) return false;
        const adjacent = adjList[current];
        for(let i = 0; i < adjacent.length; i++) {
          const next = adjacent[i];
          if(!seen[next]) {
            queue.push(next);
          }
        }
      }
    }
  
    return true;
  };
  
  canFinish2(6, p3)
  