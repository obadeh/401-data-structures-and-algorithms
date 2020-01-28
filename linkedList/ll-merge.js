const {LinkedList} = require('../linkedList/linkedList.js');

class Featur extends LinkedList{
  constructor(){
    super();
  }


}

function mergeLists(l1,l2){

  let first = l1.head;
  let second = l2.head;

  let newL = new Featur;
  while(first || second){
    if(first){newL.insert(first.value);}
    if(second){newL.insert(second.value);}
    if(first.next){first = first.next;}
    else(first = false);
    if(second.next){second = second.next;}
    else(second = false);

  }
  return newL;
}



module.exports = {Featur,mergeLists};
