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
        return poppedNode;
    }

    shift() {
        if(!this.head) return undefined;
        let prevHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = prevHead.next;
            this.head.prev = null;
            prevHead.next = null;
        }
        this.length--;
        return prevHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    } 

    get(index) {
        if(index < 0 || index > this.length) return null;
        let count, current;
        if(index <= this.length / 2) {
            count = 0;
            current = this.head;
            while(count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    } 

    set(index, value) {
        let foundNode = this.get(index);
        if(foundNode != null) {
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);
        let newNode = new Node(value);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();
        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
//         removedNode.prev.next = removedNode.next;
//         removedNode.next = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
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
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
doublyLinkedList.push(6);
doublyLinkedList.push(7);
doublyLinkedList.pop();
doublyLinkedList.shift();
console.log(doublyLinkedList.length);
console.log(doublyLinkedList.print());