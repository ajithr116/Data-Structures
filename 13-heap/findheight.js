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

    findHeight() {
        return this._findHeight(this.root);
    }

    _findHeight(node) {
        if (node === null) {
            return -1;
        }
        let leftHeight = this._findHeight(node.left);
        let rightHeight = this._findHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
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
bst.insert(133);
bst.insert(193);
bst.insert(43);


console.log("Height of BST:", bst.findHeight());  
