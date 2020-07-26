// require('readline-sync')
function ifSumEqualTen(){
    const input = require('readline-sync');
    
    let num1 = input.questionInt("Enter a number: ");
    let num2 = input.questionInt("Enter another number: ");
    limitMessage: 'Input valid number, please.';

    let sum = Number(num1) +  Number(num2)
    if (sum === 10) {
        console.log("makes 10");
    } else { 
        console.log("nope");
    }      
}

ifSumEqualTen();
