"use strict";
// Task 23
// Tests for equality and inequality with strings
let emp_1 = "ahmed";
let emp_2 = "bilal";
let emp_3 = "aariz";
if (emp_1 == emp_2) {
    console.log("Matched");
}
else {
    console.log("Not Matched");
}
if (emp_1 == emp_1) {
    console.log("Matched");
}
else {
    console.log("Not Matched");
}
// Tests using the lower case function
if (emp_1 != emp_1) {
    console.log("true");
}
else {
    console.log("false");
}
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age_1 = 18;
let age_2 = 16;
if (age_1 == age_2) {
    console.log("Both are same in age");
}
else {
    console.log("Both are different in age");
}
if (age_1 > age_2) {
    console.log("Age 1 is greater");
}
else {
    console.log("Age 2 is greater");
}
if (age_1 >= 18) {
    console.log("You can vote");
}
else {
    console.log("You are not eligible for vote");
}
// Tests using "and" and "or" operators
if (age_1 && age_2 >= 18) {
    console.log("You can go to the trip");
}
else {
    console.log("You cannot go to the trip");
}
if (age_1 || age_2 >= 18) {
    console.log("You can go to the trip");
}
else {
    console.log("You cannot go to the trip");
}
// Test whether an item is in a array
let names = ["jack", "merry", "alice", "rick"];
if (names.includes("jack")) {
    console.log("jack is present in the array");
}
else {
    console.log("The item you searched is not present in the array");
}
if (names.includes("Alice")) {
    console.log("jack is present in the array");
}
else {
    console.log("The item you searched is not present in the array");
}
if (names.includes("jerry")) {
    console.log("jack is present in the array");
}
else {
    console.log("The item you searched is not present in the array");
}
