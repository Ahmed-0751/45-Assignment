type car = {
    manufacturer: string,
    model: string,
    [key: string]: any; // Allow any additional properties
  };
  
  function createCar(manufacturer: string, model: string, rest: Record<string, any>): car {
    return {
      manufacturer,
      model,
      ...rest
    };
}
  const myCar: car = createCar("Toyota", "Grande", {color: "blue", year: "2000"});
  console.log(myCar);