'use strict' ;

const binarySearch=require('./arrayBinarySearch/array-binary-search.js')

describe('test binarySearch ',()=>{
    it('get the right index',()=>{

        let num = 2
        let arr = [1,2,3]
        
expect(binarySearch(arr,num)).toEqual(1)

    })
})