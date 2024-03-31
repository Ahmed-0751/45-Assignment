"use strict";
// Write a function that accepts a array of items a person wants on a sandwich.
function sandwich(_items) {
    console.log("Items in your order is: ");
    for (let i = 0; i < _items.length; i++) {
        console.log(`- ${_items[i]}.`);
    }
}
;
sandwich(["chicken", "tomatoes", "mayo sauce"]);
sandwich(["vegetales", "tomato sauce"]);
sandwich(["beef", "garlic sauce"]);
