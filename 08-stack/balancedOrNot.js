class Stack{
    constructor(){
        this.data = [];
    }
    push(data){
        this.data.push(data);
    }
    pop(){
        return this.data.pop();
    }
    peek(){
        if(this.data.length>0){
            return this.data[this.data.length-1];
        }
    }
    isEmpty(){
        return this.data.length===0
    }
}

function isBalanced(s) {
    let stack = new Stack();
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(s[i]);
        } else if(s[i] === ')') {
            if(stack.isEmpty() || stack.pop() !== '(') {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(isBalanced('((()))')); 
console.log(isBalanced('(()))'));
