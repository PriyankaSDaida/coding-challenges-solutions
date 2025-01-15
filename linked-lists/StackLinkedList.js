class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null; // Top of the stack
        this.size = 0;   // Size of the stack
    }

    // Push an element onto the stack
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        const poppedData = this.top.data;
        this.top = this.top.next;
        this.size--;
        return poppedData;
    }

    // Peek the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.top.data;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.top === null;
    }

    // Get the size of the stack
    getSize() {
        return this.size;
    }

    // Print the stack
    print() {
        let current = this.top;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }
}

// Example usage
const linkedListStack = new Stack();
linkedListStack.push(10);
linkedListStack.push(20);
linkedListStack.push(30);
console.log("Stack after pushing elements:");
linkedListStack.print();
console.log("Top element:", linkedListStack.peek());
console.log("Popped element:", linkedListStack.pop());
console.log("Stack after popping an element:");
linkedListStack.print();