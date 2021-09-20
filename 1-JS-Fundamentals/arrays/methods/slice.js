//! The slice method will return a copy of the specified portion of an array
//? The portion is specified by the index given in the paramters
//? This does not affect the length of the array

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

console.log(foods.slice(2, 5));

//? If the second parameter is not specified, the method will return the rest of the array after the specified index 

console.log(foods.slice(2));