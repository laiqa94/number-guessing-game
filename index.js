import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
let answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Pleace guess a number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guessed right number.");
}
else {
    console.log("You guessed worng number");
}
