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
        let node= new Node(value)
        // node{value:4 next:null }
        node.next = this.top;
        this.top = node;
    }

    pop(){
        this.top=this.top.next
    }

    peek(){
       if(this.top){return this.top.value}
       if(!this.top){return this.top}
    }
    isEmpty(){
        if(this.top){return false}
        return true;
    }
}
class Queue{
    constructor(){
        this.front=null;
        this.tail=null;
    }

    enqueue(value){
        let node=new Node(value);
        if(!this.front){this.front=node;this.tail=node}
        this.tail.next=node;
        this.tail=node;
    }

    dequeue(){
        let node;
        if (this.front) {
          node = this.front.value;
          this.front = this.front.next;
        }
        return node;
    }

    peek(){
        if(this.front){return this.front.value}
        if(!this.front){return this.front}
    }

    isEmpty(){
        if(this.front){return false}
        return true;
    }
}




let a= new Stack
a.push(5)
a.push(6)
a.pop()


let b=new Queue
b.enqueue(1)
b.enqueue(2)
// b.enqueue(3)
console.log('b.dequeue() : ', b.dequeue()); 

console.log('b : ', b);