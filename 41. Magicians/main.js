// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (_val) {
        console.log(_val);
    });
}
;
var magicians = ["Harry Houdini", "David Blaine", "Dai Vernon", "Trigg Watson", "Mary Joseph"];
show_magicians(magicians);
