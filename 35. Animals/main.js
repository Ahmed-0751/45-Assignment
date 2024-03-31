//  Store the names of three animals in a list
var animals = ["Dog", "Cat", "Parrot"];
//  Use a for loop to print out the name of each animal
animals.forEach(function (_animal) {
    console.log(_animal);
});
// Modify your program to print a statement about each animal, such as A dog would make a great pet.
animals.forEach(function (_animal) {
    console.log("A ".concat(_animal, " would make a great pet."));
});
// Add a line at the end of your program stating what these animals have in common
console.log("Parrots are more behaviorally similar to dogs than to cats. These would make a great pet!");
