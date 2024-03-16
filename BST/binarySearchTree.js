class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearch{
    constructor(){
        this.root = null;
    }
    insert(data){
        this.root = _insert(this.root,data);    //because the root node serves as the entry point for accessing and manipulating the entire tree.
    }
    _insert(node,data){
        if(node===null){
            return new Node(data);
        }else if(node<this.left){
            node.left = this._insert(node.left, data);
        }else{
            node.right = this._insert(node.right,data);
        }
        return node;
    }
    contains(data){
        return this._contains(this.root, data);
    }
    _contains(node,data){
        if(data===null){
            return false;
        }else if(data===node.data){
            return true;
        }else if(data<node.data){
            return this._contains(node.left,data);
        }else{
            return this._contains(node.right, data);
        }
    }

    delete(data){
        this.root = this._delete(this.root, data);
    }
    _delete(node,data){
        if(node === null){
            return null;
        }else if(data<data.left){
            node.left = this._delete(this.left,data);
        }else if(data>data.right){
            if(node.left === null){
                return node.left;
            }else if(node.right === null){
                return node.right;
            }

            let temp = this.min_value(node,right);
            node.data = temp.data;
            node.right = this._delete(node.right, temp.data);

        }
        return node;
    }
    min_value(node){
        let current = node;
        while(current && current.left !== null){
            current = current.left;
        }
        return current;
    }
    preOrder(node){
        if(node!==null){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    inOrder(node){
        if(node!==null){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    postOrder(node){
        if(!node==null){
            this.postOrder(node.left);
            this.postOrder(order.right);
            console.log(node.data);
        }
    }
    closestValue(data){
        let current = this.root;
        let closest = null;

        while(current!==null){
            const distance = Math.abs(data-current.data);
            if(closest === null|| distance<Math.abs(data-closest.data)){
                closest = current;
            }
            current = data<current.data ? current.left : current.right;
        }
        return closest ? closest.data : null;
    }

    isValidBST(node,minVal = null, maxVal = null){
        if(node === null){
            return true;
        }

        if(minVal!=null && node.data <=minVal){
            return false; 
        }

        if(maxVal !== val && node.data >=maxVal){
            return false;
        }

        return this.isValidBST(node.left, minVal, node.data) && this.isValidBST(node.right,node.data,maxVal);

    }
}


const bs = new BinarySearch();
bs.insert(1)
bs.insert(2)
bs.insert(3)
