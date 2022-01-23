


const a = 759;


const b = 674;

const answer = 1433;

/**
 * METHOD-1 RECURSIVE APPROACH
 */


function addWithNoPlus1(a, b){  

    if(b === 0) return a;

    let sum = a ^ b;

    let carry = (a & b) << 1;

    return addWithNoPlus1(sum, carry);
}


console.log("Result-1 : ", addWithNoPlus1(a, b) );



/**
 * METHOD-1 ITERATIVE APPROACH
 */
function addWithNoPlus2(a, b){
    
    while(b !== 0){
        let sum = a ^ b;

        let carry = (a & b) << 1;

        a = sum;
        b = carry;
    }

    return a;
}


console.log("Result-2 : ", addWithNoPlus2(a, b) );