

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinaryTree {
  constructor(node) {
    this.root = node;
  }

  inOrder() {
    let results = [];

    let _walk = node => {
      // L Ro R

      // Left
      if (node.left) _walk(node.left);

      // Ro
      // Do something
      results.push(node.value);

      // Right
      if (node.right) _walk(node.right);
    };

    _walk(this.root);

    return results;
  }

  preOrder() {
    let results = [];

    let _walk = node => {
      // Ro L R

      // Ro
      // Do something
      results.push(node.value);

      // Left
      if (node.left) _walk(node.left);

      // Right
      if (node.right) _walk(node.right);
    };

    _walk(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    let _walk = node => {
      // Ro L R

      // Left
      if (node.left) _walk(node.left);

      // Right
      if (node.right) _walk(node.right);

      // Ro
      // Do something
      results.push(node.value);
    };

    _walk(this.root);

    return results;
  }

  breadthFirst(tree) {
    let queue = [tree.root];
    let currentNode = queue.shift();

    while (currentNode) {
      console.log(currentNode.value);
      queue.push(currentNode.left);
      queue.push(currentNode.right);
      currentNode = queue.shift();
    }
  }

  findMaximumValue(tree) {
    if (!tree.root || !tree.root.value) return 'Not a valid tree';

    let max = tree.root.value;

    let _walk = node => {
      if (node.left) _walk(node.left);

      if (node.value > max) max = node.value;

      if (node.right) _walk(node.right);
    };

    _walk(tree.root);

    return max;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(node) {
    super(node);
  }

  add(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
      return node;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (node.value < currentNode.value) {
        // Go left
        if (!currentNode.left) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (node.value > currentNode.value) {
        // Go right
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        // Duplicate value
        // Were not adding if equal due to binary SEARCH tree, otherwise we would add this value
        return 'Value already exists';
      }
    }
  }

  contains(val) {
    if (!val) return 'No value';

    let result = false;

    let _walk = node => {
      if (node.value === val) {
        result = true;
        return;
      }

      if (val < node.value) {
        if (node.left) {
          _walk(node.left);
        } else {
          result = false;
          return;
        }
      }

      if (val > node.value) {
        if (node.right) {
          _walk(node.right);
        } else {
          result = false;
          return;
        }
      }

    };

    _walk(this.root);

    return result;
  }
}

module.exports = {BinaryTree, BinarySearchTree};