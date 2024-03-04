class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Convert array to a linked list
    fromArray(array) {
        array.forEach(data => this.append(data));
    }

    // Add a node at the end
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Add a node at the beginning
    prepend(data) {
        const newNode = new Node(data, this.head);
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    // Method to print the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Method to delete a node with the specified value
    deleteNode(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }
                return;
            }
            current = current.next;
        }
    }

    // Method to insert a node after a node with x data
    insertAfter(x, data) {
        let current = this.head;
        while (current) {
            if (current.data === x) {
                const newNode = new Node(data, current.next, current);
                if (current.next) {
                    current.next.prev = newNode;
                } else {
                    this.tail = newNode;
                }
                current.next = newNode;
                return;
            }
            current = current.next;
        }
    }

    // Method to insert a node before a node with x data
    insertBefore(x, data) {
        let current = this.head;
        while (current) {
            if (current.data === x) {
                const newNode = new Node(data, current, current.prev);
                if (current.prev) {
                    current.prev.next = newNode;
                } else {
                    this.head = newNode;
                }
                current.prev = newNode;
                return;
            }
            current = current.next;
        }
    }

    // Print all elements in reverse order
    printListReverse() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}



let list = new DoublyLinkedList();

// Add nodes at the end
list.append(4);
list.append(5);
list.append(6);

// Add node at the beginning
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(7);
list.prepend(7);


// Print the linked list
console.log("The linked list is:");
// list.printList();

// Delete a node with the specified value
// list.deleteNode(20);

// Print the linked list after deletion
console.log("The linked list after deletion is:");
// list.printList();

// Insert a node after a node with x data
list.insertAfter(6, 20); // Inserts 20 after 10
list.insertBefore(3, 25); // Inserts 25 before 30

// Print the linked list after insertion
console.log("The linked list after insertion is:");
// list.printList();

// Remove duplicates in a sorted singly linked list
// list.removeDuplicates();

// Print the linked list after removing duplicates
console.log("The linked list after removing duplicates is:");
// list.printList();

// Converts array to linked list
// list.fromArray([1, 2, 3, 4, 5]); 

// Prints: 5 4 3 2 1
list.printListReverse(); 
