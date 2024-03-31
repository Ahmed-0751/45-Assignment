// Write a function called describe_city() that accepts the name of a city and its country.
function describe_city(city: string = "Karachi", country: string = "Pakistan") {
    console.log(`${city} is located in ${country}`);
};
// The function should print a simple sentence, such as Karachi is in Pakistan. 

// Default city & country
describe_city();

// Different city & Default country
describe_city("Lahore");

// Different city & country
describe_city("Mumbai", "India");
