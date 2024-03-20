class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class binaryTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(node, newNode){
        if(newNode.data<node.data){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }
    }
    // Function to find the diameter of the binary tree
    longestPath(node=this.root) {
        if (node === null) {
            return 0; // Empty path has length 0
        }

        // Find the length of the left and right subtrees
        let leftPath = this.longestPath(node.left);
        let rightPath = this.longestPath(node.right);

        // The longest path will be the greater of:
        // 1. The path from the current node to the leftmost leaf + 1 (for the current node)
        // 2. The path from the current node to the rightmost leaf + 1 (for the current node)
        return Math.max(leftPath + 1, rightPath + 1);
    }
      
}


const bt = new binaryTree();
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
console.log(bt.longestPath())
