
// Name: VILA, KEVIN V.
// Section: IV-BSIT C
// Activity: N2 - Modular Calculator
// Date: November 2026

const operations = require("./operations");
const formatResult = require("./formatter");
const os = require("os");

// Get operation and numbers from command-line arguments
const operation = process.argv[2];
const numbers = process.argv.slice(3).map(Number);

// Display program information
console.log("===== MODULAR CALCULATOR =====");
console.log("Student: VILA, KEVIN V.");
console.log("Operating System:", os.platform());

// Validate the operation
const validOperations = ["add", "subtract", "multiply", "divide", "average"];

if (!validOperations.includes(operation)) {
    console.log("Error: Unknown operation!");
    console.log("Available operations: add, subtract, multiply, divide, average");
    process.exitCode = 1;
} else if (numbers.length === 0 || numbers.some(number => !Number.isFinite(number))) {
    console.log("Error: Please enter valid numbers.");
    process.exitCode = 1;
} else if (operation !== "average" && numbers.length !== 2) {
    console.log("Error: This operation requires exactly two numbers.");
    process.exitCode = 1;
} else {
    try {
        let result;

        switch (operation) {
            case "add":
                result = operations.add(numbers[0], numbers[1]);
                break;

            case "subtract":
                result = operations.subtract(numbers[0], numbers[1]);
                break;

            case "multiply":
                result = operations.multiply(numbers[0], numbers[1]);
                break;

            case "divide":
                result = operations.divide(numbers[0], numbers[1]);
                break;

            case "average":
                result = operations.average(numbers);
                break;
        }

        console.log(formatResult(operation, numbers, result));

    } catch (error) {
        console.log("Error:", error.message);
        process.exitCode = 1;
    }
}
