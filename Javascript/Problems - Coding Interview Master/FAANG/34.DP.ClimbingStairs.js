/**
 * @description https://leetcode.com/problems/min-cost-climbing-stairs/
 * 
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
 */



/*
Recurrence relation:

minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
minCost(0) = cost[0];
minCost(1) = cost[1];

*/

/**
 * @description TOP-DOWN Approach 
 * T: O(2^n)
 * S: O(n)
 */
const minCostClimbingStairs = function(cost) {
    const n = cost.length;
    return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
  };
  
  const minCost = function(i, cost) {
    if(i < 0) return 0;
    if(i === 0 || i === 1) return cost[i]; // our intial steps can either be from 0 index or 1 index in cost array. For initial steps cost is known as there is no previous dependency
    return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
  }
  
  console.log(minCostClimbingStairs([20, 15, 30, 5]))



  /**
   * @description TOP-DOWN with Memoization 
   */
  const minCostClimbingStairs2 = function(cost) {
    const n = cost.length;
    const dp = [];
    return Math.min(minCost2(n - 1, cost, dp), minCost2(n - 2, cost, dp));
  };
  
  const minCost2 = function(i, cost, dp) {
    if(i < 0) return 0;
    if(i === 0 || i === 1) return cost[i]; // our intial steps can either be from 0 index or 1 index in cost array. For initial steps cost is known as there is no previous dependency
    
    if(dp[i] !== undefined) {
      return dp[i];
    }
    dp[i] = cost[i] + Math.min(minCost2(i - 1, cost, dp), minCost2(i - 2, cost, dp));
    return dp[i];
  }
  
  console.log(minCostClimbingStairs2([20, 15, 30, 5]))


  /**
   * @description BOTTOM-UP - suboptimal
   * T: O(n)
   * S: O(n)
   */
   const minCostClimbingStairs3 = function(cost) {
    const n = cost.length;
    if(n === 0) return 0; // when cost array is empty
    if(n === 1) return cost[0]; // when cost array is of size 1;
    const dp = []; // storing costs of all the steps; sub optimal
    for(let i = 0; i < n; i++) {
      if (i < 2) {
        dp[i] = cost[i];
      } else {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
      }
    }
  
    return Math.min(dp[n - 1], dp[n - 2]);
  };
  
  console.log(minCostClimbingStairs3([20, 15, 30, 5]))



  /**
   * @description BOTTOM UP - Best optimal solution
   * T: O(n)
   * S: O(1)
   */
   const minCostClimbingStairs4 = function(cost) {
    const n = cost.length;
    if(n === 0) return 0; // when cost array is empty
    if(n === 1) return cost[0]; // when cost array is of size 1;
    let dpOne = cost[0];
    let dpTwo = cost[1];
    for(let i = 2; i < n; i++) {
      const current = cost[i] + Math.min(dpOne, dpTwo);
      dpOne = dpTwo;
      dpTwo = current;
    }
  
    return Math.min(dpOne, dpTwo);
  };
  
  console.log(minCostClimbingStairs4([20, 15, 30, 5]))