// Task 14
// Before Change
let guestList:string[] = ["John", "Rick", "Mark"];
guestList.forEach(element => {
    console.log(`Dear ${element}, You are invited to the dinner.`)
});

// Task 16
console.log("\nHey, I'm really sorry for that but the new table is not arrived yet. So, I can only invite two people for the dinner.\n");
// Shrinking list until only two person remains in the list
while(guestList.length>2){
    guestList.shift();
}
guestList.forEach(element => {
    console.log(`Dear ${element}, You are still invited.`)
});

// Task 19
console.log(`We are finally inviting ${guestList.length} people for the dinner`);