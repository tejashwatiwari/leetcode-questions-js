/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
      // Create a new list node and a tail pointer
    let head = new ListNode, tail

    // If one of the lists is empty, return the other list
    if (!list1 || !list2)
        return list2 || list1

    // Compare the head values of list1 and list2, and set the head to the smaller one
    if (list1.val < list2.val) {
        head = list1
        list1 = list1.next
    }
    else {
        head = list2
        list2 = list2.next
    }

    // Set tail to the current head
    tail = head

    // Iterate while both lists have elements
    while (list1 && list2) {
        // Compare the current values of list1 and list2
        if (list1.val < list2.val) {
            // Append the smaller value to the merged list and move the pointer forward
            tail.next = list1
            tail = tail.next
            list1 = list1.next
        } else {
            // Append the smaller value to the merged list and move the pointer forward
            tail.next = list2
            tail = tail.next
            list2 = list2.next
        }
    }

    // Append any remaining elements from list1 or list2
    tail.next = list1 || list2

    // Return the head of the merged list
    return head
};