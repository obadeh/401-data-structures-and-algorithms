'use strict';

// Input	
// [4,8,15,16,23,42], 15	

// Output
// 2

// Input
// [11,22,33,44,55,66,77], 90
// Output
// -1


function binarySearch(arr, num) {
    var j
    for (let i = 0; i < arr.length; i++) {
        j = -1;
        if (arr[i] === num) { return j = i }
    }
    return j
}
