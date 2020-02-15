const {Node,BinaryTree} = require('../tree/tree.js');
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

  it('Can successfully instantiate an empty tree',()=>{
    let node = new Node();
    let t = new BinaryTree(node);

    expect(t.root.value).toBeUndefined();
    expect(t.root.right).toBeNull();
    expect(t.root.left).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node',()=>{
    let node = new Node(2);

    expect(node.value).toEqual(2);

  });

  it('Can successfully add a left child and right child to a single root node',()=>{
    let node = new Node(2);
    node.right = 5;
    node.left = 3;
    expect(node.value).toEqual(2);
    expect(node.right).toEqual(5);
    expect(node.left).toEqual(3);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let expected = [1,2,3,4,5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
    // expect(preOrder.length).toBe(5);
    // expect(typeof preOrder).toBe(Array.isArray());
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let expected = [ 2, 1, 4, 3, 5 ];
    let inOrder = tree.inOrder();
    console.log('inOrder : ', inOrder);
    expect(inOrder).toEqual(expected);
    // expect(preOrder.length).toBe(5);
    // expect(typeof preOrder).toBe(Array.isArray());
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let expected = [ 2, 4, 5, 3, 1 ];
    let postOrder = tree.postOrder();
    console.log('postOrder : ', postOrder);
    expect(postOrder).toEqual(expected);
    // expect(preOrder.length).toBe(5);
    // expect(typeof preOrder).toBe(Array.isArray());
  });




});

