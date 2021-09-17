//! forLoops
//* 1 = Initial expression (Where does the for loop start
//* 2 = The condition is what the for loop checks every time the loop runs (iterates)
//* 3 = The increment expression is what kind of change will occur to the initial expression

//        1           2     3
    for (let i = 0; i <10; i++) {
        console.log(i)
    }; 


for (let i = 0; i < 21; i+= 2) {
    console.log(i)
}; 

for (let i = 10; i >= 0; i--) {
    console.log(i)
};

for (let i = 0; i >= -25; i -=2) {
    console.log(i)
};

let name = 'Jessica';

for (let i = 0; i< name.length; i++){
    console.log(name[i])
};

let dogs = ['shiba inu', 'husky', 'corgi', 'lab'];

for(let pup = 0; pup < dogs.length; pup++){
    console.log(dogs[pup])
};

let sum = 0;

for(let i = 1; i <= 50; i++) {
    sum += i
    console.log(sum)
};
// put console.log(sum) outside of curly bracket if you just want final answer