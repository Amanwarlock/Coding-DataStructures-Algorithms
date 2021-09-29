/**
 * @description https://leetcode.com/problems/network-delay-time/
 * 
 * You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is 
 * the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive 
the signal, return -1.
 */



const t = [[1, 4, 2], [1, 2, 9], [4, 2, -4], [2, 5, -3], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]]


/**
 * Bellman-Ford : Used for DAG with negative weights and when no negative cycles present; It uses dynamic programming
 * Bellman-ford can also be used to detect negative cycles. If question asked to detect negative cycles, use bellman ford
 * Bellman-ford can detect negative cycle, but it does not work when there are negative cycles
 * T: O(N*E)
 * S: O(N)
 */
var networkDelayTime = function(times, N, k) {
  const distances = new Array(N).fill(Infinity);
  
  distances[k - 1] = 0;
  for(let i = 0; i < N - 1; i++) { // bellman ford requires to maintain information of all the nodes in the graph, where as Disjkstra only need information of neighbors
    // So in bellman ford, if there are N nodes, we need to iterate N-1 times
    // Also while iterating we need to track if in current or previous iteration if value in distance array is updated, if value is not updated in curr iteration, then stop
    let count = 0; // to keep tack if any value is updated in the distances array; if nothing updated then break
    for(let j = 0; j < times.length; j++) { // adjacency list creation is skipped to save space
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];
      
      if(distances[source - 1] + weight < distances[target - 1]) {
        distances[target - 1] = distances[source - 1] + weight;
        count++;
      }
    }
    
    if(count === 0) break; // If no value is updated in distances array with the prev iteration then no need to check for N-1 nodes, all distances are minimized, break out
  }
  
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

console.log(networkDelayTime(t, 5, 1))