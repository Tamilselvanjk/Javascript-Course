var availableFruits = ["apple", "orage", "mango", "kiwi", "banana"];
var cutomerChoice = "mango";
var availablePosition = availableFruits.indexOf(cutomerChoice);
console.log(cutomerChoice + ' is available at ' + availablePosition)

cutomerChoice = "papaya";
var availablePosition = availableFruits.indexOf(cutomerChoice);
if (availablePosition !== -1) {
    console.log(cutomerChoice + ' is available' + availablePosition)
} else {
    console.log(cutomerChoice + ' is not available')
}

var FruitWithDiscount = "banana";
availablePosition = availableFruits.indexOf(FruitWithDiscount, 3);
if (availablePosition !== -1) {
    console.log(FruitWithDiscount + 'is a availabel at discounted');
    console.log(FruitWithDiscount + ' is available at position ' + availablePosition);
}
else {
    console.log(FruitWithDiscount + ' is not avaliable at discouted');
}

console.log('Equal?: ', availableFruits.indexOf('apple'));


// lastindex method

var numArray = [1, 2, 3, 4, 5, 6, 4, 3, 4, 1, 6, 2, 7];
console.log("last 2 is at position: ", numArray.lastIndexOf(2));

var employee = [{
    id: 1,
    name: 'tamil'

},
{
    id: 2,
    name: 'lax'
},
{
    id: 3,
    name: 'siva'
}
];
var person = {
    id: 4,
    name: 'mahe'
};

console.log(employee.indexOf(person));
