class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // append
    push(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // remove courses version
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current.next;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        return current;
    }

    traverse() {
        if (!this.head) return undefined;
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        return current;
    }

    // remove shorter self version
    pop2() {
        if (!this.head) return undefined;
        let newTail = this.traverse();
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        return true;
    }


    // prepend
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.push(value);
        } else {
            let prevHead = this.head;
            newNode.next = prevHead;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    // remove from the beginning
    shift() {
        if (!this.head) return undefined;
        const prevHead = this.head;
        const newHead = this.head.next;
        this.head = newHead;
        this.length--;
        return prevHead;
    }

    get(index) {
        if(!this.head || index < 0 || index > this.length - 1) return undefined;
        let current = this.head;
        let iterations = 0;
        while(iterations < index) {
            current = current.next;
            iterations++;
        }
        return current;
    }

    set(index, value) {
        if(!this.head || index < 0 || index > this.length - 1) return undefined;
        let currentNode = this.get(index);
        currentNode.value = value;
        return true;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index == 0) return !!this.unshift(value);
        if(this.length === index) return !!this.push(value);
        let preNode = this.get(index - 1);
        let changingNode = preNode.next;
        const newNode = new Node(value);
        newNode.next = changingNode;
        preNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index == 0) return !!this.shift();
        if(this.length === index) return !!this.pop();
        let preNode = this.get(index - 1);
        let changingNode = preNode.next;
        let postNode = changingNode.next;

        preNode.next = postNode;
        this.length--;
        return changingNode;
    }

    reverse() {
        if(!this.head) return undefined;
        if(!this.head.next) return this.head;
        let firstNode = this.head;
        this.tail = firstNode;
        let secondNode = firstNode.next;

        while(secondNode) {
            let thirdNode = secondNode.next;
            secondNode.next = firstNode;
            firstNode = secondNode;
            secondNode = secondNode.next;
        }
        this.head.next = null;
        this.head = this.secondNode;
        console.log(this.print())
    }


    print() {
        let linkedArray = [];
        let current = this.head;
        while (current) {
            linkedArray.push(current.value);
            current = current.next;
        }
        return linkedArray;
    }
}

let singlyLinkedList = new SinglyLinkedList(2);
singlyLinkedList.push(3);
singlyLinkedList.push(4);
singlyLinkedList.push(5);
singlyLinkedList.push(6);
singlyLinkedList.unshift(1);
singlyLinkedList.shift();
singlyLinkedList.pop();
//console.log(singlyLinkedList.traverse());
//console.log(singlyLinkedList.get(1));
singlyLinkedList.set(1, 10);
singlyLinkedList.insert(2, "Hello");
singlyLinkedList.remove(2);
console.log(singlyLinkedList.reverse())
console.log(singlyLinkedList.print());
