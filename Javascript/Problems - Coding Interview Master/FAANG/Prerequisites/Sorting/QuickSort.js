const numbers =   [
    5,  2,  7, 8,
   -2, 25, 25
  ]//[99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  
  function quickSort(array, left, right){
    const len = array.length; 
    let pivot;
    let partitionIndex;
  
    if(left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);
      
      //sort left and right
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
    }
    return array;
  }
     
  function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;
  
    for(let i = left; i < right; i++) {
      if(array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
  }
  
  function swap(array, firstIndex, secondIndex){
      var temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
  }
  
  //Select first and last index as 2nd and 3rd parameters
  quickSort(numbers, 0, numbers.length - 1);
  console.log(numbers);
  
  
  //-------------------------------------------------------------------------------------------------------
  
  /**
   * ALTERNATE METHOD;
   */
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
  