'use strict';

const {LinkedList,Node,} = require('./linkedlist.js');

class ll extends LinkedList {
  constructor(){
    super();
  }

  append(value) {
    let node = new Node(value);

    // { value: 5, next: null }
    
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  insertBefore(value, newVal){

    let node = new Node(newVal);
    let current = this.head;
    let previews = this.head;

    while(current){
      // let indx=0
      // indx+=1
      if(current.value === value){
        //    if(indx===1){current=node;console.log('hi1') ;return this}
        previews.next = node;
        node.next = current;
      }
      else{previews = current;}
      current = current.next;

    }

  }

  insertAfter(value, newVal){
    let node = new Node(newVal);
    let current = this.head;

    while(current){
      if(current.value === value){
        node.next = current.next;
        current.next = node;
        break;
      }

      current = current.next;
    }
  }


}
let ls = new ll;




module.exports = ll;