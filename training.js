class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}
  
class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Insertion
    insert(data) {
      this.root = this._insert(this.root, data);
    }
  
    _insert(node, data) {
      if (node === null) {
        return new Node(data);
      } else if (data < node.data) {
        node.left = this._insert(node.left, data);
      } else {
        node.right = this._insert(node.right, data);
      }
      return node;
    }
  
    // Contains
    contains(data) {
      return this._contains(this.root, data);
    }
  
    _contains(node, data) {
      if (node === null) {
        return false;
      } else if (data === node.data) {
        return true;
      } else if (data < node.data) {
        return this._contains(node.left, data);
      } else {
        return this._contains(node.right, data);
      }
    }
  
    // Delete method starts the deletion process from the root
    delete(data) {
        this.root = this._delete(this.root, data);
    }

    // Helper method to perform the actual deletion
    _delete(node, data) {
        // If the tree is empty (node is null), return null
        if (node === null) {
        return node;
        }

        // If data to be deleted is less than the node's data, then it lies in left subtree
        else if (data < node.data) {
        node.left = this._delete(node.left, data);
        }

        // If data to be deleted is greater than the node's data, then it lies in right subtree
        else if (data > node.data) {
        node.right = this._delete(node.right, data);
        }

        // If data is same as node's data, then this is the node to be deleted
        else {
        // Node with only one child or no child
        if (node.left === null) {
            return node.right;
        } else if (node.right === null) {
            return node.left;
        }

        // Node with two children: get the inorder successor (smallest in the right subtree)
        let temp = this.min_value(node.right);

        // Copy the inorder successor's data to this node
        node.data = temp.data;

        // Delete the inorder successor
        node.right = this._delete(node.right, temp.data);
        }
        return node;
    }

    // Helper method to find the node with the minimum value
    min_value(node) {
        let current = node;

        // Loop down to find the leftmost leaf (smallest value)
        while (current && current.left !== null) {
        current = current.left;
        }
        return current;
    }
  
    // Traversals
    preorder(node) {
      if (node !== null) {
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
      }
    }
  
    inorder(node) {
      if (node !== null) {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
      }
    }
  
    postorder(node) {
      if (node !== null) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
      }
    }
  
    // Find closest value
    closestValue(data) {
      let current = this.root;
      let closest = null;
  
      while (current !== null) {
        const distance = Math.abs(data - current.data);
        if (closest === null || distance < Math.abs(data - closest.data)) {
          closest = current;
        }
        current = data < current.data ? current.left : current.right;
      }
  
      return closest ? closest.data : null;
    }
  
    // Validate BST (basic implementation)
    isValidBST(node, minVal = null, maxVal = null) {
      if (node === null) {
        return true;
      }
  
      if (minVal !== null && node.data <= minVal) {
        return false;
      }
  
      if (maxVal !== null && node.data >= maxVal) {
        return false;
      }
  
      return this.isValidBST(node.left, minVal, node.data) && this.isValidBST(node.right, node.data, maxVal);
    }
  
}

// Create a new Binary Search Tree
const bst = new BinarySearchTree();

// Insert some random values
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60); 
bst.insert(80);

// Check if the BST contains a value
console.log(bst.contains(30)); // Should print: true
console.log(bst.contains(90)); // Should print: false

// Perform different types of traversals
console.log("Inorder traversal:");
bst.inorder(bst.root); // Should print: 20 30 40 50 60 70 80

console.log("Preorder traversal:");
bst.preorder(bst.root); // Should print: 50 30 20 40 70 60 80

console.log("Postorder traversal:");
bst.postorder(bst.root); // Should print: 20 40 30 60 80 70 50

// Find the closest value to a given number
console.log("closest value : "+bst.closestValue(780)); // Should print: 70

// Validate if the tree is a BST
console.log(bst.isValidBST(bst.root)); // Should print: true

// Delete a value from the BST
bst.delete(70);

// Check if the deleted value still exists in the BST
console.log(bst.contains(70)); // Should print: false

// Find the minimum value in the BST
console.log(bst.min_value(bst.root).data); // Should print: 20

