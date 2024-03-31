// Write a function called describe_city() that accepts the name of a city and its country.
function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is located in ").concat(country));
}
;
// The function should print a simple sentence, such as Karachi is in Pakistan. 
// Default city & country
describe_city();
// Different city & Default country
describe_city("Lahore");
// Different city & country
describe_city("Mumbai", "India");
