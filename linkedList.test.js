const {LinkedList,Node} = require('./linkedList/linked-list.js');



describe('Linked List Module', () => {

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
