// if palindromic number

const input = require('readline-sync');
let isPalindromic = input.question("Please choose a number: ");
let reversedNumber = isPalindromic.toString().split('').reverse().join('');


if(isPalindromic === reversedNumber) {
    console.log("Is palindromic");
} else {
    console.log("Is not palindromic");
}

