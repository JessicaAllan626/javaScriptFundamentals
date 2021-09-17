let num = 8;

if(num % 2 == 0){
    console.log("The number is even.");
} else if(num % 1 == 0){
    console.log("The number is odd.");
} else{
    console.log('What is this?');
}


for (let i=0; i <= 10; i++){
    if(i % 2 == 0){
        console.log("The number is even.");
    } else if(i % 1 == 0){
        console.log("The number is odd.");
    }
    console.log(i);
}



let callback = (num) => {
    for(let i=0; i <= 10; i++) {
        if(i % 2 == 0){
        console.log("The number is even.");
} else if(i % 1 == 0){
    console.log("The number is odd.");
} else if (i !== isNAN) 
    console.log('What is this?');
        }
    }

callback(i);


let callback = (num) => {
    
    for(let i=0; i <= 10; i++) {
        if(isNaN(i)){
            console.log(`${i}` + 'What is this?');
        } else if(i % 2 == 0){
            console.log(`${i}` + 'The number is even.');
        } else if(i % 1 == 0){
            console.log(`${i}` + 'The number is odd.');
        }
    }
        return callback;
    }
    callback();
