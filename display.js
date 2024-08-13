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

    // Method to return the number of nodes in the list
    length() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    // Method to display all the values in the list
    display() {
        let currentNode = this.head;
        let result = "";
        while (currentNode !== null) {
            result += currentNode.data;
            if (currentNode.next !== null) {
                result += ", ";
            }
            currentNode = currentNode.next;
        }
        return result;
    }
}

// Example usage:
const SLL1 = new SLL();
SLL1.addFront(76); // Node { data: 76, next: null }
SLL1.addFront(2);  // Node { data: 2, next: Node { data: 76, next: null } }
console.log(SLL1.display()); // "2, 76"
SLL1.addFront(11.41); // Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } }
console.log(SLL1.display()); // "11.41, 2, 76"
