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

    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insert(this.root, newNode);
        }
    }

    _insert(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insert(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insert(node.right, newNode);
            }
        }
    }

    findDepth(value) {
        return this._findDepth(this.root, value, 0);
    }

    _findDepth(node, value, depth) {
        if (node === null) {
            return -1;
        }
        if (node.data === value) {
            return depth;
        }
        if (value < node.data) {
            return this._findDepth(node.left, value, depth + 1);
        } else {
            return this._findDepth(node.right, value, depth + 1);
        }
    }
}

let bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log("Depth of node with value 7:", bst.findDepth(6));  
