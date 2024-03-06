
class Node{
    constructor(data,next=null){
        this.data = data;
        this.next=next;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }
    lenghtOfNode(){
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }
    middle(){
        const len = this.lenghtOfNode();
        const mid = Math.floor(len/2);
        let current = this.head;
        for(let i=0;i<mid;i++){
            current = current.next;
        }
        return current.data;
    }
}

const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);


console.log("count = ",list.lenghtOfNode());
console.log("middle data = " , list.middle());

