
/**
 *      [2,2,| 2,2] --> -4
 * 
 * 
 *                                             fn(2,4,1,4)
 *                         mid= 2  fn(2,4,1,1)           fn(2,4,3,4)
 *            mid = 1   fn(2,4,1,0)       fn(2,4,2,1)               fn(2,4,3,2)  fn(2,4, 4,4)
 *                                                                                  fn (2,4, 4,3) fn(2,4,5,4)
 *                                      
 */

function power(x, y, start, end, result){
    if( end < start) return result;

    let mid = Math.floor((start+end)/2);  

    result *= x;

    result = power(x,y,start,mid-1, result); 

    result = power(x,y,mid+1,end, result); 
    
    return result;
}

function cal(x,y){

    if(x === 0) return 0;
    if(y === 0) return 1;
    
    if(y < 0){
        return 1/power(x, Math.abs(y), 1, Math.abs(y), 1);
    }else{
        return power(x,y, 1, y, 1);
    }
}


console.log(cal(2,4));


