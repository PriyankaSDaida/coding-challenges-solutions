class Stack {
    constructor() {
        this.stack = [];
    }

    // Push an element onto the stack
    push(element) {
        this.stack.push(element);
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack.pop();
    }

    // Peek the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack[this.stack.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.stack.length;
    }

    // Print the stack
    print() {
        console.log(this.stack.join(" -> "));
    }
}

// Example usage
const arrayStack = new Stack();
arrayStack.push(10);
arrayStack.push(20);
arrayStack.push(30);
console.log("Stack after pushing elements:");
arrayStack.print();
console.log("Top element:", arrayStack.peek());
console.log("Popped element:", arrayStack.pop());
console.log("Stack after popping an element:");
arrayStack.print();