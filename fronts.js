



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
        if(!this.head) {
            this.head = newNode;
                return this;
            }
            // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
            newNode.next = this.head;
            // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
            this.head = newNode;
            return this;
        }
    

    // Method to remove the head node from the list
    removeFront() {
        if (this.head === null) {
            return null;
        }
        this.head = this.head.next;//i make pointer point on next node so ! the previous node not appear and it's remove 
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
