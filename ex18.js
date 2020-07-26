//

const input = require('readline-sync');

let enterIntegers = input.question("Please enter your numbers: ")


function splitNumber() {
    let splitNumber = enterIntegers.split(' ');
    return splitNumber;
}

function reverseNumbers() {
    let reverseNumbers = splitNumber().reverse();
    return reverseNumbers;
}

console.log(reverseNumbers());