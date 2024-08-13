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

    // Method to check if the list contains a specific value
    contains(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
}

// Example usage:
const SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);

console.log(SLL1.contains(5));  // true
console.log(SLL1.contains(18)); // true
console.log(SLL1.contains(100)); // false
