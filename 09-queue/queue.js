
class Queue{
    constructor(){
        this.data = [];
    }
    enqueue(data){
        return this.data.push(data);
    }
    dequeue(){
        
        if(this.data.length===0){
            return "null";
        }
        else{
            return "Enqueued : "+ this.data.shift();
        }
    }
    front(){
        if(Array.length<=0){
            return console.log("null");
        }
        return console.log("front : " + this.data[0]);
    }
    isEmpty(){
        return console.log("isEmpty : "+this.data.length===0);
    }
    size(){
        return console.log("size : "+this.data.length);
    }
    printQueue(){
        for(let i=0;i<=this.data.length;i++){
            console.log("print : " + this.data.shift());
        }
    }
}


const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue());
queue.front();
queue.size();
queue.printQueue();
queue.size();
