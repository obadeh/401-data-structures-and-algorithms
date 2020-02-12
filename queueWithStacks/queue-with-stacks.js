class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    let node = new Node(value);
    // node{value:4 next:null }
    node.next = this.top;
    this.top = node;
  }

  pop(){
    let a = this.top.value;
    this.top = this.top.next;
    return a;
  }

  peek(){
    if(this.top){return this.top.value;}
    if(!this.top){return this.top;}
  }
  isEmpty(){
    if(this.top){return false;}
    return true;
  }


}

class PseudoQueue {
  //  stack1;
  //  stack2;

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  // insert value into PseudoQueue using first-in, first-out approach by only pushing in stack1
  enqueue(value) {
    this.stack1.push(value);
  }

  // extracts a value from the PseudoQueue, using first-in, first-out approach
  //
  dequeue() {
    // check if both stacks are empty to determine whether PseudoQueue is empty
    // if it is, throw exception
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      throw 'Unable to dequeue due to queue being empty';
    }
    // Check if stack2 is empty
    // If it is, pop all values from stack1 and push them into stack2.
    // This will reverse order of stack and make the order like a queue.
    // If stack2 is not empty, continue pop off values from stack2 until it is empty
    if (this.stack2.isEmpty()) {
      while(!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    } else {
      return this.stack2.pop();
    }
  }
}


let a = new Stack;
a.push(1);
a.push(2);
console.log('a : ', a);




// a.enqueue(5);
// a.enqueue(6)
// a.enqueue(7)
// a.enqueue(8)

// a.dequeue()
// console.log('a : ', a.dequeue());
// console.log('a : ', a);