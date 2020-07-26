//

const input = require('readline-sync');

string1 = input.question("Please enter your string: ");
string2 = input.question("Pleasw enter another string: ");

function stringToArray1() {
    let array1 = string1.split(" ");
    return array1;
}

function stringToArray2() {
    let array2 = string2.split(" ");
    return array2;
}

array3 = stringToArray1().concat(stringToArray2());
console.log(array3);