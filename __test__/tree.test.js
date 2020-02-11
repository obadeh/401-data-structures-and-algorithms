const {Node,BinaryTree} = require('../tree/tree.js')
describe('Binary Tree', () => {
  let tree = null;

  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  it('preorder()', () => {
    let expected = [1,2,3,4,5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
    // expect(preOrder.length).toBe(5);
    // expect(typeof preOrder).toBe(Array.isArray());
  })

  it('inorderorder()', () => {
    let expected = [ 2, 1, 4, 3, 5 ];
    let inOrder = tree.inOrder();
    console.log('inOrder : ', inOrder);
    expect(inOrder).toEqual(expected);
    // expect(preOrder.length).toBe(5);
    // expect(typeof preOrder).toBe(Array.isArray());
  })

  it('postOrder()', () => {
    let expected = [ 2, 4, 5, 3, 1 ];
    let postOrder = tree.postOrder();
    console.log('postOrder : ', postOrder);
    expect(postOrder).toEqual(expected);
    // expect(preOrder.length).toBe(5);
    // expect(typeof preOrder).toBe(Array.isArray());
  })




})