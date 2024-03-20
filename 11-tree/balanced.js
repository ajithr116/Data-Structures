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
    
    isBalanced(node=this.root) {
        if (node === null) {
            return true; // Base case: an empty tree is balanced
        }

        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);

        let heightDiff = Math.abs(leftHeight - rightHeight);

        if (heightDiff > 1) {
            return false; // If height difference is more than 1, not balanced
        } else {
            // Check if left subtree and right subtree are balanced
            return this.isBalanced(node.left) && this.isBalanced(node.right);
        }
    }

    height(node) {
        if (node === null) {
            return 0; // Base case: the height of an empty tree is 0
        } else {
            // Compute the height of each subtree
            let leftHeight = this.height(node.left);
            let rightHeight = this.height(node.right);

            // Return the maximum height plus 1 for the current node
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }

}

const bt = new binaryTree();
bt.insert(10);
bt.insert(9);
bt.insert(11);

console.log(bt.isBalanced());