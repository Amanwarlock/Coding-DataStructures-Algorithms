function strCompare(a, b){
  if(a === b ){
      return 0;
  }else if(a > b){
      return 1;
  }
  
  return -1;
}

console.log(strCompare('ut', 'md'));



function lexSort(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
          let t1 = arr[j].split(" ");
          let t2 = arr[j+1] ? arr[j+1].split(" "): null;
          let index = 1;
          let id1 = t1[0];
          let id2 = t2 ? t2[0]: null;
          let word1 = t1[index];
          let word2 = t2 ? t2[index]: null;
          let res = 0;
          while(res === 0 && word1 && word2){
              res = strCompare(word1 , word2);
              index += 1;
              word1 = t1[index];
              word2 = t2[index];
          }
          
          if(res === 1){
              let temp = t1;
              t1 = t2;
              t2 = temp;
          } else if(res === 0 && id1 && id2){
              // sort them by Identifier;
              res = strCompare(id1 , id1);
              if(res === 1){
                  let temp = t1;
                  t1 = t2;
                  t2 = temp;
              }
          }
      }
  }
  
  return arr;
}

function strCompare(a, b){
  if(a === b ){
      return 0;
  }else if(a > b){
      return 1;
  }
  
  return -1;
}



let arr = ["t3 pz ft gj ut",
"jh7 pz ft gj md"];


  lexSort(arr);