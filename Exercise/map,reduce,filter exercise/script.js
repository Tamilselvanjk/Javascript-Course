//1 .Remove dupicate from the array
arr =[4,6,2,3,1,1,3,5,7,8,4,3]
let duplicate= arr.filter((total,index)=>
arr.indexOf(total) === index)
console.log("UniqueArr :" ,duplicate);

//2.Abbreviation by geatering the first letter of each word
let name = "Robart Andrew George";
let abbreviation =name.split(' ').map(word => word[0]).join('')
console.log();
console.log(abbreviation);


//3.Find the sum of positive number only
let input = [6,-5,7,-2,4,6,-1];
let sumofPositive = input.filter(num => num > 0).reduce((acc,num) => acc + num ,0);
console.log(sumofPositive);






