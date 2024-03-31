var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// create array of five places you want to visit
var favPlaces = ["UAE", "Kashmir", "Australia", "Canada", "Palestine"];
// print the original array
console.log("Original Array : " + favPlaces);
// Print your array in alphabetical order without modifying the actual list.
console.log("In Alphabetical Order : " + __spreadArray([], favPlaces, true).sort());
// Show that your array is still in its original order by printing it.
console.log("Original Array after modify : " + favPlaces);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("In Reverse Alphabetical Order : " + __spreadArray([], favPlaces, true).sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Original Array after modify : " + favPlaces);
// Reverse the order of your list. Print the array to show that its order has changed.
favPlaces.reverse();
console.log("Original Array after modify : " + favPlaces);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
favPlaces.reverse();
console.log("Original Array after modify : " + favPlaces);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favPlaces.sort();
console.log("Original Array after modify : " + favPlaces);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favPlaces.sort().reverse();
console.log("Original Array after modify : " + favPlaces);
