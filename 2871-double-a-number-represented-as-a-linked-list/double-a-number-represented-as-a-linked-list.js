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
     let digits = [];
    let current = head;
    while (current) {
        digits.push(current.val);
        current = current.next;
    }

    // Double the number represented by digits array
    let result = [];
    let carry = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = 2 * digits[i] + carry;
        result.unshift(sum % 10); // prepend the digit
        carry = Math.floor(sum / 10);
    }
    if (carry > 0) {
        result.unshift(carry); // if there's any carry left, add it to the front
    }

    // Convert the result array back to linked list
    let dummyHead = new ListNode(0);
    let node = dummyHead;
    for (let val of result) {
        node.next = new ListNode(val);
        node = node.next;
    }

    return dummyHead.next;
};