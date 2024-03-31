// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = ["Mark", "john", "Tom", "rick", "alice"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["Rick", "Jerry", "MARK", "sam", "Maria"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
// let new_users_lower:string[] = new_users.map(user => user.toLowerCase());
new_users.forEach(function (new_user) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("".concat(new_user, ", this username is not available."));
    }
    else {
        console.log("".concat(new_user, ", this username is available."));
    }
});
