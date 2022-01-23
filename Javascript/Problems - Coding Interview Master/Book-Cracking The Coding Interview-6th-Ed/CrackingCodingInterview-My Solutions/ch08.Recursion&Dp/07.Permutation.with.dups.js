/**
 * 
 * SOLUTION: https://www.youtube.com/watch?v=qhBVWf0YafA
 */


/**
 * With string prefix
 */
function permutations1(str){
    let result = [];
    let map = buildFrequencyTable(str);
    permutationHelper(str, "", map, str.length, result);
    return result;
}


function buildFrequencyTable(str){
    let map = new Map();

    for(let i = 0; i < str.length; i++){
        if(!map.has(str[i])){
            map.set(str[i], 0);
        }

        map.set(str[i], map.get(str[i]) + 1);
    }

    return map;
}

function permutationHelper(str, prefix, map, remaining, result){

    if(remaining === 0){
        result.push(prefix);
        return;
    }

    for(let key of map.keys()){
        let count = map.get(key);

        if(count > 0){
            map.set(key, count - 1);
            permutationHelper(str, prefix + key, map, remaining - 1, result);
            map.set(key, count);
        }
    }
}

console.log("Result-1: ", permutations1("112"));


//-----------------------------------------------------------------------------------------------------------------------------------------

function permutations2(nums){
    let result = [];
    let perm = [];
    let map = buildFrequencyTable(nums);
    helper2(nums, perm, map, result);
    return result;
}

function helper2(nums, perm, map, result){

    if(perm.length === nums.length){
        result.push([...perm]);
        return;
    }

    for(let key of map.keys()){
        let count = map.get(key);
        if(count > 0){
            perm.push(key);
            map.set(key, count - 1);
            helper2(nums, perm, map, result);
            perm.pop();
            map.set(key, count);
        }
    }

}

console.log("Result-2: ", permutations2([1, 1, 2]));