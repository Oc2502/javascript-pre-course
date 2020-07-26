//require('readline-sync');

const input = require('readline-sync');

main();
function main() {
    console.log("-------The Game Of War-------");

    let playerName = input.question("Please enter your name: ");
    console.log("Hello " + playerName + "," + " Welcome to the Game Of War.")
    console.log("You currently have 50 ILS.");

}
let initialCash = 50;
let getPlayerBet;

function playerBet(num) {
    let playerBet = input.questionInt("Place your bet for the next round: 1 to " + num + "\n ");
    return playerBet;
};


checkInput(getPlayerBet, 50, initialCash);
function checkInput(getPlayerBet, num, initialCash) {
    getPlayerBet = playerBet(initialCash);
    if(getPlayerBet < 1 || getPlayerBet > num) {
        console.log("I TOLD YOU TO CHOOSE A NUMBER BETWEEN 1 TO " +  num + "!! ")
        console.log("BYE.");
    } else {
        initialCash = theWinner(getPlayerBet, initialCash);
    }
}

function theWinner(getPlayerBet, initialCash){
    
    const playerCard  = Math.floor((Math.random() * 11) + 1);
    console.log("your card: " + playerCard);
    const computerCard = Math.floor((Math.random() * 11) + 1);
    console.log("my card: " + computerCard);
    if (playerCard > computerCard) {
        initialCash += getPlayerBet; 
        console.log("YOUN WON " + getPlayerBet + "! Now you have: " + initialCash);
    } else {
        initialCash -= getPlayerBet;
        console.log("YOUN LOST " + getPlayerBet + "! Now you have: " + initialCash);
    }
    let sumPlayerBet = initialCash;
    if(sumPlayerBet <= 0 ) {
        console.log("You dont have money! Bye Bye ");
    } else {
        let options = ["Play another round.", "leave with my money."];
        let likeToDo = input.keyInSelect(options, "What would you like to do ? ");
        switch (likeToDo) {
            case 0:
                checkInput(getPlayerBet, sumPlayerBet, initialCash);
                break;
            case 1:
                exitMoney = initialCash
                return console.log("Bye Bye. You Won " + exitMoney);
                break;
        }
    }
}