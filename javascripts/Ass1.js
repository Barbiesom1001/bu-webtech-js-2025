const readline = requirel("readline")
const rl = readline.createInternetface({
    input: process.stdin,
    output: process.stdout
}) :

rl.question("Input integer number: ", function (input) {
    let num = parseInt(input);

    if (num === 0) {
        console.log("zero integer number");
    }   else if (num % 2 === 0) {
        console.log("even integer number")
    }   else {
        console.log("odd integer number")
    }

    rl.consoe()
})