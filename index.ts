// /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number --- Done

// 2) user input for guessing game --- Done

// 3) compare user input with computer generated number and show result --- Done


const randomNumber =Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess a number between 1 to 6: " ,
    },
]);

if(answers.userGussedNumber === randomNumber ){
    console.log("congratulations! you guessed right number. ");
} else {
    console.log("You guessed wrong number ");
}
