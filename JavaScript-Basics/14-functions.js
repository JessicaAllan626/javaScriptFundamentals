function hello() {
    console.log("Hello World!");
}

function numberEntered(num){
    console.log(`The number you entered was: ${num}`);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);


function subtractAnyTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

subtractAnyTwoNumbers(5, 7);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats ;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91)); 

function add(x, y){
    let sum = x + y;
    return sum;
}
console.log(add(2,2));

function fullName(first, last){
    let wholeName = first + last;
    return wholeName;
}
console.log(fullName("Jessica", "Allan"));

function calculatePrice(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}
console.log(calculatePrice(10, 5)); 

function calc (x, y, z){
    if (z === "+"){
        console.log(x+y);
    } else if (z === "-") {
        console.log(x - y);
    } else if (z === "*") {
        console.log(x * y);
    } else if (z === "/") {
        console.log(x/y);
    } else{
        console.log("Unexpected input")
    }
}

console.log(calc(5,3,"*"));



