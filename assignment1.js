// require('readline-sync')

const input = require('readline-sync');
console.log('Welcome to the Quiz "Are You a True Animal Lover ? "');

let welcome = input.keyInPause("To begin the Quiz");

// first Question
const firstQuestionOption = ['Yes! I hate animals!', 'No! I would never try to hurt animals!', 'No, but I would not go neer them.', 'it depends.'];
let firstQuetion = input.keyInSelect(firstQuestionOption, "Would you ever TRY to hurt an animal that is not showing any harm to you for no reason ?");
// second Question
const secondQuestionOption = ['No. I tell them that animal are support to be treated like family or friends.', 'Yes. I do not want to get inpolved in the situation.', 'It has never happened to me.', 'It depends on which animal.'];
let secondQuetion = input.keyInSelect(secondQuestionOption, "Have you ever let another person treat an animal bad?");
// third Question
const thirdQuestionOption = ['Scream WHO DOES THIS DOG BELONG TO then walk away', 'Pet the dog, then walk away.', 'Abuse it.', 'Follow the dog wherever it goes so it stays safe and try to find the owner.'];
let thirdQuetion = input.keyInSelect(thirdQuestionOption, "You see a dog by your house, your mom does not want you to bring it in, every time you try to look at its collar it jumps away, what would you do?");
// fourth Question
const fourthQuestionOption = ['High five your friend, then throw more junk into the pond.', 'Ignore everything.', 'Grab the plastic out of the pond before it gets far then recycle it at home.', 'Tell your friend, why did you do that! Then walk away.'];
let fourthQuetion = input.keyInSelect(fourthQuestionOption, "You and a friend are at your local pond. Your friend starts throwing wood chips at the ducks, then your friend throws some plastic in the water which would hurt the animals, its not far from shore yet, but you do not want to get muddy, what would you do?");
// fifth Question
const fifthQuestionOption = ['Cat', 'Dog', 'Dolphins', 'All of them.'];
let fifthQuetion = input.keyInSelect(fifthQuestionOption, "What animal do you love?");

switch (firstQuetion) {
    case 1:
        firstQuetion = 5;
    break;
    default:
        firstQuetion = 0;
}    
        
switch (secondQuetion) {
    case 0:
        secondQuetion = 5;
    break;
    default:
        secondQuetion = 0;
}    
        
switch (thirdQuetion) {
    case 3:
        thirdQuetion = 5;
    break;
    default:
        thirdQuetion = 0;
}
                 
switch (fourthQuetion) {
    case 2:
        fourthQuetion = 5;
    break;
    default:
        fourthQuetion = 0;
}
                                
switch (fifthQuetion) {
    case 3:
        fifthQuetion = 5;
    break;
    default:
        fifthQuetion = 0;
}
   
                            


let quizPoint = (firstQuetion + secondQuetion + thirdQuetion + fourthQuetion + fifthQuetion );

//if (quizPoint === 25) {
//   console.log("You are a True animal lover!");
//} else {
    //console.log("sorry, You are not a TRUE animal lover.");
//}

//console.log("Your point is :" + quizPoint);

const sixthQuestionOption = ['Aww look at that puppy it is so cute', 'OMG SO CUTE, I am going to take you home.', 'I neet to get away from this dog.', 'Jast walk away.' ];
let sixthQuetion = input.keyInSelect(sixthQuestionOption, "You see a stray puppy/dog on the streets what do you say/do?");

const sevenQuestionOption = ['Of course!', 'NO way!', 'OMG yes! Who would not want too?', 'No thanks, I have more important things to do.'];
let sevenQuetion = input.keyInSelect(sevenQuestionOption, "You get asked to look after someones cat while they are o holiday, what do you say?");

const eightQuestionOption = ['YES! I want one.', 'No. I dont want a pet in my house.', 'Ugh NO! they smell.', 'I cant have a pet in my house,'];
let eightQuetion = input.keyInSelect(eightQuestionOption, "You get asked if you want to get a pet of your choice, what do you say?");

const nineQuestionOption = ['Sure, but not today.', 'No. I dont like the Zoo', 'No.', 'Yes! lets go today.'];
let nineQuetion = input.keyInSelect(nineQuestionOption, "Do you want to go to the zoo");

const tenQuestionOption = ['Of coure I do! I love them all', 'Yes, but just the small animals.', 'They are ok, I guess', 'NO, I hate them.' ];
let tenQuetion = input.keyInSelect(tenQuestionOption, "Someone asks you Do you like animals? What would you say?");


switch (sixthQuetion) {
    case 1:
        sixthQuetion = 5;
    break;
    default:
        sixthQuetion = 0;
}    
        
switch (sevenQuetion) {
    case 2:
        sevenQuetion = 5;
    break;
    default:
        sevenQuetion = 0;
}    
        
switch (eightQuetion) {
    case 0:
        eightQuetion = 5;
    break;
    default:
        eightQuetion = 0;
}
                 
switch (nineQuetion) {
    case 3:
        nineQuetion = 5;
    break;
    default:
        nineQuetion = 0;
}
                                
switch (tenQuetion) {
    case 0:
        tenQuetion = 5;
    break;
    default:
        tenQuetion = 0;
}


let quizPointTwo = (sixthQuetion + sevenQuetion + eightQuetion + nineQuetion + tenQuetion );
let totalQuizPoint = quizPoint + quizPointTwo;

if (totalQuizPoint === 50) {
    console.log("You are a True animal lover!");
} else {
    console.log("sorry, You are not a TRUE animal lover.");
}

console.log("Your point is :" + totalQuizPoint);
