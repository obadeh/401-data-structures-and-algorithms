class PseudoQueue {
  constructor() {
    this.stack1 = [];
  }

  enqueue(value) {
    this.stack1.unshift(value);
    return this;
  }

  dequeue() {

    this.stack1.pop();
    return this;
  }
}


let a = new PseudoQueue();
a.enqueue(5);
a.enqueue(6);
a.enqueue(7);
a.enqueue(8);

a.dequeue();
console.log('a : ', a);
module.exports = PseudoQueue;
// console.log('a : ', a);