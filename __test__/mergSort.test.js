const {mergeSort, merge} = require('../mergeSort/mergSort.js')


describe('Test the selection sort function',()=>{

    it('can pass an arry',()=>{
      let arr = [8,4,23,42,16,15];
  
      expect(mergeSort(arr)).toBeDefined();
    });
    it('return sorted array',()=>{
      let arr = [8,4,23,42,16,15];
  
      expect(mergeSort(arr)).toEqual([4, 8 ,15 , 16 ,23 ,42]);
    });

    it('return sorted odd array',()=>{
        let arr = [8,4,23,42,16,15,1];
    
        expect(mergeSort(arr)).toEqual([1,4, 8 ,15 , 16 ,23 ,42]);
      });

      it('return sorted even array',()=>{
        let arr = [8,4,23,42,16,15,1];
    
        expect(mergeSort(arr)).toEqual([1,4, 8 ,15 , 16 ,23 ,42]);
      });
  });