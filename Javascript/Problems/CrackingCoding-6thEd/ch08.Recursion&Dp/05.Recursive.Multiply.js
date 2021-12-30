

function minProduct(a, b){

    let smaller = a < b ? a: b;
    let bigger = a < b ? b: a;

    return minProductHelper(smaller, bigger);
}


// Alternative
function minProduct2(a, b){

    if(b < a){
        console.log("Swap....");
        return minProduct2(b, a);
    }
  
    return minProductHelper(a, b);
}


function minProductHelper(smaller, bigger){
    if(smaller === 0){
        return 0;
    }

    if(smaller === 1){
        return bigger;
    }

    let s = Math.floor(smaller / 2);
    let halfProduct = minProductHelper(s, bigger);

    if(smaller % 2 === 0){
        return halfProduct + halfProduct;
    }else{
        return halfProduct + halfProduct + bigger;
    }
}


console.log("Result-1 : ", minProduct(5,8));


console.log("Result-2 : ", minProduct2(8, 5));