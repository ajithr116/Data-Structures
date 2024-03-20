class Stack {
    constructor() {
        this.data = [];
    }

    push(data) {
        this.data[this.data.length] = data;
    }

    printStack() {
        return this.data;
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        const poppedElement = this.data[this.data.length - 1];
        this.data.length -= 1;
        return poppedElement;
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.data[this.data.length - 1];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    size() {
        return this.data.length;
    }

    clear() {
        this.data = [];
    }

    haveOrNot(data) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === data) {
                return true;
            }
        }
        return false;
    }

    middleValue() {
        return this.data[Math.floor(this.data.length / 2)];
    }

    locate(data) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === data) {
                return i + 1;
            }
        }
        return -1;
    }

    reverse() {
        const reversedStack = new Stack();
        for (let i = this.data.length - 1; i >= 0; i--) {
            reversedStack.push(this.data[i]);
        }
        return reversedStack;
    }
}

const stack = new Stack();

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
