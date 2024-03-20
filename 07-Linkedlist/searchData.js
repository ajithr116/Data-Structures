class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class singlyLinkedList{
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
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }
    searchValueExist(value){
        if(!this.head){
            return "Empty datas ";
        }
        else{
            let current = this.head;
            while(current){
                if(current.data===value){
                    return "value exists ";
                }
                current = current.next;
            }
            return "value does not exist ";
        }
    }

}

const list = new singlyLinkedList();
list.append(1);
console.log(list.searchValueExist(2));

