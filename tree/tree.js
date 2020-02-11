"use strict";

class Node{
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

  postOrder(){
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

module.exports = {Node,BinaryTree};