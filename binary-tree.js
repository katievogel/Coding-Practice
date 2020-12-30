// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1


// var tree = [4,
//     [2,
//         [1, null, null],
//         [3, null, null]],
//     [7,
//         [6, null, null],
//         [9, null, null]],
// ];

// function traverse(tree) {
//     var treeArr = []
//     for (var i = 0; i < tree.length; i++) {
//         if (tree[i] !== null) {
//             treeArr.push(tree[i])
//             for (var j=0; j< tree[i].length; j++){
//                 treeArr.push(tree[i[j]]);
//             }

//         }

//     }
//     return treeArr;
// }

//console.log(traverse(tree));

// 4
// [ 2, [ 1, null, null ], [ 3, null, null ] ]
// [ 7, [ 6, null, null ], [ 9, null, null ] ]

// 4 2 1 3 7 6 9


//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// function dtraverse (tree) {
//     let [v, Ltree, Rtree] = tree; // [1, null, null] - this is destructuring
//     if (Ltree !== null) dtraverse(Ltree); //'box 1'
//     console.log(v); //'box 2'
//     if (Rtree !== null) dtraverse(Rtree);//'box 3'
//     return undefined;

// }

//dtraverse(tree);

// function mapTree (tree, f) {
//     var [val, left, right] = tree;
//     if (left !== null) {mapTree(left, f)};
// //     var newVal = f(val);
// //     if (right !== null) {mapTree(right, f)};
// //     return [newVal, left, right];
// // }

// // function mapTree(tree, f) {
// //     var [val, left, right] = tree;
// //     var newVal = f(val);
// //     var newLeft = left !== null ? mapTree(left, f) : null;
// //     var newRight = right !== null ? mapTree(right, f) : null;
// //     return [newVal, newLeft, newRight];
// // }

// // var f = x => x + 2
// // console.log(mapTree(tree, f));


// // function mapTree2(tree, f) {
// //     var [val, left, right] = tree;
// //     var newVal = f(val);
// //     var newLeft = left !== null ? mapTree2(left, f) : null;
// //     var newRight = right !== null ? mapTree2(right, f) : null;
// //     return [newVal, newRight, newLeft];
// // }

// // console.log(mapTree2(tree, f))

// var tree2 = {
//     'val': 4,
//     'left': {
//         'val': 2,
//         'left': {
//             'val': 1,
//             'left': null,
//             'right': null
//         },
//         'right': {
//             'val': 3,
//             'left': null,
//             'right': null
//         }
//     },
//     'right': {
//         'val': 7,
//         'left': {
//             'val': 6,
//             'left': null,
//             'right': null
//         },
//         'right': {
//             'val': 9,
//             'left': null,
//             'right': null
//         }
//     }
// }

// function invert(tree2) {
//     //accounts for when a null root is passed in based on problem i did in leetcode
//     if (tree2 === null) {
//         return tree2
//     }
//     //let [val, left, right] = tree2;
//     let { val, left, right } = tree2;
//     left = left !== null ? invert(left) : null;
//     right = right !== null ? invert(right) : null;
//     return { val, left: right, right: left };
//     //return [val, right, left];
// }

// console.log(invert(tree2))



//Another binary tree problem, this one from leetcode. This time summing numbers from the tree within a low/high range. Should be noted that this would be more difficult to recreate in your IDE due to LeetCode abstracting away some tree info behind the scenes. I just c/p the whole problem for reference. The 'root' in question is not actually an array, even though it looks like that is supposed to be the input.
 
//Definition for a binary tree node.
//  function TreeNode(val, left, right) {
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//       this.right = (right===undefined ? null : right)
//   }

// /**
//  * @param {TreeNode} root
//  * @param {number} low
//  * @param {number} high
//  * @return {number}
//  */
// root = [10,5,15,3,7,null,18]
// low = 7
// high = 15
// //this solution below is slow as molasses, but it works. faster than only 5% of answers
// var rangeSumBST = function(root, low, high) {
//     var inRange = []
//     function traverseTree (root){
//         if (root.left !== null) traverseTree(root.left);
//         if (root.right !== null) traverseTree(root.right);
//         if (root.val >= low && root.val <= high){
//             inRange.push(root.val);
//         } 
//         var sumRange = inRange.reduce((acc, val) => acc + val, 0);
//         return sumRange;
//     }
//     return traverseTree(root);  
// };
//trying to speed it up. this was fast than 55% of other answers. got rid of the array push and changed it to simple addition and got rid of the reduce. also move the return of of the summed numbers out so it's not constantly computing and throwing it away (wasteful)
// var rangeSumBST = function(root, low, high) {
//     var inRange = 0
//     function traverseTree (root){
//         if (root.left !== null) traverseTree(root.left);
//         if (root.right !== null) traverseTree(root.right);
//         if (root.val >= low && root.val <= high){
//             inRange += root.val;
//         } 
//     }
//     traverseTree(root);
//     return inRange 
// };

//Another problem from leet code on binary trees, this time checking in a mirror down the middle. 
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {boolean}
 */

 //This was solved by inverting one side of the bottom of the tree and comparing the values between the two. YOu can ignore the top most number b/c it's only one number and nothing to compare to, and essentially treat the bottom as two different trees. The key take away on this for me was the null values, ultimatelly taken care of by checking for truthiness in the values. 
// var isSymmetric = function(root) {
//     var a = root && root.left;
//     var b = root && root.right;
//     b = b && invertTree(b);
//     return treeEquals(a, b); 
// }

// var invertTree = function (a) { 
//     var { val, left, right } = a
//     var left = left !== null ? invertTree(left) : null;
//     var right = right !== null ? invertTree(right) : null;
//     return new TreeNode(val, right, left);
// }

// var treeEquals = function (a, b) { 
//     if (a === null || b === null) {
//         return a === b;
//     }
    
//     return a.val === b.val && 
//         treeEquals(a.left, b.left) &&
//         treeEquals(a.right, b.right);
// };
