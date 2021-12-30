function findTargetSums(nums, target) {
  if (nums === null || nums.length <= 1) {
    return null;
  }

  const map = new Map();

  for (let p = 0; p < nums.length; p++) {
    if (map.has(nums[p])) {
      return [map.get(nums[p]), p];
    } else {
      let numToFind = target - nums[p];
      map.set(numToFind, p);
    }
  }

  return null;
}

console.log("Method -1 : ", findTargetSums([1, 3, 5, 7, 2], 9));

function findSums(nums, target) {
  if (nums === null || nums.length <= 1) {
    return null;
  }

  nums.sort();

  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 < p2) {
    if (nums[p1] + nums[p2] === target) {
      return [p1, p2];
    } else if (nums[p1] + nums[p2] < target) {
      p1++;
    } else {
      p2--;
    }
  }

  return null;
}

console.log("Method -2 : ", findSums([1, 3, 5, 7, 2], 9));