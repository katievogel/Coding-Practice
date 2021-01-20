//"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

// var fizzBuzz = function () {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
//             console.log('Fizz');
//         } else if (arr[i] % 3 !== 0 && arr[i] % 5 === 0) {
//             console.log('Buzz');
//         } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//             console.log('Fizz Buzz');
//         } else {
//             console.log(arr[i])
//         }
//     }
// }

// //fizzBuzz();

// var fizzBuzz2 = function () {
//     arr = [];
//     for (var i = 1; i < 100; i++) {
//         var fizz = i % 3 === 0;
//         var buzz = i % 5 === 0;
//         if (fizz && buzz) {
//             arr.push('fizz buzz')
//         } else if (buzz) {
//             arr.push('buzz')
//         } else if (fizz) {
//             arr.push('fizz')
//         } else {
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }

// fizzBuzz2();




// var fizzBuzz3 = () => {
//     var fizzBuzzArr = []
//     for (var i=1; i < 100; i++){
//         var fizz = i%3===0;
//         var buzz = i%5===0;
//         if (fizz && buzz) {
//             fizzBuzzArr.push('Fizz Buzz');
//         } else if (fizz) {
//             fizzBuzzArr.push('fizz');
//         } else if (buzz) {
//             fizzBuzzArr.push('buzz');
//         } else {
//             fizzBuzzArr.push(i);
//         }
//     }
// console.log(fizzBuzzArr);
// }

// fizzBuzz3();



// var fizzBuzz4 = () => {
//     var fizzBuzzArr2 = []
//     for (var i=1; i < 100; i++){
//         var fizz = i%3===0;
//         var buzz = i%5===0;
//         if (fizz) {
//             fizzBuzzArr.push('fizz');
//         } else if (fizz) {
//             fizzBuzzArr.push('fizz');
//         } else if (buzz) {
//             fizzBuzzArr.push('buzz');
//         } else {
//             fizzBuzzArr.push(i);
//         }
//     }
// console.log(fizzBuzzArr2);
// }

// fizzBuzz4();


// function fizzBuzz5() {
//     var arr = []
//     for (var i = 1; i <100; i++){
//         var fizz = i%3===0;
//         var buzz = i%5===0;
//         if (fizz && !buzz) {arr.push("fizz");}
//         else if (buzz && !fizz) {arr.push("buzz");}
//         else if (fizz && buzz) {arr.push("fizz buzz");}
//         else {arr.push(i)}
//     }
//     return arr
// }
// console.log(fizzBuzz5())
//

//
//with ternary operators...
// var isOdd = false
// var xxx = isOdd ? isOdd ? "odd" : "even" : "even";

// function fizzBuzz6() {
// for (var i = 1; i <= 100; i++) {
//     var f = i % 3 === 0; 
//     var b = i % 5 === 0;
//     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
//   }
// }
// fizzBuzz6();



// function inc (x) { 
//     console.log(10)
//     return x + 1 
// }

// function inc (x) => x + 1 


// let add3 = x => inc(inc(inc(x)));

// inc(inc(0))

// function fizzBuzz7(arr) {
//     var newArr = arr.map(x => {
//         var f = x%3===0;
//         var b = x%5===0;
//         return (f ? b ? 'fizz-buzz': 'fizz': b ? 'buzz': x )
//         // if (x%3===0 && x%5!==0) {
//         //     return 'fizz';
//         // } else if (x%3!==0 && x%5===0) {
//         //     return 'buzz';
//         // } else if (x%3===0 && x%5===0) {
//         //     return 'fizz-buzz';
//         // } else {
//         //     return x
//         // }
//         })
//     console.log(newArr);
// }

// fizzBuzz7(arr);




// var compare = (x) => {
//     var f = x%3===0;
//     var b = x%5===0;
//     return (f ? b ? 'fizz-buzz': 'fizz': b ? 'buzz': x);
// }

// function fizzBuzz8 (arr){
//     return arr.reduce((acc, x) => {
//         return acc.concat(compare(x));
//     }, []);
// }
// console.log(fizzBuzz8(arr))



// /////////
// function fizzBuzz9 (arr) {
//     return arr.map(x => {
//         return compare(x)
//     })
// }
// console.log(fizzBuzz9(arr));


// /////////
// var katieMap = (arr, someFunc) => {
//     return arr.reduce((acc, item) => {
//         return acc.concat(someFunc(item));
//     }, [])
// }

// function fizzBuzz10 (arr) {
//     return katieMap(arr, compare)
// }
// console.log(fizzBuzz10(arr));


// console.log('dustin')
// console.log (  [1,2,3,4,5].map(compare)   )

////////
//not fizz and not buzz using filter

// let f = num => num%3 !== 0 && num%5 !==0;

// function notFizzOrBuzz (arr) {
//     var filteredArr = arr.filter(f);
//     return filteredArr;
// }

// console.log(notFizzOrBuzz(arr));

//fizzbuzz if you are only given an integer and have to create the array yourself. 
//var fizzBuzz10 = function(n) {
//     var arr = [];
//     for (var j=1; j<=n; j++){
//         var f = j%3===0;
//         var b = j%5===0;
//         arr.push((f ? b ? "FizzBuzz": "Fizz" : b ? "Buzz": ""+j));
//         }
//     return arr
// };

