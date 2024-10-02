console.log(Math.random());

//Formula
var randomNumber = Math.floor(Math.random() * numberOfChoice + firstValue)

var numberOfChoice = 12;
var firstValue = 1;
var randomNumber = Math.floor(Math.random() * numberOfChoice + firstValue);
console.log('Random number:', randomNumber);

var numberOfChoice = 400;
var firstValue = 100;
var randomNumber = Math.floor(Math.random() * numberOfChoice + firstValue);
console.log('Random number(100 to 500):', randomNumber);

//find the Random number

function getRandomNumberBetween(from, to) {
    return Math.floor(Math.random() * (to - from) + from)
}

console.log('Rodom numberBetween 3 to 8:', getRandomNumberBetween(3, 8));
console.log('Rodom numberBetween 15 to 25:', getRandomNumberBetween(15, 25));


var names = ['tamil', 'siva', 'bot', 'lax', 'mahu', 'mahe', 'jegan', 'pradeep', 'sethilkumar', 'srinath'];
console.log('Random Names:', names[getRandomNumberBetween(0, names.length - 1)]);
