// Node class
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Singly Linked List class
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add node at the end
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; 
            }
            current.next = newNode;
        }
    }

    // Convert array to a linked list
    fromArray(array) {
        array.forEach(data => this.append(data));
    }

    // Method to add node at the beginning
    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Method to print the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Method to delete multiple node with the specified value
    deleteNode(key) {
        while (this.head && this.head.data === key) {
            this.head = this.head.next;
        }
        let current = this.head;
        while (current && current.next) {
            if (current.next.data === key) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    // Method to delete a node with the specified value
    deleteMultipleNodex(key) {
        while (this.head && this.head.data === key) {
            this.head = this.head.next;
        }
        let current = this.head;
        while (current && current.next) {
            if (current.next.data === key) {
                current.next = current.next.next;
                return key;
            } else {
                current = current.next;
            }
        }
    }
        

    // Method to remove duplicates in a sorted singly linked list
    removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    // Method to remove all duplicates in an unsorted singly linked list
    removeDuplicates() {
        let current = this.head;
        let previous = null;
        let values = new Set();
        while (current) {
            if (values.has(current.data)) {
                previous.next = current.next;
            } else {
                values.add(current.data);
                previous = current;
            }
            current = current.next;
        }
    }


    // Method to insert a node after a node with x data
    insertAfter(x, data) {
        let current = this.head;
        while (current) {
            if (current.data === x) {
                current.next = new Node(data, current.next);
                return;
            }
            current = current.next;
        }
    }

    // Method to insert a node before a node with x data
    insertBefore(x, data) {
        if (this.head && this.head.data === x) {
            this.head = new Node(data, this.head);
            return;
        }
        let current = this.head;
        while (current && current.next) {
            if (current.next.data === x) {
                current.next = new Node(data, current.next);
                return;
            }
            current = current.next;
        }
    }
    // Print all elements in reverse order
    printListReverse() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.unshift(current.data);
            current = current.next;
        }
        console.log(arr.join(' -> '));
    }
    hasLoop() {
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;          // the "tortoise" moves one step at a time
            fast = fast.next.next;     // the "hare" moves two steps at a time

            if (slow === fast) {       // if they meet, there is a loop
                return true;
            }
        }

        return false;  // if we reach the end of the list, there is no loop
    }
}

const sl = new SinglyLinkedList();
console.log(sl.hasLoop())
