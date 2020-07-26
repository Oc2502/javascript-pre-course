//require('readline-sync');

const input = require('readline-sync');
integer = input.questionInt("Please enter an integer: ");


let makeArray = [];

function make() {
    for(let i = 0; i < integer; i++) {
        makeArray[i] = Math.floor(Math.random() * (49) ) + 1;
    }
    return makeArray;
}

const randomNumberArray = make();

console.log(randomNumberArray);
console.log("min is: " + Math.min(...randomNumberArray));
console.log("max is: " + Math.max(...randomNumberArray));




