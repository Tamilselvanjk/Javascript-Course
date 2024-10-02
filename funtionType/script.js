var regex = new RegExp('[0-8]');
console.log(regex.test('some 4 '));

//function type
var addNums = function (a, b) {
    return a + b
}
var addTwoNums = addNums;
addNums = null;
console.log(addTwoNums(3, 5));


//   function callSumFunction (funcName , param){
//     return funcName(param)
//   }

//   callSumFunction(alert,'Function as value')

//Function experssion

var doubleIt = function (num) {
    return num * 2
}

console.log(doubleIt(6));

console.log('Excess parameter:', doubleIt(4, 4, 4));
console.log('No parameter:', doubleIt());

// ArrayLike object

var sum = function () {
    console.log(arguments);
}
console.log(sum(1, 2, 3));


var sum = function () {
    return Array.from(arguments).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });
}

console.log(sum(5, 7, 8));
console.log(sum(10, 15, 25));

//Factorial

var factorial = function (num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1)
    }
}
console.log('factorial of 5:', factorial(5));

var findFactorial = factorial;
console.log('factorial of 5', findFactorial(5));
//factorial = null;
console.log('factorial of 5', findFactorial(5));


//calle method

var factorial = function (num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * arguments.callee(num - 1);
    }
}
console.log('factorial of 6:', factorial(6));

var findFactorial = factorial;
console.log('factorial of 6', findFactorial(6))
factorial = null;
console.log('factorial of 6:', findFactorial(6));

//Anonymous function

var nestedArray = [[1, 2], [3, 4], [5, 6], [7, 8]];
var flattenedArray = nestedArray.reduce(function (accumulator, currentValue) {
    return accumulator.concat(currentValue);
})

console.log(flattenedArray);

//IIFE Immediately invoked funtion expression

(function () {
    var name = 'Tamil';
    console.log(name);
})();

console.log(name);

//Named IIFE

(function sayName(name) {
    console.log(name);
})('Java script');