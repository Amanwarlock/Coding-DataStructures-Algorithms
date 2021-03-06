function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }


  function mergeSortedArrays2(arr1, arr2){
    if(arr1.length === 0) return arr2;

    if(arr2.length === 0 ) return arr1;

    merged = [];

    let i = 0;
    let j = 0;

    while(arr1[i] || arr2[j]){
        if(arr2[j] === undefined || arr1[i] < arr2[j]){
          merged.push(arr1[i]);
          i++;
        }else{
          merged.push(arr2[j]);
          j++;
        }
    }

    return merged;

  }


  console.log(mergeSortedArrays([99], [44]));



  console.log(mergeSortedArrays2([99], [44]));