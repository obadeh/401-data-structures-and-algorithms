'use strict';

const inserShiftArray=require('./array-shift.js')

describe('test for array-shift',()=>{
    it('can add the element to the array',()=>{
        let arr=[1,2,3]
        let num=5
        let newArr = inserShiftArray(arr,num);
        expect(newArr.length===arr.length+1)
    })
})
