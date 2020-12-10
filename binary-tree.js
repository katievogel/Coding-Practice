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


var tree = [4,
    [2,
        [1, null, null],
        [3, null, null]],
    [7,
        [6, null, null],
        [9, null, null]],
];

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
//     var newVal = f(val);
//     if (right !== null) {mapTree(right, f)};
//     return [newVal, left, right];
// }

// function mapTree(tree, f) {
//     var [val, left, right] = tree;
//     var newVal = f(val);
//     var newLeft = left !== null ? mapTree(left, f) : null;
//     var newRight = right !== null ? mapTree(right, f) : null;
//     return [newVal, newLeft, newRight];
// }

// var f = x => x + 2
// console.log(mapTree(tree, f));


// function mapTree2(tree, f) {
//     var [val, left, right] = tree;
//     var newVal = f(val);
//     var newLeft = left !== null ? mapTree2(left, f) : null;
//     var newRight = right !== null ? mapTree2(right, f) : null;
//     return [newVal, newRight, newLeft];
// }

// console.log(mapTree2(tree, f))

var tree2 = {
    'val': 4,
    'left': {
        'val': 2,
        'left': {
            'val': 1,
            'left': null,
            'right': null
        },
        'right': {
            'val': 3,
            'left': null,
            'right': null
        }
    },
    'right': {
        'val': 7,
        'left': {
            'val': 6,
            'left': null,
            'right': null
        },
        'right': {
            'val': 9,
            'left': null,
            'right': null
        }
    }
}

function invert(tree2){
    //accounts for when a null root is passed in based on problem i did in leetcode
    if (tree2 === null){
        return tree2
    }
    //let [val, left, right] = tree2;
    let {val, left, right} = tree2;
    left = left !== null ? invert(left) : null;
    right = right !== null ? invert(right) : null;
    return {val, left: right, right: left};
    //return [val, right, left];
}

console.log(invert(tree2))
