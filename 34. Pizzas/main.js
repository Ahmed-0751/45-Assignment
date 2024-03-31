// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizza = ["Greek Pizza", "California Pizza", "Detroit Pizza"];
pizza.forEach(function (_val) {
    console.log(_val);
});
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
pizza.forEach(function (_val) {
    console.log("I really like ".concat(_val, "."));
});
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("Pizza is an Italian food that was created in Italy. It is made with different toppings.\nSome of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil.\nI really love pizza!");
