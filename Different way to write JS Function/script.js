//function declaration
function isPositive(num){
    return num >0
}
console.log(isPositive(-4));

//hosting
console.log(findProduct(4,5));

function findProduct(a,b) {
    return a*b    
}
console.log(findProduct);
console.log(typeof findProduct);

//default parameter

function greet(name="there"){
    console.log("hello",name);
}
greet("tamil")
greet()

//recurtion-function calling itself
//factorial- product of first n numbers

//5!=5*4*3*2*1

function factorial(n){
    if(n==1)
     return 1

     return n*factorial(n-1)
}
console.log(factorial(5));

//function experssion
//assigned to a variable as object

//console.log(isEven(5));
let isEven = function (num){
    return num%2 == 0
}
console.log(isEven);
console.log(isEven(5));

//find Sum
let arr =[2,3,5,6,10]

let findSum = function(find){
    let sum = 0
    for(let val of arr){
        sum += val 
    }
    
    return sum
}
console.log(findSum(find));

//arrow function
let volume = (l,b,h)=>{return l*b*h}

console.log(volume(3,4,5));

//same other type arrow function
let measure = (l,b,h)=> l*b*h

console.log(measure(2,3,4));


let sumOfArr = find =>{
    let sum = 0
    for(let val of arr){
        sum += val 
    }
    
    return sum
}
console.log(sumOfArr(find));

//area of circle
let area = r=>Math.floor(Math.PI*r*r)
console.log(area(5));

//console clear all
console.clear()

//variable argument - rest parameter
let prod = function(...args){

    let result=1
    for (let val of args)

       result*= val
       return result

}

console.log(prod(7,6,5,4));

let prod2 = function(){
    //arguments 4 array
    console.log(arguments);
    
    result=1
    for(i=0; i<arguments.length;i++)
    result *= arguments[i]
    return result
}

console.log(prod2(7,6,5,4));

//Generator - genrates value one by one

function* indexGenator(){
    let index=1

    while(true){
        yield index++
    }
}

const gen = indexGenator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

         
