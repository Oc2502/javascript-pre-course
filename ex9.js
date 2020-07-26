// Prime numbers 
// require('readline-sync')
const input = require('readline-sync');
let n = input.questionInt("Chose a number: ")
let isPrimeNumber = false

if( n >= 2){ 
    for( let i = 2; i <= n; i++) { 
        for( let j = 2; j < i; j++) {
            if( i % j === 0) {
                isPrimeNumber = false;
                break;
            } else {
                isPrimeNumber = true;
            }
        }
        if(isPrimeNumber){
            console.log(i);
        }
    }

}
