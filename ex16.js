//require('readline-sync');
const input = require('readline-sync');

let aNumber = input.question("Please enter your numbers: ")
let changeNumberToString = String(aNumber);
let arrayNumbers = changeNumberToString.split(" ");
console.log(arrayNumbers); // delete

let max = arrayNumbers[0];
let min = arrayNumbers[0];
maxIndex = 0;
minIndex = 0;

for(let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > Number(max)) {
        maxIndex = i;
        max = arrayNumbers[i];
    }
}
for(let i = 0; i < arrayNumbers.length; i++) {   
    if (arrayNumbers[i] < Number(min)) {
        minIndex = i;
        min = arrayNumbers[i];
    }
}

let arrayIndex = [maxIndex, minIndex];
console.log(arrayIndex);
