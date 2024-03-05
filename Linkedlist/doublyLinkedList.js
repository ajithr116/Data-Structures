/*class Node {
    constructor(data, next = null, prev = null) {
        this.prev = prev;  
        this.data = data;
        this.next = next;

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
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }
    // append(data) {
    //     const newNode = new Node(data);
    //     if (!this.head) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //     } else {
    //         newNode.prev = this.tail;
    //         this.tail.next = newNode;
    //         this.tail = newNode;
    //     }
    // }

    // Add a node at the beginning
    // prepend(data) {
    //     const newNode = new Node(data, this.head);
    //     if (this.head) {
    //         this.head.prev = newNode;
    //     }
    //     this.head = newNode;
    //     if (!this.tail) {
    //         this.tail = newNode;
    //     }
    // }

    // Add a node at the beginning
    prepend(data) {
        const newNode = new Node(data, this.head);
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
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
                const newNode = new Node(data, current.next, current.prev);
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
                const newNode = new Node(data, current, current.prev);  //next and prev
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
    // Method to get the length of the Doubly Linked List
    getLength() {
        let count = 0;
        let current = this.head;
        while (current) {
        count++;
        current = current.next;
        }
        return count;
    }
}
*/
class Node {
    constructor(data, next = null, prev = null) {
        this.prev = prev;  
        this.data = data;
        this.next = next;

    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // Convert array to a linked list
    fromArray(array) {
        array.forEach(data => this.append(data)); // O(n^2) if `append()` is O(n)
    }

    // Add a node at the end
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }
    // Time Complexity: O(n) - Since in the worst case, it traverses the entire list to find the last node.
    
    // Add a node at the beginning
    prepend(data) {
        const newNode = new Node(data, this.head);
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
    }
    // Time Complexity: O(1) - It simply creates a new node and updates the head, which takes constant time.

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
    // Time Complexity: O(n) - In the worst case, it may need to traverse the entire list to find the node to delete.
    
    // Method to insert a node after a node with x data
    insertAfter(x, data) {
        let current = this.head;
        while (current) {
            if (current.data === x) {
                const newNode = new Node(data, current.next, current.prev);
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
    // Time Complexity: O(n) - In the worst case, it may need to traverse the entire list to find the node after which to insert.

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
    // Time Complexity: O(n) - In the worst case, it may need to traverse the entire list to find the node before which to insert.

    // Print all elements by order
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    // Time Complexity: O(n) - It traverses the entire list to print each element.

    // Print all elements in reverse order
    printListReverse() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
    // Time Complexity: O(n) - It traverses the entire list to print each element in reverse order.

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
    // Time Complexity: O(n) - It traverses the entire list once to remove duplicates.

    // Method to get the length of the Doubly Linked List
    getLength() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    // Time Complexity: O(n) - It traverses the entire list once to count the number of nodes.


}
    /*
    Methods like append, prepend, insertAfter, insertBefore, deleteNode, printList, printListReverse, removeDuplicates, and getLength all have a time complexity of O(n) where n is the number of nodes in the linked list.
    The fromArray method has a time complexity of O(n^2) if the append method has a time complexity of O(n) because it calls the append method for each element in the array.
    */


/*
Node Class: The space complexity for creating a single node is O(1) because it only requires memory for the data and two pointers (next and prev).

DoublyLinkedList Class: The space complexity for creating an empty Doubly Linked List object is also O(1) because it only requires memory for two pointers (head and tail), which initially point to null.

fromArray Method: This method iterates over the input array and calls the append method for each element. Since it creates a new node for each element, the space complexity is O(n), where n is the number of elements in the input array.

append Method: This method creates a new node, so the space complexity is O(1) for each node added to the list.

prepend Method: Similar to the append method, it creates a new node, so the space complexity is O(1) for each node added to the list.

deleteNode Method: The method doesn't create any new nodes, so the space complexity is O(1).

insertAfter Method: It creates a new node if necessary, but the space complexity is still O(1) for each node added.

insertBefore Method: Similar to the insertAfter method, the space complexity is O(1) for each node added.

printList Method: The space complexity is O(1) because it only requires memory for a single pointer (current) as it traverses the list.

printListReverse Method: Similar to the printList method, the space complexity is O(1).

removeDuplicates Method: The space complexity is O(1) because it only requires memory for a few pointers (current, prev, and values) as it traverses the list.

getLength Method: The space complexity is O(1) because it only requires memory for a single pointer (current) as it traverses the list.
*/

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(3);


list.prepend(4);
list.prepend(5);
list.prepend(6);


list.deleteNode(4);

list.insertAfter(5,20);
list.insertBefore(6,555);
list.printList();
console.log("length "+list.getLength());

// list.printListReverse();
list.removeDuplicates();
// list.printList();
