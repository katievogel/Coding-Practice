var arr = [1,2,3,4,5,6]

function makeAMap(someArray, someFunction) {
    var theNewArray = []
    for (var i=0; i<someArray.length; i++){
        var currentVal = arr[i];
        theNewArray.push(someFunction(currentVal));
    }
    return theNewArray
}
var addFive = (aVal) => aVal + 5;
console.log(makeAMap(arr, addFive))


// function reduceDustin(arr, f, seed) {
//     var acc = seed;
//     for (var i=0; i<arr.length; i++){
//         var curVal = arr[i];
//         //acc = acc + curVal;
//         acc = f(acc, curVal)

//     }
//     return acc;
// }

//let add = (a, b) => a+b;
//console.log(reduceDustin([1,2,3,4,5,6], add, 0));



function makeAReduce(someArray, someFunction, starterVal) {
    var accumulatedVal = starterVal;
    for (var i = 0; i < someArray.length; i++) {
        var currentVal = someArray[i];
        accumulatedVal = someFunction(accumulatedVal, currentVal);
    }
    return accumulatedVal
}

var multiply = (aVal, bVal) => aVal * bVal;
console.log(makeAReduce([1,2,3,4,5,6,7], multiply, 1));





function makeAMapWithReduce(someArray, someFunction) {
        return someArray.reduce((acc, el) => {
            return acc.concat(someFunction(el));
        }, []);
    }

var addTwo = (aVal) => aVal + 2;
console.log(makeAMapWithReduce(arr, addTwo));

//////////

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

// function makeAFilterWithReduce(array, someFunc) {
//     return array.reduce((acc, num) => {
//         if (someFunc(num)){
//             return acc.concat(num)
//         }  else { return acc}
//     }, []);
// }
// var someFunc = num => num%3 !== 0 && num%5 !==0;
// console.log(makeAFilterWithReduce(arr, someFunc))


///////

function makeAFilterTernOps(array, someFunc) {
    return array.reduce((acc, num) => {
        return someFunc(num) ? acc.concat(num) : acc;
    }, [])
}

var someFunc = num => num%3 !== 0 && num%5 !==0;
console.log(makeAFilterTernOps(arr, someFunc));