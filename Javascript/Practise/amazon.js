'use strict';

/*
 * Complete the 'findValidDiscountCoupons' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY discounts as parameter.
 * 
 * wyyxxnnccw
    unddffddnu
    fffiiveevf
    daabbd
 */

function findValidDiscountCoupons(discounts) {
    // Write your code here
    console.log("Running ...");
    
    for(let i = 0; i < discounts.length; i++){
        let coupon = discounts[i];
        if(validHelper(coupon)){
            discounts[i] = 1;
        }else{
            discounts[i] = 0;
        }
    }

    return discounts;
}


function validHelper(str){
    
    if(str.length === 0){
        return true;
    }
    
    if(str.length === 2 && str[0] === str[1]){
        return true;
    }
    
    let subStr = str;
    
    while(str.length > 1){
        if(str[0] === str[str.length-1]){
            str = str.substring(1, str.length-1);
        }else if(str[0] === str[1]){
            str = str.substring(2);
        }else{
            break;
        }
    }
    

    return str.length === 0;
}


console.log(" Result : ", findValidDiscountCoupons(['wyyxxnnccw', 'unddffddnu', 'fffiiveevf', 'daabbd', 'abc', 'a', 'aa', 'aaa', 'ab']));

/**
 *         xxa
 *  */

//------------------------------------------------\



/*
 * Complete the 'findValidDiscountCoupons' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY discounts as parameter.
 * 
 * wyyxxnnccw
    unddffddnu
    fffiiveevf
    daabbd
 */

// function findValidDiscountCoupons(discounts) {
//     // Write your code here
    
    
//     for(let i = 0; i < discounts.length; i++){
//         let coupon = discounts[i];
//         if(validHelper(coupon)){
//             discounts[i] = 1;
//         }else{
//             discounts[i] = 0;
//         }
//     }

//     return discounts;
// }


// function isValid(str){
   
//     if(str.length === 0){
//         return true;
//     }
    
//     if(str.length === 2 && str[0] === str[1]){
//         return true;
//     }
    
//     // aaa // aaaa
//     let mid = Math.floor(str.length / 2);
    
//     let left = mid;
//     let right = mid;
    
//     if(str.length % 2 === 0){
//         left -= 1;
//     }else{
//         left --;
//         right ++;
//     }
    
//     while(left >= 0 && right < str.length){
//         let word = str.substring(left, right+1);
//         if(validHelper(word)){
//             left --;
//             right++;
//         }else{
//             return false;
//         }
//     }
    
//     //console.log("IsValid ", validHelper('aaa'));
//     return false;
// }

// function validHelper(str){
    
//     if(str.length === 0){
//         return true;
//     }
    
//     if(str.length === 2 && str[0] === str[1]){
//         return true;
//     }
    
//     let first = str[0];
//     let last = str[str.length-1];
    
//     if(first !== last){
//         return false
//     }
    
//     // let subStr = str.substring(1, str.length-1);
    
//     // while(subStr.length > 0 && str[0] === str[str.length-1]){
//     //     subStr = str.substring(1, str.length-1);
//     // }
    
//     // if(subStr.length === 0){
//     //     return true;
//     // }
    
//     let left = 0;
    
//     let right = str.length-1;
    
//     while(left < right && (str[left] === str[right])){
//         left ++;
//         right --;
//     }
    
    
//     let subStr = str.substring(left, right+1);
    
//     if(subStr.length === 0){
//         return true;
//     }
    
//     let matched = subStr.match(/([a-z])\1+/g);
    
//     if(matched === null || matched.length === 0){
//         return false;
//     }
    
//     let len = matched.reduce((sum, curr)=> sum + curr.length, 0);
    
//     if(len + 2 === str.length){
//         return true;
//     }
    
//     return false;
// }