/*
 * Complete the 'runningMedian' function below.
 *
 * The function is expected to return a DOUBLE_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function insertionSort(array) {
    const length = array.length;
      for (let i = 0; i < length; i++) {
          if (array[i] < array[0]) {
        //move number to the first position
        array.unshift(array.splice(i,1)[0]);
      } else {
        // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
        if (array[i] < array[i-1]) {
          //find where number should go
          for (var j = 1; j < i; j++) {
            if (array[i] >= array[j-1] && array[i] < array[j]) {
              //move number to the right spot
              array.splice(j,0,array.splice(i,1)[0]);
            }
          }
        }
      }
      }
      
      return array;
  }
  
  function findMedian(arr) {
      let median = 0;
      console.log("running arrr : ", arr)
      if (arr.length % 2) { // odd
          let mid = Math.floor(arr.length / 2)
          median = arr[mid];
          console.log("Odd : ", mid, median);
      } else { //even
          let mid = Math.floor(arr.length / 2);
          median = (arr[mid - 1] + arr[mid]) / 2;
          console.log("Even : ", mid - 1, mid, median);
      }
      return +(median.toFixed(1));
  }
  
  
  function runningMedian(a) {
      // Write your code here
      //console.log("Inp ", a);
      let arr = [];
      const medianarr = [];
      for (let i = 0; i < a.length; i++) {
          arr.push(a[i]);
          arr = insertionSort(arr, a[i]);
          let median = findMedian(arr);
          medianarr.push(median);
          console.log(median);
      }
  
      return medianarr;
  }