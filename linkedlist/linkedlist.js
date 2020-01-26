'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }

  }

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);

    // { value: 5, next: null }
    console.log('this.head : ', this.head);
    if (!this.head) {
      this.head = node;
      return this;
    }
    
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node;
    return this;
  }

  include(val){

    let current=this.head;
    while(current){
        if(current.value===val){
            return true;
        }
        current=current.next;
    }
    return false;
  }

  printList() 
{ 
    let current = this.head; 
    let str = "{"; 
    while (current) { 
        str += current.value + "} -> {"; 
        current = current.next; 
    } 
    str += " NULL }"; 
    // console.log(str); 
    return str;
} 
}
let ll= new LinkedList();
// console.log('insert(5) : ',ll.insert(5));
// console.log('insert(5) : ',ll.insert(10));
// console.log('insert(5) : ',ll.insert(15));

// console.log('print : ',ll.printList());
// console.log('ll.head : ', ll.head);

module.exports = {LinkedList,Node};