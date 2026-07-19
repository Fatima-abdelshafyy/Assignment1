//============================PART 1 CODING QUESTION===================================================
//-------------Q1--------------
/**/const readline = require("readline");

const q1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
q1.question("Enter a number: ", (answer) => {
    answer = Number(answer);
    console.log(answer + 7);
    q1.close();
});
//-------------Q2--------------
let value = 0;

if (!value) {
    console.log("Invalid");
} else {
    console.log("Valid");
}//Invalid

//-------------Q3--------------
for(let i=1;i<=10;i++){
    if(i%2==0){
        continue;
    }else{
        console.log(i)
    }
}//1 3 5 7 9