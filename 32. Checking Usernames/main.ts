// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users: string[] = ["Mark", "john", "Tom", "rick", "alice"];

// • Make another list of five usernames called new_users. 
let new_users:string[] = ["Rick", "Jerry", "MARK", "sam", "Maria"];

// • Loop through the new_users list to see if each new username has already been used.
// • Make sure your comparison is case insensitive.
let current_users_lower:string[] = current_users.map(user => user.toLowerCase());

new_users.forEach((new_user) => {
    if (current_users_lower.includes (new_user.toLowerCase())){
        console.log(`${new_user}, this username is not available.`);
    } else{
        console.log(`${new_user}, this username is available.`);
    }
});