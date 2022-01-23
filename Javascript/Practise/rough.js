Take a sorted array of n integers. Assume k of its elements have been modified. Sort the resulting array. k is an unknown.

Example:
For n=5 and k=2 : 1, 2, 3, 4, 5 → 1, 100, 3, 0, 5; 0 <= k <= n (length of array)


Input: 1, 100, 3, 0, 5
Output: 0, 1, 3, 5, 100




1, 2, 3, 4, 5    k = 2


1, 100, 3, 0, 5   1  100, 3,  0, 5 

100, 2, 3, 4, -1





left  --> left start , left end

middle -->  sorting m and n th --> should sort my entire array


right --> right start , right end

--> n log n --- the k = n


Brute force --- quick sort --> 


  LEFT END < min(middle elements + right start)

  right start > max (middle elements + left start) 



merging the sorted --> [100], [2, 3, 4] [-1]


function sortModifiedArray(nums){
  
    if(nums === null || nums.length === 0 ) return nums;
  
    if(nums.length === 1) return nums;
  
    let chunks = []; K ~= n
  
    let results = [];  n // length nums
  
    let startIndex = 0;
  
  //100, 2, 3, 4, -1
    for(let i = 1; i <= nums.length; i++){
          
          if(nums[i] < nums[i-1]){ // i-1;
              let subArr = nums.slice(startIndex, i); // exlusice with i ,, 
              startIndex = i;
              chunks.push(subArr); 
          } 
          
     }
  
     results = chunks[i];
  
    for(let i = 1 ; i < chunks.length ; i ++){ // k chunks 
        
        results = mergeSortedArr(results,  chunks[i]); // O(n)
        
    }
  
  
    return results;
}


function mergeSortedArrs(result, num) {
    // TODO: merging sorted arrays using two pointer twchnique
    
      let indexA= 0;
  
      let indexB = 0;
  
      let final = [];
  
      while(indexA < result.length || indexB < num.length){
            
          if(indexB >= nums.length || result[indexA] < nums[indexB]){
               final.push(result[indexA]);
                indexA ++;
          }else if (indexB < num.length){ // not out of bound
            final.push(num[indexB]);
             indexB++;
          } 
      
      }
  
    return final;
      
  }




O(n) + O(n) + O(n log * n) ~= O(n)
 results



 /////------------------------------------------------------------------------------------------------------------------------------------


 // ([2, 4, 6], 2) -> [3, 5]


// Integers -- +ve or -ve

// [] --> 0



/*
    1. sliding window
    
    2. compute avg --> [size 10] --> sort --> even size -- mid - mid-1 / 2 --> if odd return mid element
      
        // heap min - max
    
      worst case -- k (window size) === length of array -> (o(n))
      
      
      results --- floating; ---> 
      
      ([2, 4, 6, 8], 2) -> [3, 5]
           L  R
          
          R - -> iterates only once
          
          L --> [size k] 
*/



function runningAvg(nums, k){
  if(nums === null || nums.length === 0) return 0;

  if(nums.length === 1) return nums;

  let left = 0;

  let result = [];  // [3]   

  let runningSum = 0; 

  for(let right = 0; right < nums.length; right++){
      
      let windowSize = right - left + 1; // 2
    
      runningSum += nums[right]; // 10
    
      if(windowSize === k){
          let avg = (runningSum / k); // 3
          result.push(avg);
          runningSum -= nums[left];
          left += 1;
      }  
        
  
  }

return result;

}


/*
  T: O(n)
  
  S: O(n)
*/




// ("2*3+4") -> 10
// result = 10;
// stack [+]   a = 6 b = 4 

// ("2+3*4") -> 10 // PEMDAS --- s1 [2, ]   s2 [+]

