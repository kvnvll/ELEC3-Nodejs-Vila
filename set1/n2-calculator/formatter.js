
function formatResult(operation, numbers, result) {
    const symbols = {
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/"
    };

    if (operation === "average") {
        return `Average of ${numbers.join(", ")} = ${result}`;
    }

    return `${numbers[0]} ${symbols[operation]} ${numbers[1]} = ${result}`;
}

module.exports = formatResult;
