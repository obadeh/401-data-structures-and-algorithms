'use strict';

const {LinkedList} = require('../linkedList/linkedList.js');

class Featurs extends LinkedList{
  constructor(){
    super();
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


module.exports = Featurs;