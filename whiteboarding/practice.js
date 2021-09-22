//? Create a function that accepts two parameters (favFood, favColor). The function should console.log "My favorite food is favFood and my favorite color is favColor."

function greet(favFood, favColor) {
    console.log(`My favorite food is ${favFood} and my favorite color is ${favColor}`)
  }
  
  greet("Ramen", "Purple")
  
  
  //? Create something that counts from 1 - 100
  //? Test each number to see if it is even or odd
  //? If it is even print "even"
  //? If it is odd print "odd"
  
  for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log('even')
    } else {
      console.log('odd')
    }
  }
  
  //? Create a function that returns true id something is a right triangle and false if it is not.
  //? HINT: side ** 2 + base ** 2 === hypotenuse ** 2 
  function isRightTriangle(side, base, hypotenuse) {
    if (side ** 2 + base ** 2 === hypotenuse ** 2) {
      return true
    } else {
      return false
    }
  }
  
  isRightTriangle(5, 6, 7)
  
  //? Create a Monsters Object 
  //? the monsters object should contain three keys in the object containing a monster name
  //? Each monster name key should contain an object including:
  //? traits: array containing at least 2 strings
  //? size: string
  //? description: string
  //? dangerous: boolean
  //? defeatMethods: an object containing tools to defeat as keys and descriptions of how to use as a string
  
  let monsters = {
    Ghost: {
       traits: ['spooky', 'transparent', 'ooooo'],
       size: 'Varying',
       description: 'Spooky guy that haunts you.',
       dangerous: false,
       defeatMethods: {
         exorcism: 'Use actual priest for best results.',
         holyWater: 'Super soaker is best.',
         salt: 'Season your ghost evenly.'
       }
   },
   Zombie: {
     traits: ['undead', 'slow', 'decaying'],
     size: 'Varies by corpse',
     description: 'A corpse that has come back to life hungry',
     dangerous: true,
     defeatMethods:{
       gun: "Double tap always",
       chainsaw: "Messy but effective"
     }
   },
   Vampire: {
     traits: ['undead', 'pale', 'fangs'],
     size: 'Human sized',
     description: 'A corpse that has come back to life thirsty',
     dangerous: true,
     defeatMethods:{
       stake: "Right through the heart",
       sunlight: "They do not like long walks on the beach",
       garlic: "Eat enough and humans will leave you alone too"
     }
   }
   }