# Define the Node class for the linked list
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Define the Queue class using a linked list
class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    # Method to check if the queue is empty
    def is_empty(self):
        return self.front is None

    # Method to add an element to the rear of the queue
    def enqueue(self, data):
        new_node = Node(data)
        if self.rear is None:
            # If the queue is empty, the new node is both the front and rear
            self.front = self.rear = new_node
            return
        # Add the new node to the end of the linked list and update rear
        self.rear.next = new_node
        self.rear = new_node

    # Method to remove an element from the front of the queue
    def dequeue(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        # Remove the front node and update the front to the next node
        dequeued_node = self.front
        self.front = self.front.next

        # If the front becomes None, set the rear to None (queue is now empty)
        if self.front is None:
            self.rear = None

        return dequeued_node.data

    # Method to get the front element of the queue without removing it
    def peek(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        return self.front.data

    # Method to display the queue
    def display(self):
        if self.is_empty():
            print("Queue is empty")
            return
        current = self.front
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Example usage
if __name__ == "__main__":
    q = Queue()

    # Enqueue elements
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)
    q.enqueue(40)

    # Display the queue
    print("Queue:")
    q.display()  # Output: 10 -> 20 -> 30 -> 40 -> None

    # Peek at the front element
    print("Front element:", q.peek())  # Output: 10

    # Dequeue elements
    print("Dequeued:", q.dequeue())  # Output: 10
    print("Dequeued:", q.dequeue())  # Output: 20

    # Display the queue after dequeue
    print("Queue after dequeue:")
    q.display()  # Output: 30 -> 40 -> None

    # Peek at the front element
    print("Front element:", q.peek())  # Output: 30
