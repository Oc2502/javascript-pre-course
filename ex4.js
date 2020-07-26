// require('readline-sync')
function recommendsAGoodResturant() {
    const input = require('readline-sync');

    let numberOfPeople = input.questionInt("How many people are you going with ? ");
    let kosher = input.keyInYN("Should it be kosher? ");

    if (kosher === true) {
        let kosher2 = input.keyInYN("Should it be Kashrut Lemehadrin? ");
    }
   
    const kindOfFood = ['Asian', 'Mexican', 'Steakhouse', 'Italian'];
    let index = input.keyInSelect(kindOfFood, "What kind of food do you want? " );

    switch (index) {
        case 0:
            console.log('KANSAI is recommended.');
            break;
        case 1:
            console.log('Mexicana is recommended.');
            break;
        case 2:
            console.log('Meat Kitchen is recommnded.');
            break;
        case 3 :
            console.log('Uno is recommended.');
    }
}

recommendsAGoodResturant();