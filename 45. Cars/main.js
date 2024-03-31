"use strict";
function createCar(manufacturer, model, rest) {
    return Object.assign({ manufacturer,
        model }, rest);
}
const myCar = createCar("Toyota", "Grande", { color: "blue", year: "2000" });
console.log(myCar);
