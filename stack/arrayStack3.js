class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }

    length() {
        return this.top;
    }

    peek() {
        return this.data[this.top-1];
    }

    isEmpty() {
        return this.top === 0;
    }

    pop() {
        if( !this.isEmpty() ) {
            this.top = this.top -1;
            return this.data.pop(); // removes the last element
        }
    }

    print() {
        var top = this.top - 1; // because top points to index where new element to be inserted
        while(top >= 0) { // print upto 0th index
            console.log(this.data[top]);
            top--;
        }
    }

    clear() {
        this.data.length = 0;
        this.top = 0;
    }

    haveOrNot(data) {
        for(let i = 0; i < this.top; i++) {
            if(this.data[i] === data) {
                return true;
            }
        }
        return false;
    }

    middleValue() {
        if(this.top > 0) {
            return this.data[Math.floor(this.top/2)];
        }
    }

    locate(data) {
        for(let i = 0; i < this.top; i++) {
            if(this.data[i] === data) {
                return i+1;
            }
        }
        return -1;
    }

    reverse() {
        let start = 0;
        let end = this.top - 1;
        while(start < end) {
            let temp = this.data[start];
            this.data[start] = this.data[end];
            this.data[end] = temp;
            start++;
            end--;
        }
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