
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
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  include(val) {

    let current = this.head;
    while (current) {
      if (current.value === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printList() {
    let current = this.head;
    let str = '{';
    while (current) {
      str += current.value + '} -> {';
      current = current.next;
    }
    str += ' NULL }';
    return str;
  }
  append(value) {
    let node = new Node(value);

    // { value: 5, next: null }

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  insertBefore(value, newVal) {

    let node = new Node(newVal);
    let current = this.head;
    let previews = this.head;

    while (current) {
      // let indx=0
      // indx+=1
      if (current.value === value) {
        //    if(indx===1){current=node;console.log('hi1') ;return this}
        previews.next = node;
        node.next = current;
      }
      else { previews = current; }
      current = current.next;

    }

  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;

    while (current) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        break;
      }

      current = current.next;
    }
  }


  kthFromEnd(k){
    let currentNode = this.head;
    let n = 0;
    while(currentNode){
      n = n + 1;
      currentNode = currentNode.next;
    }
    currentNode = this.head;
    let d = n - k;
    d = d - 1;
    let i = 0;
    if(k >= n || k < 0){
      i = d;
      currentNode.value = false;
    }
    while(i < d){
      i++;
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

}

module.exports = { LinkedList, Node};