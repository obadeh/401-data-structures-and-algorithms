const selectionSort = require('../selectionSort/selectionSort.js')


describe('Test the selection sort function',()=>{

    it('sort the input array',()=>{
        let arr = [8,4,23,42,16,15]
    
        expect(selectionSort(arr)).toEqual([4, 8 ,15 , 16 ,23 ,42])
    })
})