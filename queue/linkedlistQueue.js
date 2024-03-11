class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null; // Front node (initially null for empty queue)
      this.rear = null; // Rear node (initially null for empty queue)
    }
  
    // Enqueue operation: Adds an element to the rear of the queue
    enqueue(item) {
      const newNode = new Node(item);
      if (this.isEmpty()) {
        this.front = this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    // Dequeue operation: Removes and returns the element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return undefined; // Handle underflow (trying to dequeue from an empty queue)
      }
      const removedData = this.front.data;
      if (this.front === this.rear) {
        this.front = this.rear = null; // Queue becomes empty after dequeue
      } else {
        this.front = this.front.next;
      }
      return removedData;
    }
  
    // Peek operation: Returns the element at the front of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        return undefined; // Handle underflow
      }
      return this.front.data;
    }
  
    // isEmpty operation: Checks if the queue is empty
    isEmpty() {
      return this.front === null;
    }
  
    // printQueue operation: Prints the elements of the queue (without modifying order)
    printQueue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
  
      let current = this.front;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage
  const myQueue = new Queue();
  myQueue.enqueue(5);
  myQueue.enqueue(8);
  myQueue.printQueue(); // Output: 5, 8
  console.log(myQueue.dequeue()); // Output: 5
  console.log(myQueue.peek()); // Output: 8
  