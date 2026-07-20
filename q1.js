//============================PART 1 CODING QUESTION===================================================
//-------------Q1--------------
const readline = require("readline");

const q1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
q1.question("Enter a number: ", (answer) => {
    answer = Number(answer);
    console.log(answer + 7);
    q1.close();
});
