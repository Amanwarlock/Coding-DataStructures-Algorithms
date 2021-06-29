const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

function findTwoSum(arr, target) {
  const myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
      if(myMap.has(arr[i])){
        let index = myMap.get(arr[i]);
        return [index, i];
      }else{
        let numberToFind = target - arr[i];
        myMap.set(numberToFind, i);
      }
  }
}


console.log(findTwoSum(numsArray, targetToFind));
