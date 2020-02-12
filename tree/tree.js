"use strict";

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
    }
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
    }
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    }
    _walk(this.root);
    return results;
  }
}

class BinarySearchTree {
  constructor() {
    // root of a binary seach tree 
    this.root = null;
  }


  insert(data) {
    // Creating a node and initailising  
    // with data  
    var newNode = new Node(data);

    // root is null then node will 
    // be added to the tree and made root. 
    if (this.root === null)
      this.root = newNode;
    else

      // find the correct position in the  
      // tree and add the node 
      this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree 
  // it moves over the tree to find the location 
  // to insert a node with a given data  
  insertNode(node, newNode) {
    // if the data is less than the node 
    // data move left of the tree  
    if (newNode.data < node.data) {
      // if left is null insert node here 
      if (node.left === null)
        node.left = newNode;
      else

        // if left is not null recurr until  
        // null is found 
        this.insertNode(node.left, newNode);
    }

    // if the data is more than the node 
    // data move right of the tree  
    else {
      // if right is null insert node here 
      if (node.right === null)
        node.right = newNode;
      else

        // if right is not null recurr until  
        // null is found 
        this.insertNode(node.right, newNode);
    }
  }

  contain(value) {
    let found = false,
      current = this._root

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


module.exports = { Node, BinaryTree };