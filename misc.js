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

//Return an array of two integers that when added together equal 'n' and also do not contain a 0 anywhere in the number, ex. n=10, [1, 9] are good, n=100 [10, 90] are bad but [9, 91] are good.

//below is my answer
// var getNoZeroIntegers = function (n) {
//     for (var i = 1; i < n; i++) {
//         var noZeroInts = [];
//         var zeroCheck = RegExp('0');
//         var a = i;
//         var b = n - i;
//         if ((zeroCheck.test(a.toString()) === true) ||
//             (zeroCheck.test(b.toString()) === true)) {
//         } else if ((zeroCheck.test(a.toString()) === false) &&
//             (zeroCheck.test(b.toString()) === false) &&
//             (a + b === n)) {
//             noZeroInts.push(a, b);
//             return noZeroInts;
//         }
//     }
// };

// console.log(getNoZeroIntegers(210));

//this one is not my answer, but i liked the minimal amount of code so ive copied it for reference to study later. I want to compare it to my to my stuff more 'sleek' like this. 
// var getNoZeroIntegers = function(n) {
//     for (let i = 1; i < n; i++) {
//         if (i.toString().includes("0") || (n - i).toString().includes("0")) {
//             continue;
//         }
//         return [i, n - i];
//     }
// };


//Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.
// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

//my solution, though it is slow
// var maxProfit = function(prices) {
//     var maxP = 0;
//     for (var i = 0; i < prices.length; i++){
//         for (var j = i+1; j < prices.length; j++){
//             if ((prices[j] - prices[i]) > maxP){
//                 maxP = prices[j]-prices[i]
//             } 
//         }
//     }
//     return maxP;
// };

// console.log(maxProfit([7,1,5,3,6,4]))

//referencing a better answer user Math.max and Math.min. 
// var maxProfit = function(prices) {
//     let maxP = 0;
//     let buyPrice = prices[0];
//     for(let i = 1; i < prices.length; i++) {
//         let sellPrice = prices[i];
//         maxP = Math.max(maxP, sellPrice - buyPrice);
//         // this is the next day buy price
//         buyPrice = Math.min(buyPrice, sellPrice);
//     }

//     return maxP;
// };