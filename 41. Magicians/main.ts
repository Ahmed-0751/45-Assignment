// Function that prints the name of each magician in the array.
function show_magicians(magicians:string[]){
    magicians.forEach((_val) => {
        console.log(_val);
    });
};

// Make a array of magician’s names.
let magicians: string[] = ["Harry Houdini", "David Blaine", "Dai Vernon", "Trigg Watson", "Mary Joseph"];

// Pass the array to a function called show_magicians().
show_magicians(magicians);