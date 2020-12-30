//run length encoding problem leetcode. split array into pairs, the create a new array/decompressed list that has the second number of the individual pairs listed as many times as the first number in the pair. Ex. pair [3, 4] should push 4 three times as [4,4,4]
// nums = [1, 2, 3, 4]
// partArr = []
// decompArr = [];

// var partition = function (nums) {
//     var acc = nums.reduce(function (acc, val, idx, nums) {
//         if (idx % 2 === 0)
//             acc.push(nums.slice(idx, idx + 2));
//         return acc;
//     }, [])
//     return acc
// };
// console.log(partition(nums))


// var decompressedList = function (nums) {
//     var partArr = partition(nums);
//     console.log(partArr)
//     for (var i = 0; i < partArr.length; i++) {
//         let [freq, val] = partArr[i];
//         console.log("f", freq, "v", val);
//         temp = Array(freq).fill(val);
//         decompArr = decompArr.concat(temp);
//     }
//     return decompArr;
// }
// console.log(decompressedList(nums))

// nums = [0,1,2,3,4]
// index = [0,1,2,2,1]
// var createTargetArray = function(nums, index) {
//     arr = [];
//     for (var i=0; i < nums.length; i++){
//             arr.splice(index[i], 0, nums[i])
//         }
//         return arr
//     }


// console.log(createTargetArray(nums, index))

// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.
// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// var balancedStringSplit = function(s) {
//     var count = 0
//     var temp = 0;
//     for (var i = 0; i < s.length; i++){
//         if (s[i] === 'R') {
//             temp += 1;
//         } else if (s[i] ==='L'){
//             temp -= 1;
//         }
//         if (temp === 0) {
//             count++;
//         }
//     }
//     return count;
// };
//var s = "RLRRLLRLRL"
// var s = "RLLLLRRRLR"

// var balancedStringSplit = function (s) {
//     var string = s.split("");
//     console.log(string);
//     let count = string.reduce((acc2, val) => {
//         let [acc, bal] = acc2
//         if (val === 'R') {
//             acc += 1
//         } else if (val === 'L') {
//             acc -= 1
//         }
//         if (acc === 0) {
//             bal++
//         } 
//         return [acc, bal];
//     }, [0, 0])
//     return count[1]
// };
// console.log(balancedStringSplit(s));

//swapping pairs in a linked list, taken from leetcode. https://leetcode.com/explore/challenge/card/december-leetcoding-challenge/572/week-4-december-22nd-december-28th/3579/

// Definition for singly-linked list.
 // function ListNode(val, next) {
 //      this.val = (val===undefined ? 0 : val)
 //     this.next = (next===undefined ? null : next)
 // }

/**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var swapPairs = function(head) {
//     var curr = head;
//     while (curr && curr.next !== null) {
//         var prev = curr.val;
//         curr.val = curr.next.val;
//         curr.next.val = prev;
//         curr = curr.next.next;
//         }
//     return head;
// };
//
//below is not my solution but I liked it, so I am including it to review/reference it later since I don't have much experience with linked lists yet

// var swapPairs = function(head) {
//     if (!head || !head.next) return head;
   
//    let firstNode = head;
//    let secondNode = head.next;
   
//    firstNode.next = swapPairs(secondNode.next);
//    secondNode.next = head;
   
//    return secondNode;
//  };