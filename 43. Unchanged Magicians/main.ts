// Function that prints the name of each magician in the array.
function show_magicians(magicians:string[]){
    magicians.forEach((_val) => {
        console.log(_val);
    });
};

// Make a array of magician’s names.
let magicians: string[] = ["Harry Houdini", "David Blaine", "Dai Vernon", "Trigg Watson", "Mary Joseph"];

// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
function make_great(magicians:string[]){
    let great_magicians:string[] = [];
    for(let i=0; i<magicians.length; i++){
        great_magicians.push("The Great " + magicians[i]);
    }
    return great_magicians;
}

let great_magicians:string[] = make_great(magicians);

// Call show_magicians to print the original array
show_magicians(magicians);

// Call show_magicians to print the modified array
show_magicians(great_magicians);