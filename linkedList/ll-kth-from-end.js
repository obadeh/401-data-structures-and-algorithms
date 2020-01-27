'use strict';

const {LinkedList,Node} =require('../linkedList/linkedList.js')

class Featurs extends LinkedList{
constructor(){
    super();
}

kthFromEnd(k){
let currentNode=this.head;
let n=0;
while(currentNode){
n=n+1;
currentNode=currentNode.next;
}
currentNode=this.head;
let d=n-k;
d=d-1;
let i=0;
 if(k>=n || k<0){ 
     i=d;
     currentNode.value=false;    
}
while(i<d){
    i++;
    currentNode=currentNode.next
}
return currentNode.value
}




}

let a=new Featurs;

// a.insert(2);
// a.insert(4);
// a.insert(5);
// a.insert(6);
// console.log('a : ', a);
// console.log('a.kthFromEnd() : ', a.kthFromEnd(3));
// console.log('a.head.value : ', a.head.value);

module.exports=Featurs