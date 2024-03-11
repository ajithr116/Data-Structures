class Queue {
    constructor() {
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(data) {
        this.data[this.rear] = data;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        const frontData = this.data[this.front];
        this.front++;
        return frontData;
    }

    isEmpty() {
        return this.front === this.rear;
    }

    size() {
        return this.rear - this.front;
    }
    sum(){
        let sum = 0;
        const dequeuedElements = [];
        while(!this.isEmpty()){
            const element = this.dequeue();
            sum += element;
            dequeuedElements.push(element);
        }
        for(const element of dequeuedElements){
            this.enqueue(element);
        }
        return sum;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.sum());
console.log(queue.size());

