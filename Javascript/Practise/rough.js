const arr = [
  "apple",
  "banana",
  "carrot",
  "ele",
  "duck",
  "papel",
  "tarroc",
  "cudk",
  "eel",
  "lee",
];

function groupAnagrams(arr) {
  arr.sort((x, y) => {
    let s1 = sortChars(x);
    let s2 = sortChars(y);

    if (s1 < s2) {
      return -1;
    } else if (s1 > s2) {
      return 1;
    } else {
      return 0;
    }
  });
  return arr;
}

function sortChars(str) {
  let clone = new String(str);
  clone = clone.split("").sort().join();
  return clone;
}

console.log(groupAnagrams(arr));
