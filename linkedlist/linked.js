'use strict';

const {LinkedList,Node}=require('./linkedlist.js')

class ll extends LinkedList {
    constructor(){
        super()
    }

    append(value) {
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

      insertBefore(value, newVal){

        let node = new Node(newVal);
        let current=this.head;
        let previews=this.head;

            while(current){
            
                if(current.value===value){
                    previews.next=node
                    node.next=current
                }
                else{previews=current}
                current=current.next;
            }
           
          }

      
      
}
let ls= new ll;
console.log('ls.apped() : ', ls.append(1));
console.log('ls.apped() : ', ls.append(2));
console.log('ls.apped() : ', ls.append(3));
console.log('ls.insertBefore(3,10) : ', ls.insertBefore(2,10));

console.log('ls : ', ls.printList());