//this includes the vehicle class as a module
const Vehicle = require("./vehicleBaseClass")



//this shows how to call from this module...
let v = new Vehicle.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
