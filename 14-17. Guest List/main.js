// Task 14
// Before Change
var guestList = ["John", "Rick", "Mark"];
guestList.forEach(function (element) {
    console.log("Dear ".concat(element, ", You are invited to the dinner."));
});
// Task 15
// After change
console.log("The guest which can't make it to the dinner : ".concat(guestList[1]));
guestList.splice(1, 1, "Alice");
guestList.forEach(function (element) {
    console.log("Dear ".concat(element, ", You are invited to the dinner."));
});
// Task 16
console.log("\nHey, I found a bigger place than previous one. So, I decided to add some more guest to our party.\n");
// Add at the start
guestList.unshift("Sam");
// Add at the end
guestList.push("Marie");
// Add at the middle
guestList.splice(3, 0, "Katt");
guestList.forEach(function (element) {
    console.log("Dear ".concat(element, ", You are invited to the dinner."));
});
// Task 17
console.log("\nHey, I'm really sorry for that but the new table is not arrived yet. So, I can only invite two people for the dinner.\n");
// Shrinking list until only two person remains in the list
while (guestList.length > 2) {
    guestList.shift();
}
guestList.forEach(function (element) {
    console.log("Dear ".concat(element, ", You are still invited."));
});
/*// Make the array empty
guestList.pop();
guestList.pop();
console.log(guestList[1]);*/
