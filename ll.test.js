const { LinkedList, Node } = require('./linkedList/linkedList.js');




describe('Linked List Module append(), insertBefore(), insertAfter()', () => {

  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.append(1)
    
    expect(list.head.next).toBeNull();
    expect(list.head.value).toEqual(1)
  })

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.append(1)
    list.append(2)
    list.append(3)
    
    expect(list.head.next.next.value).toEqual(3);

   });

  it('Can successfully insert a node before a node located in the middle of a linked list',()=>{
    let list = new LinkedList();
    list.append(1)
    list.append(2)
    list.append(3)
    list.insertBefore(2,10)
    expect(list.head.next.value).toEqual(10)

  })

  it('Can successfully insert after a node in the middle of the linked list',()=>{
    let list = new LinkedList();
    list.append(1)
    list.append(2)
    list.append(3)
    list.insertAfter(2,10)
    expect(list.head.next.next.value).toEqual(10)
  })

  it('Can successfully insert a node after the last node of the linked list',()=>{
    let list = new LinkedList();
    list.append(1)
    list.append(2)
    list.append(3)
    list.insertAfter(3,10)
    expect(list.head.next.next.next.value).toEqual(10)
  })


})



describe('Linked List Module insert() include()', () => {

  it('constructor', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  })

  it('insert()', () => {
    let list = new LinkedList();

    let initialValue = 'first item';
    list.insert(initialValue);

    expect(list.head.value).toEqual(initialValue);

    let nextValue = 'second item';
    list.insert(nextValue);
    expect(list.head.value).toEqual(initialValue);

    console.log('my current list', list);
  });

  it('The head point to the first node in the linked list',()=>{
    let list = new LinkedList();
    console.log('list.head : ', list.head);
    expect(list.head).toBeNull()

  })
  it('Can properly insert multiple nodes into the linked list',()=>{
    let list = new LinkedList();
    list.insert('test 1');
    list.insert('test 2');
    expect(list.head.next.value).toMatch('test 2')
  })

  it('find exsist value in linked list',()=>{
    let list = new LinkedList();
    list.insert('test');
    expect(list.include('test')).toBeTruthy()
  })

  it('giv false when find value not exsist',()=>{
     let list = new LinkedList();
     expect(list.include('test')).toBeFalsy()
  })

  it('can collect all values of linked list',()=>{
    let list = new LinkedList();
    list.insert('test 1');
    list.insert('test 2');
    let linkedL=list.printList()
    substring1 = "test 1";
    substring2 = "test 2";

    expect(linkedL.includes(substring1)).toBeTruthy()
    expect(linkedL.includes(substring2)).toBeTruthy()

  })


})


describe('Test the ll.kthFromEnd(k) methode with linkedList:',()=>{
  it('Where k is greater than the length of the linked list',()=>{
      let linkedList= new LinkedList;

      linkedList.insert(1);
      linkedList.insert(2);
      linkedList.insert(3);
      linkedList.insert(4);

      expect(linkedList.kthFromEnd(5)).toBeFalsy()
  })

  it('Where k and the length of the list are the same',()=>{
      let linkedList= new LinkedList;

      linkedList.insert(1);
      linkedList.insert(2);
      linkedList.insert(3);
      linkedList.insert(4);
      let llLength=3;
      expect(linkedList.kthFromEnd(llLength)).toEqual(linkedList.head.value)
  })
  
  it('Where k is not a positive integer',()=>{
      let linkedList= new LinkedList;

      linkedList.insert(1);
      linkedList.insert(2);
      linkedList.insert(3);
      linkedList.insert(4);

      expect(linkedList.kthFromEnd(-4)).toBeFalsy()
  })

  it('Where the linked list is of a size 1',()=>{
      let linkedList= new LinkedList;

      linkedList.insert(1);

      expect(linkedList.kthFromEnd(0)).toEqual(linkedList.head.value)
  })
  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
      let linkedList= new LinkedList;

      linkedList.insert(1);
      linkedList.insert(2);
      linkedList.insert(3);
      linkedList.insert(4);

      expect(linkedList.kthFromEnd(2)).toEqual(2)
  })
})
