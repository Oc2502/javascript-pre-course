//require('readline-sync');

const input = require('readline-sync');

let yourElements = input.question("enter 5 elemnts: ")

let yourArray = yourElements.split(" ", 5);
console.log(yourArray[0]);
console.log(yourArray[1]);
console.log(yourArray[2]);
console.log(yourArray[3]);
console.log(yourArray[4]);
