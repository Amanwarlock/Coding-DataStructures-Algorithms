

function permutations(str){
    if(str === null) return null;

    let permuationsArr = [];

    if(str.length === 0){
        permuationsArr.push("");
        return permuationsArr;
    }

    let first = str[0];
    let remainder = str.substring(1);
    let words = permutations(remainder);
    for(let word of words){
        for(let i = 0; i <= word.length; i++){
            let s = insertAt(word, first, i);
            permuationsArr.push(s);
        }
    }

    return permuationsArr;
}


function insertAt(word, char, i){
    let before = word.substring(0, i);
    let after = word.substring(i);
    return before + char + after;
}



console.log("Result-1: ", permutations("abc"));