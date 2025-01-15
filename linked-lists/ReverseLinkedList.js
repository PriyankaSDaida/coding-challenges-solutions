// Problem: Reverse a Linked List
// Input: 1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;

    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

// Example Usage
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

const printList = (head) => {
    let current = head;
    let result = '';
    while (current) {
        result += current.value + ' -> ';
        current = current.next;
    }
    result += 'null';
    return result;
};

const reversedHead = reverseLinkedList(head);
console.log(printList(reversedHead));