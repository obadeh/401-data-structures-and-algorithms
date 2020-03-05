const {quickSort,swap,partition} = require('../quickSort/quickSort.js');


describe('Test the selection sort function',()=>{

  it('can pass an arry',()=>{
    let arr = [8,4,23,42,16,15];

    expect(quickSort(arr,0,5)).toBeDefined();
  });
  it('return sorted array',()=>{
    let arr = [8,4,23,42,16,15];
    console.log(' quickSort(arr): ',quickSort(arr) );
    expect(quickSort(arr,0,5)).toEqual([4, 8 ,15 , 16 ,23 ,42]);
  });

  it('return sorted odd array',()=>{
    let arr = [8,4,23,42,16,15,1];

    expect(quickSort(arr,0,6)).toEqual([1,4, 8 ,15 , 16 ,23 ,42]);
  });

  it('return sorted even array',()=>{
    let arr = [8,4,23,42,16,15,1];

    expect(quickSort(arr,0,6)).toEqual([1,4, 8 ,15 , 16 ,23 ,42]);
  });
});