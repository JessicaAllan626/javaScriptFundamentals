let ingredients = "Salmon"

switch (ingredients) {
    case "Ground Beef":
        console.log("I'll make hamburgers.")
        break;
    case "Salmon":
        console.log("I'll make grilled salmon.")
        break;
    case "Chicken":
        console.log("I'll make chicken tacos.")
        break;
    default:
        console.log("I guess I should order something")
}

let answer = "B";

if (answer === "A" || answer === "B") {
    console.log("Gryffindor")
} else if (answer === "C" || answer === "D") {
    console.log("Hufflepuff")
} else if (answer === "E" || answer === "F") {
    console.log("Ravenclaw")
} else if (answer === "G" || answer === "H") {
    console.log("Slytherin")
} else {
    console.log("Must be a Muggle.")
}