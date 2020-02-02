class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }

    insert(value){

        let newNode=new Node(value);
        let current=this.head
       
        if(!current){this.head=newNode; return this}

        while(current.next){
            current=current.next;
        }
        current.next=newNode;

        return this;
    }
}



  function reverse(ll) {
    let head=ll.head;
    let node = head;
    let previous;
    let tmp;
    
  
    while (node) {
      tmp = node.next;
  
      node.next = previous;
  
      previous = node;
      node = tmp;
    }
  
    return previous;
  }