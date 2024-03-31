"use strict";
let users = ["Admin", "Eric", "Jack", "Alice", "Mark"];
users.forEach(element => {
    if (element == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${element}, thankyou for logging in again.`);
    }
});
