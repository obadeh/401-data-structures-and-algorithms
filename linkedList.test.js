const Linkedlist=require('./linkedList/ll-kth-from-end.js');

describe('Test the ll.kthFromEnd(k) methode with linkedList:',()=>{
    it('Where k is greater than the length of the linked list',()=>{
        let linkedList= new Linkedlist;

        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(4);

        expect(linkedList.kthFromEnd(5)).toBeFalsy()
    })

    it('Where k and the length of the list are the same',()=>{
        let linkedList= new Linkedlist;

        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(4);
        let llLength=3;
        expect(linkedList.kthFromEnd(llLength)).toEqual(linkedList.head.value)
    })
    
    it('Where k is not a positive integer',()=>{
        let linkedList= new Linkedlist;

        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(4);

        expect(linkedList.kthFromEnd(-4)).toBeFalsy()
    })

    it('Where the linked list is of a size 1',()=>{
        let linkedList= new Linkedlist;

        linkedList.insert(1);

        expect(linkedList.kthFromEnd(0)).toEqual(linkedList.head.value)
    })
    it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
        let linkedList= new Linkedlist;

        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(4);

        expect(linkedList.kthFromEnd(2)).toEqual(2)
    })
})
