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

    // Print all elements by order
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
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

    // Method to remove duplicates in a sorted singly linked list
    removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
                if (current.next) {
                    current.next.prev = current;
                } else {
                    this.tail = current;
                }
            } else {
                current = current.next;
            }
        }
    }
}

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(3);


list.prepend(4);
list.prepend(5);
list.prepend(6);


list.deleteNode(4);

list.insertAfter(6,20);
list.insertBefore(6,555);

// list.printListReverse();
list.removeDuplicates();
list.printList();
