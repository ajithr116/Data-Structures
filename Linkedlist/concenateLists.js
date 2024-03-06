class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList(){
        if(!this.head){
            console.log("List is empty ");
        }
        else{
            let current = this.head;
            while(current){
                console.log("data = " , current.data);
                current = current.next;
            }
        }
    }

    concatenate(newList){
        if(!this.head){
            this.head = newList.head;
        }
        else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newList.head;
        }
    }
}

const list = new SinglyLinkedList();
list.append(1)
list.append(2)
list.append(3)
list.printList();

const list2 = new SinglyLinkedList();
list2.append(7);
list2.append(8);
list2.append(9);
list2.printList();

console.log("concetenate values are : ")
list.printList(list.concatenate(list2));
