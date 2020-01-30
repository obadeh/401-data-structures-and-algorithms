

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

  include(val){

    let current = this.head;
    while(current){
      if(current.value === val){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printList()
  {
    let current = this.head;
    let str = '{';
    while (current) {
      str += current.value + '} -> {';
      current = current.next;
    }
    str += ' NULL }';
    return str;
  }
}

module.exports = {LinkedList,Node};