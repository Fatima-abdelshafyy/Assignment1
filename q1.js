//============================PART 1 CODING QUESTION===================================================
//-------------Q1--------------
const readline = require("readline");

const q1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
q1.question("Enter a number: ", (answer) => {
    answer = Number(answer);//123
    console.log(answer + 7);//130
    q1.close();
});
