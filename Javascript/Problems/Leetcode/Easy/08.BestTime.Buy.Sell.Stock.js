/**
 * @description https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
 * 
 * SOLUTION: https://www.youtube.com/watch?v=1pkOgXD63yU
 */



/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
   
    let left = 0; // Buying price
    let right = 1; // Selling Price
    let maxProfit = 0;
    
   while(right < prices.length){
        
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        }else{
            left = right;
        }
        
        right++;
    }
    
    return maxProfit;
};