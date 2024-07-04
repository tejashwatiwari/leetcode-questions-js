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
var mergeNodes = function(head) {
    let curr = head;
    let temp = head.next;
    let sum = 0;
    while(temp){
        if(temp.val===0){
            curr.val = sum;
            if(temp.next===null) break;
            curr = curr.next;
            sum = 0;
        }
        sum+= temp.val;
        temp = temp.next;
    }
    curr.next = null;
    return head;
};