/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
* Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 
Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
*/

let mergeTwoLists = (l1, l2) => {
  let l1_currentNode = l1;
  let l2_currentNode = l2;
  
  if (l1_currentNode.val > l2_currentNode.val) {
    let merged = ListNode(l2_currentNode.val);
    l2_currentNode = l2_currentNode.next;
  } else {
    let merged = ListNode(l1_currentNode.val);
    l1_currentNode = l1_currentNode.next;
  }

  let merged_currentNode = merged;

  while (l1_currentNode.val !== null && l2_currentNode.val !== null) {
    if (l1_currentNode.val > l2_currentNode.val) {
      merged_currentNode.next = l2_currentNode.val;
      merged_currentNode = merged_currentNode.next;
      l2_currentNode = l2_currentNode.next;
    } else {
      merged_currentNode.next = l1_currentNode.val;
      merged_currentNode = merged_currentNode.next;
      l1_currentNode = l1_currentNode.next;
    }
  }
  return merged;
}

/*
A linked list is a unidirectional list with nodes. It starts with a parent class LinkedList that consists of ListNodes. Each List has a val and next property.
*/