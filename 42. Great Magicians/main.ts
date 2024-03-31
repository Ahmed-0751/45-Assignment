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

// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
function make_great(magicians:string[]){
    for(let i=0; i<magicians.length; i++){
        magicians[i] = "The Great " + magicians[i];
    }
}

// Call make_great to modify the array
make_great(magicians);

// Call show_magicians to print the array
show_magicians(magicians);