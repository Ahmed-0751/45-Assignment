"use strict";
// Task_03
let personName = "Eric peter";
// print in uppercase
console.log(personName.toUpperCase());
// print in lowercase
console.log(personName.toLowerCase());
// print in title case
function toTitleCase(str) {
    return str
        .split(/\s+/) // Split the string by whitespace
        .map((word) => {
        // Capitalize the first letter and lowercase the rest
        return word.length > 2 // Don't capitalize small words (optional)
            ? word[0].toUpperCase() + word.slice(1).toLowerCase()
            : word.toLowerCase();
    })
        .join(" ");
}
const title = toTitleCase(personName);
console.log(title);
