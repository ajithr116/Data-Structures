
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }
    push(data){
        const newNode = new Node(data);
        if(!this.top){
            this.top = newNode;
        }
        else{
            newNode.next = this.top;
            this.top = newNode;
        }
    }
    show(){
        let current = this.top;
        while(current){
            console.log("data : "+current.data);
            current = current.next;
        }
    }
    showTopData(){
        console.log("Top data = "+this.top.data);
    }
    pop(){
        if(!this.top){
            return "null";
        }
        else{
            const poppedNode = this.top;
            this.top = this.top.next;
            return poppedNode.data;
        }
    }
    isEmpty(){
        return this.top.data === null;
    }
    size(){
        let count = 0;
        let current = this.top;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }
    middleValue(){
        const size = this.size();
        const mid = Math.floor(size/2);
        let current = this.top;
        for(let i=0;i<mid;i++){
            current = current.next;
        }
        return current.data;
    }
    locate(data){
        const size = this.size();
        let count = 0;
        let flag = "null";
        let current  = this.top;
        while(current){
            if(data===current.data){
                flag = count;
                break;
            }
            count++;
            current = current.next;
        }
        if(flag!="null"){
            return flag;
        }else{
            return flag;
        }
    }
    reverse(){
        let arr = [];
        let current  = this.top;
        while(current){
            arr.unshift(current.data);
            current = current.next;
        }
        return arr;
    }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.show();
stack.showTopData();
console.log(stack.pop());
stack.show();
console.log(stack.isEmpty());
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.size());
stack.show();
console.log(stack.middleValue());
console.log(stack.locate(5)+1);
console.log(stack.reverse());

