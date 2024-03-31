// Function that prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (_val) {
        console.log(_val);
    });
}
;
// Make a array of magician’s names.
var magicians = ["Harry Houdini", "David Blaine", "Dai Vernon", "Trigg Watson", "Mary Joseph"];
// Pass the array to a function called show_magicians().
// show_magicians(magicians);
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
function make_great(magicians) {
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push("The Great " + magicians[i]);
    }
    return great_magicians;
}
var great_magicians = make_great(magicians);
// Call make_great to modify the array
show_magicians(magicians);
// Call show_magicians to print the array
show_magicians(great_magicians);
