const {Featur:Linkedlist,  mergeLists}=require('./linkedList/ll-merge.js');
describe('Test the ll.merge methode with linkedList:',()=>{
    it('Where the length of the first linked list is greater than length of the second linked list',()=>{
        let firstLinkedList= new Linkedlist;
        let secondLinkedList= new Linkedlist;

        firstLinkedList.insert(1);
        firstLinkedList.insert(2);
        firstLinkedList.insert(3);
       
        secondLinkedList.insert(4);
        secondLinkedList.insert(5);

        expect((mergeLists(firstLinkedList,secondLinkedList)).head.value).toEqual(1)
        expect((mergeLists(firstLinkedList,secondLinkedList)).kthFromEnd(0)).toEqual(3)
    })

    it('Where the length of the second linked list is greater than length of the first linked list',()=>{
        let firstLinkedList= new Linkedlist;
        let secondLinkedList= new Linkedlist;

        firstLinkedList.insert(1);
        firstLinkedList.insert(2);
       
        secondLinkedList.insert(4);
        secondLinkedList.insert(5);
        secondLinkedList.insert(6);

        expect((mergeLists(firstLinkedList,secondLinkedList)).head.value).toEqual(1)
        expect((mergeLists(firstLinkedList,secondLinkedList)).kthFromEnd(0)).toEqual(6)
    
    })
    
    it('Where the length of the first linked list is equal the length of the second linked list',()=>{
        let firstLinkedList= new Linkedlist;
        let secondLinkedList= new Linkedlist;

        firstLinkedList.insert(1);
        firstLinkedList.insert(2);
        firstLinkedList.insert(3);
       
        secondLinkedList.insert(4);
        secondLinkedList.insert(5);
        secondLinkedList.insert(6);

        expect((mergeLists(firstLinkedList,secondLinkedList)).head.value).toEqual(1)
        expect((mergeLists(firstLinkedList,secondLinkedList)).kthFromEnd(1)).toEqual(3)
        expect((mergeLists(firstLinkedList,secondLinkedList)).kthFromEnd(0)).toEqual(6)
    
    })
    
})
