class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Method to add a node to the front of the list
    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    // Method to remove the head node from the list
    removeFront() {
        if (this.head === null) {
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }

    // Method to return the value at the head of the list
    front() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }
}
const SLL1 = new SLL();
console.log(SLL1.addFront(18)); // Node { data: 18, next: null }
console.log(SLL1.addFront(5));  // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

console.log(SLL1.removeFront()); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()); // Node { data: 18, next: null }

console.log(SLL1.front()); // 18
SLL1.removeFront();
console.log(SLL1.front()); // null
