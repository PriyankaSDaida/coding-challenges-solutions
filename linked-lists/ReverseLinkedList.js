/**********  Reverse a Linked List **********/
// Given a singly linked list, return the linked list in reverse.
// Example:
// Input: 1 -> 2 -> 3 -> 4 -> 5 
// Output: 5 -> 4 -> 3 -> 2 -> 1

// Time: O(n)
// Space: O(1)
// Explanation: We can reverse the linked list by iterating through the linked list and reversing the pointers of each node.

// Definition of a Node in the Linked List
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to reverse a linked list
function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next; // Save the next node
        current.next = prev;    // Reverse the current node's pointer
        prev = current;         // Move prev to the current node
        current = next;         // Move to the next node
    }

    return prev; // New head of the reversed linked list
}

// Function to print the linked list
function printLinkedList(head) {
    let current = head;
    const result = [];
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Example Usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original Linked List:");
printLinkedList(head);

head = reverseLinkedList(head);

console.log("Reversed Linked List:");
printLinkedList(head);