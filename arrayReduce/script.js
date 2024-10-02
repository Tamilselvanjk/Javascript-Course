//reduce methode
var numbers = [10, 20, 30, 40, 50];
var sum = numbers.reduce(function (accumulator, currentValue, index) {
    console.log('Iteration Number:', index);
    console.log('Accumulator:', accumulator);
    console.log('Current Value:', currentValue);
    return accumulator + currentValue;
})

console.log(sum);

var randomCharacter = ['t', 'a', 'm', 'i', 'l', 'l', 'a', 'x', 'm', 'i']
var uniqueCharacter = randomCharacter.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(uniqueCharacter);