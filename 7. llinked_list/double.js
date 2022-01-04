class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = poppedNode.prev;
            newTail.next = null;
            this.tail = newTail;
            poppedNode.prev = null; 
        }
        this.length--;
        console.log(this.length);
        return poppedNode;
    }

    print() {
        let linkedArray = [];
        let current = this.head;
        while(current) {
            linkedArray.push(current.value);
            current = current.next;
        }
        return linkedArray;
    }
}


let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(2);
doublyLinkedList.push(2);
doublyLinkedList.pop();
console.log(doublyLinkedList.print());