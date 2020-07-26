// require('readline-sync')
const input = require('readline-sync');

let NumberBiggerThenTen = input.questionInt("Please choose a number larger than 10: ");

while (NumberBiggerThenTen <= 10) {
    let NumberBiggerThenTen = input.questionInt("Please choose a number LARGER than 10: ");

    if (NumberBiggerThenTen > 10 ) {
        break;
    }
}

console.log("Thank you");  
