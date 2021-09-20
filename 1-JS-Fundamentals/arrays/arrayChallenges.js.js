const movies = [
    {name: 'Finding Nemo'},
    {name: 'Toy Story'},
    {name: 'Lilo and Stitch'},
    {name: 'Moana'},
    {name: 'Brave'},
    {name: 'Cars'},
];

movies.forEach((item)=> {
    console.log(item.name);
});

console.log("Before: ", movies);
movies.push({name: 'Mulan'});
console.log("After: ", movies);

movies.splice(2,1, 'The Little Mermaid');
console.log(movies);
