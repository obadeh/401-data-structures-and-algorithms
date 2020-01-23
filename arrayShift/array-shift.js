'use strict';


function insertShiftArray(arr,num){
    arr.splice(Math.ceil(arr.length/2), 0, num);
    arr.join()
   return arr
   }


   module.exports=insertShiftArray;
   