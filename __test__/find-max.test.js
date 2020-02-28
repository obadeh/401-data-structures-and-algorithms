

const { Node, BinaryTree } = require('../find-maximum-binary-tree/find-maximum-binary-tree.js');



let tree;

beforeEach(() => {
  tree = new BinaryTree();
});

describe('Testing Binary tree class', () => {

  it('testing an empty tree', () => {

    let testTree = new BinaryTree(null);
    expect(tree.findMaximumValue(testTree)).toEqual(null);

  });

  it('return maxuimum value from tree', () => {

    let one = new Node(56);
    let two = new Node(29);
    let three = new Node(55);
    let four = new Node(34);
    let five = new Node(200);
    let six = new Node(5);
    let seven = new Node(50);

    one.left = two;
    one.right = five;
    two.left = three;
    two.right = four;
    five.left = six;
    five.right = seven;

    let testTree = new BinaryTree(one);

    expect(tree.findMaximumValue(testTree)).toEqual(200);

  });

});