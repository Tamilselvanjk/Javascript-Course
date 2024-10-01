//map - executes call back foreach array 
//      element and return new array

let priceUSD =[20,15,30]
let priceINR = priceUSD.map(x=> x*3)
console.log(priceINR);

//Same code but different way
priceINR =priceUSD.map(convert)

function convert(val){
    return val*3
}
console.log(priceINR);

//array of object
const input =[{name:'Tamil',age:19},{name:'siva',age:19},{name:'lax',age:17}]

const ages = input.map(x=> x.age)
console.log(ages);
const names = input.map(x=> x.name)
console.log(names);

//filter - return new array by checking each value of orginal arr using call back function

let cost = [35,164,86,394,122,43,54,99,100]
let lessThen100 = cost.filter(x=> x<100)
console.log(lessThen100);

//Reduce- exectes reducer call back and return accumalated result

let costs = [3,5,7,6,9,2]
let cartTotal = costs.reduce((total,element)=>
total+element,1000)
console.log(cartTotal);

const array =[10,20,30,40,50]
const totalValue = 30;

const result =array.reduce((total,element,index)=>{
    if (element === totalValue){ 
    
        total.index = index;
        total.value = element;
}
    return total;
},{index : -1,value: undefined});

console.log(result);

//two dimentional
arr2d =[['a','b','c'],['c','d','f'],['d','f','g']];

//result ={a:1 ,b:1 ,c:2,d:2...}
//flat - one dimentional
console.log(arr2d.flat());

let result1 ={'a':1,'b':2};
result1 ['c'] = 3
console.log(result1);
console.log(result1['a']);
console.log(result1['d']);

let count = arr2d.flat().reduce((accumulator,currval)=>
{
    if(accumulator[currval]){
        accumulator[currval] ++
    }
    else{
        accumulator[currval] = 1
    }
       return accumulator
},{});

console.log(count);