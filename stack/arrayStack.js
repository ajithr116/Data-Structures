class Stack{
    constructor(){
        this.data = [];
    }
    push(data){
        this.data.push(data);
    }
    printStack(){
        return this.data;
    }
    pop(){
        this.data.pop();
    }
    peek(){
        if(this.data.length>0){
            return this.data[this.data.length-1];
        }
    }
    isEmpty(){
        return this.data.length===0
    }
    size(){
        return this.data.length;
    }
    clear(){
        this.data = [];
    }
    haveOrNot(data){
        return this.data.includes(data);
    }
    middleValue(){
        return this.data[Math.floor(this.data.length/2)]
    }
    locate(data){
        return this.data.indexOf(data)+1;
    }
    reverse(){
        return this.data.split('').reverse()
    }
}

const stack = new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.printStack());
stack.pop();
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.clear();
console.log(stack.printStack());
stack.push(11);
stack.push(22);
stack.push(33);
stack.push(44);
console.log(stack.printStack());
console.log(stack.haveOrNot(12));
console.log(stack.haveOrNot(11));
console.log(stack.middleValue());
console.log(stack.locate(22));


