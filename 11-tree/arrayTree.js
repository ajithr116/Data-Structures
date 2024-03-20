class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(data) {
        return this.searchNode(this.root, data);
    }

    searchNode(node, data) {
        if (!node) {
            return null;
        } else if (data < node.data) {
            return this.searchNode(node.left, data);
        } else if (data > node.data) {
            return this.searchNode(node.right, data);
        } else {
            return node;
        }
    }
    remove(data){
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node,key){
        if(node === null){
            return null;
        }else if(key<node.data){
            node.left = this.removeNode(node.left, key);
            return node;
        }else if(key>node.data){
            node.right = this.removeNode(node.right,key);
            return node;
        }else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node=node.left;
                return node
            }

            let aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right,aux.data);
            return node;

        }
    }
    findMinNode(node){
        if(node.left === null){
            return node;
        }else{
            return this.findMinNode(node.left);
        }
    }
    view(node =  this.root){
        if(node!==null){
            this.view(node.left);
            console.log(node.data);
            this.view(node.right);
        }
    }
    sortedArrayToBST(arr) {
        return this.sortedArrayToBSTHelper(arr, 0, arr.length - 1);
      }
    
      sortedArrayToBSTHelper(arr, start, end) {
        if (start > end) {
          return null; // Base case: empty subarray
        }
    
        // Find the middle index for the root node
        let mid = Math.floor((start + end) / 2);
    
        // Create a new node with the element at the middle index
        let root = new Node(arr[mid]);
    
        // Recursively construct the left subtree
        root.left = this.sortedArrayToBSTHelper(arr, start, mid - 1);
    
        // Recursively construct the right subtree
        root.right = this.sortedArrayToBSTHelper(arr, mid + 1, end);
    
        return root;
      }
    
      
}

const bt = new BinaryTree();
let arr = [1, 2, 3, 4, 5];
console.log(bt.sortedArrayToBST(arr));
