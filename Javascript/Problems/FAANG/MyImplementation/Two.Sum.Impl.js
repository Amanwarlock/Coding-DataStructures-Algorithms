const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

function findTwoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
      if(map.has(arr[i])){
        return [i, map.get(arr[i])];
      }else{
        let numToFind = target - arr[i];
        map.set(numToFind, i);
      }
  }
}



console.log(findTwoSum(numsArray, targetToFind));