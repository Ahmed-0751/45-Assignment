// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
let users: string[] = ["Admin", "Eric", "Jack", "Alice", "Mark"];

// // • If the list is empty, print the message We need to find some users!
users.forEach(element => {
    if(element == "Admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log(`Hello ${element}, thankyou for logging in again.`)
    }
});

// • Remove all of the usernames from your array, and make sure the correct message is printed.
users = [];
if(users.length === 0){
    console.log("We need to find some users!");
}else{
    users.forEach(element => {
        if(element == "Admin"){
            console.log("Hello admin, would you like to see a status report?");
        }else{
            console.log(`Hello ${element}, thankyou for logging in again.`)
        }
    });
}