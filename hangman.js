//require('readline-sync');
//require('figlet');
//require('random-words');

const input = require('readline-sync');
const figlet = require('figlet');
const randomWords = require('random-words');

logo();

let selectedWord = getRandonWord(); // random word
let counter = 10; // number of guesses
let asteriskWord = selectedWord.replace(/[a-zA-Z]/g,"*");

main();
function main() {
    console.log("You have 10 guesses \nThe word is: \n" + asteriskWord);

    while( counter > 0 && asteriskWord.includes("*")) {
        userGusse = userGussed();
        turnResult(selectedWord, userGusse);
    }

    if(counter == 0) {
        console.log("YOU LOSE! Too bad, the word was: " + selectedWord + ".");
        return;
    }
}


function logo() {
    console.log(figlet.textSync('HANG MAN',{
        font: 'ANSI Shadow',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
}

function getRandonWord() {
    let selectedWord;
    selectedWord = randomWords(1);
    selectedWord = selectedWord.join('')
    return selectedWord;
};


function userGussed() {
    let userGusse;
    userGusse = input.keyIn("What is your guess: \n", {limit: '$<a-z>'});
    userGusse = userGusse.toLowerCase();
    return userGusse;
}

function turnResult(selectedWord, userGusse) {
    let newAsteriskWord = "";
    for(let i = 0; i < selectedWord.length; i++) {
        if (selectedWord.charAt(i) == userGusse) {
            newAsteriskWord += userGusse;
        } else if (asteriskWord.charAt(i) != "*") {
            newAsteriskWord += selectedWord.charAt(i);
        } else {
            newAsteriskWord += "*";
        }
    }

    console.log("The word is: \n" + newAsteriskWord );
    if(asteriskWord === newAsteriskWord) {
        counter--;
    } else {
        asteriskWord = newAsteriskWord;
    }
    console.log("You have " + counter + " guesses left"); 
    if(asteriskWord === selectedWord) {
        console.log("YOU WON");
        return;
    }
}





