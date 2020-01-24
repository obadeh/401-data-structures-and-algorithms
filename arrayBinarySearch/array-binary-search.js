'use strict';

function binarySearch(arr, num) {
    var j
    for (let i = 0; i < arr.length; i++) {
        j = -1;
        if (arr[i] === num) { return j = i }
    }
    return j
}



module.exports=binarySearch;