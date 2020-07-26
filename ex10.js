const input = require('readline-sync');

let getYourString = input.question("Put your message: ")

let change = getYourString.split(" ").join("*");
console.log(change);



