//! Boolean
//* A boolean only has 2 possible values ( True or False )

let on= true;
let off= false;
console.log(on);
console.log(off);

//! Null
//* Null is an empty value that can be used as a container (has both declaration and initialization)

let empty = null;
console.log(empty);

//! Undefined
//* No value is assigned and it is not a container (has a declaration but no initialization)

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

//! Numbers
//* Literally just numbers (can go up to 15 numbers before VS rounds the number)

let degrees = 90;
console.log(90);

let precise = 999999999999999;
console.log(precise);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//! Strings
//* These are used to represent text and are wrapped in either 'single' or "double" quotes (or `back ticks`)

let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `back ticks`;
console.log(stringOne, stringTwo, stringThree);

//! Numbers vs Strings

let first = 1050 + 100;
let second = `1050` + `100`; 
console.log(first);
console.log(second);

//! Typeof
//* this will allow you to find the type of variable that anything is 

console.log(typeof first);
console.log(typeof second);

//! Object
//* used to store many values instead of a singular value

let frodo = {
    race: `hobbit`,
    rings: 1,
    cloak: true
};

console.log(frodo);
console.log(typeof frodo); 

let userOne = {
    firstName: `Jessica`,
    lastName: `Allan`,
    age: 24,
    hasDog: true
};
console.log(userOne);

//! Array
//* arrays are containers that hold lists of items

let lists = ['item1', 'item2', 'item3'];
console.log(lists);

let anotherList = ['string', 10, true, null, undefined, {object: true, number: 20}];
console.log(anotherList);
console.log(typeof anotherList); //* this is an object

//!Object 
//* An object is a container that holds multiple dataTypes, so since arrays are also containers,
//* JS has classified them as objects and not dataypes of their own
 
//* the console.log for anotherList ^ above ^ is an example of an object

//! DataType Literals
//* a literal represents a fixed value that we as developers insert into the code

//? String Literal
let car= 'Ford';

//? Numeric Literal
let december = 12; 

//? Boolean Literal
let tired = true; 

//? Object Literal
let soups = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'cereal',
    d: 'chili'
};

//! Dot Notation

console.log(soups.c);

//! Array Literal

let days= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days);

//*to find the length of an array (or how many items are in the array) use: 
console.log(days.length);


//! toString Method
//* this is a method that comes built into JS to help us separate an array into strings

console.log(days.toString());


let x='hello world';
console.log(typeof x);