/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    let current = head; // Pointer to traverse the original linked list
  let digits = []; // Array to hold the digits of the number

  // Traverse the linked list and collect its values into the 'digits' array
  while (current) {
    digits.push(current.val);
    current = current.next;
  }

  let carry = 0; // Initialize carry for managing the doubling process
  let length = digits.length; // Store the length of the digits array

  // Process each digit from least significant to most significant (right to left)
  for (let i = length - 1; i >= 0; i--) {
    carry += 2 * digits[i]; // Double the current digit and add the carry
    digits[i] = carry % 10; // Update the current digit after doubling
    carry = Math.trunc(carry / 10); // Calculate new carry
  }

  // If there is a remaining carry after the last iteration, prepend it to the array
  if (carry) digits.unshift(carry);

  // Variables to create the new linked list representing the doubled value
  let newHead = null; // Head of the new linked list
  let tail = null; // Tail to help in appending new nodes

  // Convert the array back to a linked list
  for (let value of digits) {
    current = new ListNode(value); // Create a new node for each digit
    if (newHead) {
      tail.next = current; // Append the new node to the list
      tail = tail.next; // Move the tail pointer
    } else {
      tail = newHead = current; // Initialize the head and tail if it's the first node
    }
  }

  return newHead; // Return the head of the new doubled linked list
};