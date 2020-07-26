// require('readline-sync')

//function NFactorial 
const input = require('readline-sync');

let n = input.questionInt("Please enter a positive number: ");
let nFactorial = 1;

for (let i = 1; i <= n; i++){
    nFactorial *= i;
}
console.log(nFactorial);