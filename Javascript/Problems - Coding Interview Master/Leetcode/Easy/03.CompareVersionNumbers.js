/**
 * @description https://leetcode.com/problems/compare-version-numbers/
 */


/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    
    let str1 = version1.split(".");
    let str2 = version2.split(".");


    let len = Math.max(str1.length, str2.length);

    for(let i = 0; i < len; i++){
        let v1 = i < str1.length ? parseInt(str1[i]): 0;
        let v2 = i < str2.length ? parseInt(str2[i]): 0;
        
        if(v1 > v2){
            return 1;
        }else if(v1 < v2){
            return -1;
        }
    }

    return 0;
};