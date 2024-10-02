// forEach method
var availabelFruits = ["apple", "mango", "orange", "banana"];
for (let index = 0; index < availabelFruits.length; index++) {
}

availabelFruits.forEach(function (item, index, array) {
    console.log('in this fruits array' + array);
    console.log('fruit' + item + 'at position ' + index);
})

//map method
var priceList = [100, 15, 25, 1000, 550, 675, 10];
var discounted = 10;
var newList = priceList.map(function (price) {
    return price - (price * 10 / 100);
});
console.log(newList);

//filter method

var employee = [
    {
        name: 'tamil',
        salary: 2500
    },
    {
        name: 'siva',
        salary: 5000
    },
    {
        name: 'lax',
        salary: 10000
    }
];

var highPayingJob = employee.filter(function (employee) {
    return employee.salary >= 5000
}
)
console.log(highPayingJob)

// every method

function getResult(markList) {
    var result = markList.every(function (mark) {
        return mark > 45
    });

    if (result) {
        return 'all pass'
    } else {
        return 'you failed some subjects'
    }
};

console.log(getResult([80, 90, 96, 70, 54]));
console.log(getResult([35, 20, 45, 28, 29]));

//some method

function getResults(results) {
    var result = results.some(ispass);

    if (result) {
        return 'only some student are passed'
    } else {
        return 'all student are passed'
    }
};

function ispass(result) {
    return result !== 'pass';
}

console.log(getResults(['pass', 'fail', 'pass', 'fail']));
console.log(getResults(['pass', 'pass', 'pass', 'pass']));


