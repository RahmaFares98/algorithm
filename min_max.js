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

    // Method to return the largest value in the list
    max() {
        if (this.head === null) {
            return null;
        }
        let maxVal = this.head.data;
        let currentNode = this.head.next;
        while (currentNode !== null) {
            if (currentNode.data > maxVal) {
                maxVal = currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return maxVal;
    }

    // Method to return the smallest value in the list
    min() {
        if (this.head === null) {
            return null;
        }
        let minVal = this.head.data;
        let currentNode = this.head.next;
        while (currentNode !== null) {
            if (currentNode.data < minVal) {
                minVal = currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return minVal;
    }

    // Method to return the average value of all nodes in the list
    average() {
        if (this.head === null) {
            return null;
        }
        let sum = 0;
        let count = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            sum += currentNode.data;
            count++;
            currentNode = currentNode.next;
        }
        return sum / count;
    }
}

const SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
SLL1.addFront(11.41);

console.log(SLL1.max());     // 76
console.log(SLL1.min());     // 2
console.log(SLL1.average()); // 29.803333333333335
