/**
 * Based on binary search and quick sort --modified and tailored as per  Hoare's quickselect algorithm;
 * LINK: https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

 const array = [1, 5, 2, 3, 2, 9, -1, 11, 6, 13, 15, 2];

 /**
  *     Test-1:  [1, 5, 2, 9, 1, 11, 6, 13, 15]
  *     
  *     Test-2: [1, 5, 2, 9, -1, 11, 6, 13, 15]
  * 
  *     Test-3: [1, 5, 2, 3, 2, 9, -1, 11, 6, 13, 15, 2]
  */

 const kToFind = 6;
 
 const swap = function (array, i, j) {
   const temp = array[i];
   array[i] = array[j];
   array[j] = temp;
 };
 
 const getPartition = function (nums, left, right) {
   let i = left;
 
   for (let j = left; j <= right; j++) {
     if (nums[j] <= nums[right]) {
       swap(nums, i, j);
       i++;
     }
   }
   return i - 1;
 };
 
 //Apply binary search using quick sort
 const quickSelect = function (nums, left, right, indexToFind) {
   const partitionIndex = getPartition(nums, left, right);
 
   if (partitionIndex === indexToFind) {
     return nums[partitionIndex];
   } else if (indexToFind < partitionIndex) {
     return quickSelect(nums, left, partitionIndex - 1, indexToFind);
   } else {
     return quickSelect(nums, partitionIndex + 1, right, indexToFind);
   }
 };
 
 var findKthLargest = function (nums, k) {
   const indexToFind = k-1;
   console.log("index t find ", indexToFind);
   let kth = quickSelect(nums, 0, nums.length - 1, indexToFind);

   let result = [];
    for(let i = 0; i < k; i++){
        result.push(nums[i]);
    }

   return result;
 };
 
 console.log(findKthLargest(array, kToFind))