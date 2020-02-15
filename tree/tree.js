

class Node {
  constructor(value, left = null, right = null) {
    this.value = value; // passed in
    this.left = left; // null
    this.right = right; // null
  }
}


class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Data -> read the node, Left -> go left, Right -> go right
  // DLR
  preOrder() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }
  // LDR
  inOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

class BinarySearchTree {
  constructor() {
    // root of a binary seach tree
    this.root = null;
  }


  add(data, left = null, right = null) {
    //creating a Node
    //data we pass will act as individual parent Node
    //left and right are subtrees
    let Node = {
      data,
      left,
      right,
    };
    //suppose currentNumberNode as a parent node
    //current Num Node value decides position of next value
    //if it goes to left subtree or right subtree
    let currentNumberNode;

    if (!this.root) {
      //if its not a root make it one by passing a Node
      this.root = Node;
    } else {
      //and if its a root now, assign it to currentNumberNode
      currentNumberNode = this.root;
      while (currentNumberNode) {
        //if data is smaller than cuurent data, send it in left subtree
        if (data < currentNumberNode.data) {
          //if current num node don't have Node properties
          //we will assign it node properties
          if (!currentNumberNode.left) {
            currentNumberNode.left = Node;
            break;
          } else {
            //if it has node properties and it is sent by root to left
            //we will make it a left node because it is smaller than root node
            currentNumberNode = currentNumberNode.left;
          }
          //if data is larger than cuurent data, send it in right subtree
        } else if (data > currentNumberNode.data) {
          //if current num node don't have Node properties
          //we will assign it node properties
          if (!currentNumberNode.right) {
            currentNumberNode.right = Node;
            break;
          } else {
            //if it has node properties and it is sent by root to right
            //we will make it a right node because it is larger than root node
            currentNumberNode = currentNumberNode.right;
          }
        } else {
          console.log('Try Different Value');
          break;
        }
      }
    }
  }

  contain(value) {
    let found = false,
      current = this.root;

    //make sure there's a node to search
    while (!found && current) {

      //if the value is less than the current node's, go left
      if (value < current.value) {
        current = current.left;

        //if the value is greater than the current node's, go right
      } else if (value > current.value) {
        current = current.right;

        //values are equal, found it!
      } else {
        found = true;
      }
    }

    //only proceed if the node was found
    return found;
  }


}

// let one =new Node(3)
// let t = new BinarySearchTree()
// t.add(5)
// t.add(4)
// t.add(6)
// console.log('t : ', t);
// console.log('t.contain(4) : ', t.contain(2));

let node = new Node();
console.log('node : ', node);
let t = new BinaryTree(node);
console.log('t : ', t.root.value);
module.exports = { Node, BinaryTree };