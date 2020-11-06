/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let i = 0;

    while (i<l2.length){
        l1.push(l2[i]);
        i++
    }
    return l1.sort();
};

console.log(mergeTwoLists([1,2,4],[1,3,4]));