class Queue{
    constructor(){
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(data){
        this.data[this.rear] = data;
        this.rear++;
    }   
    isEmpty(){
        return this.front === this.rear;
    }
    dequeue(){
        if(this.isEmpty()){
            return console.log("null");
        }
        else{
            console.log("dequeue value are : " + this.data[this.front]);
            this.front++;
            return ;
        }
    }
    getFront(){
        if(this.isEmpty()){
            return console.log("null  ");
        }
        else{
            return console.log("getFront : " + this.data[this.front]);
        }
    }
    printQueue() {
        if (this.isEmpty()) {
          return console.log("Queue is empty"); 
        }
      
        const front = this.front;
        // Loop until front reaches rear (all elements printed)
        while (this.front !== this.rear) {
          console.log("printQueue : " + this.data[this.front]);
          this.front++;
        }
        this.front = front;
      }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.getFront()
queue.dequeue()
queue.getFront()
queue.printQueue()
queue.getFront()


