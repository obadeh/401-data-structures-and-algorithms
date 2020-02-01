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
        this.top=node;
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

let a= new Stack
a.push(5)
a.pop()
console.log('a : ', a.isEmpty());