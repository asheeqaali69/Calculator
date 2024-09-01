#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Selcet one of the operators to perform  operation",
        type: "list",
        name: "operator",
        choices: [chalk.yellow("Addition"), chalk.yellow("Subtraction"), chalk.yellow("Multiplication"), chalk.yellow("Division")],
    },
]);
if (answer.operator === chalk.yellow("Addition")) {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === chalk.yellow("Subtraction")) {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === chalk.yellow("Multiplication")) {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === chalk.yellow("Division")) {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log(chalk.red("Please select valid operator"));
}
console.log(chalk.green("THE END"));
