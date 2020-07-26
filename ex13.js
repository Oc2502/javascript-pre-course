// require('readline-sync');
const input = require('readline-sync');

let stringFromUser = input.question('put your msg:');
replaceString = stringFromUser.replace(/[^\w\s]|\d+/g, "");

let splitStringFromUser = replaceString.split(' ');


function longestWord() {
    let wordLength = 0;
    for(let i = 0; i < splitStringFromUser.length; i++) {
        if(splitStringFromUser[i].length > wordLength) {
            wordLength = splitStringFromUser[i].length;
            longestWord = splitStringFromUser[i];
        }
    }   
    return longestWord; 
}

//console.log(splitStringFromUser);
console.log(longestWord());