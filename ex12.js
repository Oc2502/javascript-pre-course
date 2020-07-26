//require('readline-sync')

const input = require('readline-sync');

let capitalizeVowels = input.question("please enter a string:");

let changeCapitalVowels = capitalizeVowels.split('');

for(i = 0; i <= changeCapitalVowels.length; i++) {
    if(changeCapitalVowels[i] === 'a') {
        changeCapitalVowels[i] = 'A';
    }
    if(changeCapitalVowels[i] === 'e') {
        changeCapitalVowels[i] = 'E';
    }
    if(changeCapitalVowels[i] === 'i') {
        changeCapitalVowels[i] = 'I';
    }
    if(changeCapitalVowels[i] === 'o') {
        changeCapitalVowels[i] = 'O';
    }
    if(changeCapitalVowels[i] === 'u') {
        changeCapitalVowels[i] = 'U';
    }
    if(changeCapitalVowels[i] === 'y') {
        changeCapitalVowels[i] = 'Y';
    }
}

let changeCapital = changeCapitalVowels.join('');
console.log(changeCapital);