const Animal = require('../fifoAnimalShelter/fifo-animal-shelter.js');

describe('test th fifo animal shell',()=>{
  it('should enqueue animal',()=>{
    let a = new Animal;
    a.enqueue('cat');
    expect(a.head.value).toEqual('cat');
  });

  it('should dequeue animal',()=>{
    let a = new Animal;
    a.enqueue('cat');
    a.dequeue('cat');
    expect(a.head).toEqual(null);
  });

  it('should enqueue cat or dog',()=>{
    let a = new Animal;
    a.enqueue('cat');
    expect(a.head.value).toEqual('cat');

    a.enqueue('dog');
    expect(a.head.next.value).toEqual('dog');

    a.enqueue('bird');
    expect(a.head.next.next).toEqual(null);
  });

  it('should dequeue cat or dog',()=>{
    let a = new Animal;
    a.enqueue('cat');
    a.enqueue('cat');
    a.dequeue('dog');
    a.dequeue('dog');

    expect(a.head).toEqual(null);
  });


});