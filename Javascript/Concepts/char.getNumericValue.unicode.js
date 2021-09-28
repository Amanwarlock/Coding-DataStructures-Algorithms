

console.log("A ", parseInt('A', 36));

console.log("a ",  parseInt('a', 36));


console.log("Z ", parseInt('Z', 36));

console.log("z ",  parseInt('z', 36));


let a = parseInt('a', 36);
let z = parseInt('z', 36);
let char = parseInt('c', 36);

if(a <= char && char<= z){
    console.log("Shift index : ", char - a);
}