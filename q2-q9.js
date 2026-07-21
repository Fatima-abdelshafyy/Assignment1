//-------------Q2--------------
let num = 0;
switch (num) {
    case 0:
        console.log("Invalid");//=====>
        break;
    case "":
        console.log("Invalid");
        break;
    case false:
        console.log("Invalid");
        break;
    case null:
        console.log("Invalid");
        break;
    case undefined:
        console.log("Invalid");
        break;
    case -0:
        console.log("Invalid");
        break;
    case 0n:
        console.log("Invalid");
        break;
    default:// handling NaN in  the default because in js NaN===NaN is false 
        if (Number.isNaN(num)) {
            console.log("Invalid");
        } else {
            console.log("valid");
        }

}


//-------------Q3--------------
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i)
    }
}//1 3 5 7 9*/



//-------------Q4--------------
let arr = [1, 2, 3, 4, 5, 6];
let evenArr = arr.filter((element) => {
    return element % 2 == 0;
});
console.log(evenArr);//[2,4,6]
//-------------Q5--------------
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [
    ...arr1,
    ...arr2
];
console.log(merged);//[ 1, 2, 3, 4, 5, 6 ]



//-------------Q6--------------
let day = 1;//1 then it will print sunday
switch (day) {
    case 1:
        console.log("Sunday");//=====>
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}


//-------------Q7--------------


