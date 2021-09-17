

const arr = ["apple", "banana", "carrot", "ele", "duck", "papel", "tarroc", "cudk", "eel", "lee"];

// answer::: banana, carrot, tarroc, apple, papel, duck, cudk, ele, eel, lee

function groupAnagrams1(arr){
    arr.sort(function(x,y){
        let x1 = String(x); // Object.assign("", x);
        let y1 = String(y);
        x1 = x1.split("").sort().join();
        y1 = y1.split("").sort().join();

        if(x1 < y1){
            return -1;
        }

        if(x1 > y1){
            return 1;
        }

        return 0;
    });

    return arr;
}

console.log("Group Anagrams 1 ::: ", groupAnagrams1(arr));

//--------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Method 2 : as log s time - a - array size, s - length of longest string
 */


function sortChars(s){
    let str = String(s);
    str = str.split("").sort().join();
    return str;
}


function groupAnagrams2(arr){
    let newArr = [];

    let map = new Map();

    for(let el of arr){
        let str = sortChars(el);
        if(!map.has(str)){
            map.set(str, [el]);
        }else{
            map.get(str).push(el);
        }
    }

    for(let k of map.keys()){
        let list = map.get(k);
        for(let item of list){
            newArr.push(item);
        }
    }

    return newArr;
}

console.log("Group Anagrams 2 ::: ", groupAnagrams2(arr));