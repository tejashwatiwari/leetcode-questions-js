/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast=slow=head
  for(let i=0;i<n;i++){
      fast=fast.next
  }
  //If the fast pointer has reached the end of the list,
  // it means n is equal to the length of the list. In this case, the first node (head) needs to be removed, 
  if(!fast) return head.next
  while(fast && fast.next){
      fast=fast.next
      slow=slow.next
  }
  slow.next=slow.next.next
  return head 
};