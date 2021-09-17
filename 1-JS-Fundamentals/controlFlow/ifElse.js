//! IfElse

let weather = 75;

if (weather < 65) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket needed.')
};

//! Bronze: 
//* Write an if else statement that checks your name;
//* If it is your name, console log '<name>'
//* If the name does not match, console.log 'Hello, what is your name?'

//! Silver: 
//* If it is your name, console log 'Hello, my name is <name>'

//! Gold:
//* If it is not your name, consoole log 'Hello, is your name <name here> ?'

let name = 'Jessica';

if('Jessica' === name){
    console.log(name)
} else {
    console.log('Hello, what is your name?')
};

if('Jessica' === name){
    console.log(`Hello, my name is ${name}`)
} else {
    console.log('Hello, what is your name?')
};

if('Jessica' === name){
    console.log(`Hello, my name is ${name}`)
} else {
    console.log(`Hello, is your  name ${name}?`)
};


let names = 'mAv';
console.log(names[0]);

if(names[0] === names[0].toUpperCase()){
    console.log(names[0]);
} else{
    console.log('Hey, that is not written correctly');
}



if (names[0] === names[0].toUpperCase()){
    console.log(names[0]);
} else{
    console.log(names.slice(1).toLowerCase());
};

let names = 'MAv'

if (names[0] === names[0].toUpperCase()){
    let = isUpperCase = names[0] + names.slice(1).toLowerCase()
    console.log(`1: ${isUpperCase}`);
} else{
    let notUpperCase = names[0].toUpperCase() + names.slice(1).toLowerCase()
    console.log(`2: ${notUpperCase}`);
};





//! ElseIf

let age = 108;

if(age >= 18){
    console.log('You can vote!');
}else if(age >= 21){
    console.log('You can drink!');
}else if(age >= 25){
    console.log('You can rent a car!')
}else{
    console.log('Sorry, you are too young to do anything');
}

let age = 108;

if(age >= 25){
    console.log('You can rent a car!')
} else if(age >= 21){
    console.log('You can drink!');
} else if(age >= 18){
    console.log('You can vote!');
} else{
    console.log('Sorry, you are too young to do anything');
}