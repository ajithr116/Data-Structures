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

    merge(queueToMerge) {
        while (!queueToMerge.isEmpty()) {
            const element = queueToMerge.dequeue();
            this.enqueue(element);
        }
    }

    print() {
        let result = "";
        for (let i = this.front; i < this.rear; i++) {
            result += this.data[i] + " ";
        }
        console.log(result.trim());
    }
}

const queue = new Queue();
const queue2 = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue2.enqueue(11);
queue2.enqueue(22);
queue2.enqueue(33);
queue.merge(queue2);
queue.print(); // Output: 1 2 3 11 22 33
