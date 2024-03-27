import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 38183;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAns.pin === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select operator",
            type: "list",
            choices: ["check balance", "withdraw", "fast cash"],
        },
    ]);
    if (operationAns.operation === "check balance") {
        console.log(`your currenct balanced is: ${myBalance}`);
    }
    else if (operationAns.operation === "withdraw") {
        let withDrawAmount = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your Amount",
                type: "number",
            },
        ]);
        if (withDrawAmount.amount <= myBalance) {
            (myBalance -= withDrawAmount.amount),
                console.log(`your remaining balanced is : ${myBalance}`);
        }
        else {
            console.log(`Unable to process Transaction!\nYour current balance is ${myBalance}`);
        }
    }
    if (operationAns.operation === "fast cash") {
        let cashChoice = await inquirer.prompt([
            {
                name: "cash",
                type: "rawlist",
                message: "Choose your account",
                choices: ["10000", "20000", "30000", "40000", "50000", "60000"]
            },
        ]);
        let amount = parseInt(cashChoice.cash);
        if (amount <= myBalance) {
            myBalance -= amount;
            console.log(`Successfully withdraw ${amount}. your remaining balanced is ${myBalance}`);
        }
        else {
            console.log(`Unable to process Transaction! Insuffient funds`);
        }
    }
}
else {
    console.log("Invalid pin code Please try again.");
}
