class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}


class AnimalShelter{
  constructor(){
    this.head = null;
  }


  enqueue(value){
    let node;
    if(value === 'dog' || value === 'cat'){ node  = new Node(value);}
    else{return null;}

    let current = this.head;
    if(!this.head){
      this.head = node;
      return this;
    }
    while(current.next) {
      current = current.next;
    }

    current.next = node;
    return this;
  }

  dequeue(value){
    let node;
    if(value === 'dog' || value === 'cat'){ node  = new Node(value);}
    else{return null;}

    if(!this.head){
      return null;
    }
    this.head = this.head.next;
    return this.head;
  }
}


let a = new AnimalShelter();

a.enqueue('dog');
a.enqueue('cat');

console.log('a : ', a);
a.dequeue('cat');
console.log('a : ', a);

module.exports = AnimalShelter;