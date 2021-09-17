//! forInLoops
//* forInLoops are used with an object



let student = {
    name: "Finn",
    awesome: true,
    degree: 'Web Dev',
    week: 1
}

for (item in student) {
    console.log(item)
    console.log(student[item])
};



let character = {
    name: 'Link',
    hearts: 3,
    favColor: 'Green',
    isZelda: false,
};

for (thing in character){
    console.log(`${thing}: ${character[thing]}`)
};