/*
-object bracket notation
    -object bracket notation can allow us to find a value in an object
    -using object bracket notation can be handy if we want to store a key in a variable and then use that to parse through an object
    -this works because all keys in an object are strings
*/

let garden = {
    vegetable: 'carrot',
    flower: 'lily',
    fruit: 'mangosteen',
    water: true,
    sun: true,
    size: 1000
};

let test = Object.keys(garden);

console.log(typeof test[0]); //string

console.log(garden.vegetable);

let carrot = garden['vegetable'];
console.log(carrot); //carrot

let baking = {};
baking['zucchini'] = 'This is good for bread';
console.log(baking);