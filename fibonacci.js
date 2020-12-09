// function fibonacci (nums, indent = 0) {
//     var result;
//     if (nums <=1) result = 1;
//     else result = fibonacci(nums-1, indent+1) + fibonacci(nums-2, indent+1);
//     console.log(" ".repeat(indent), result);
//     return result;
// } 

// fibonacci(10)

// function fib(n, memo) {
//     memo = memo || {};
//     if (memo[n]) {
//         return memo[n];
//     }

//     var x;
//     if (n <= 1) 
//         x = 1;
//     else 
//         x = fib(n - 1, memo) + fib(n - 2, memo);
//     memo[n] = x;
//     console.log(x);
//     return x;
// }

// fib(10)


function fib2(n) {
    if (n===1){
        return [0,1];
    }
    else {
        var x = fib2(n - 1);
        x.push(x[x.length - 1] + x[x.length - 2]);
        return x;
    }
};

console.log(fib2(10))