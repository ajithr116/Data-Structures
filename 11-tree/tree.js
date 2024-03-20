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
}

const bt = new BinaryTree();
bt.insert(10);
bt.insert(15);
bt.insert(14);
bt.insert(16);
bt.insert(17);
bt.insert(18);
bt.insert(19);
bt.insert(20);
bt.insert(21);
bt.insert(9);
bt.insert(8);
bt.insert(7);
bt.insert(6);
bt.insert(5);
bt.insert(4);


// console.log(bt.search(1))
// bt.remove(4);
// console.log(bt.search(1))
// bt.view()
console.log(bt.longestPath())
