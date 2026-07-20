console.log(window)//-------------Q2--------------
let value=0;

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
}//1 3 5 7 9*/
//-------------Q4--------------
let arr = [1, 2, 3, 4, 5, 6];
let evenArr=arr.filter((element) => {
     return element%2==0;
});
console.log(evenArr);
