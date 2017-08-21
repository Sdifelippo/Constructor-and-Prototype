// make a Car constructor
// a car has make, model, and range (how many miles it can be driven)
// make a drive() method, which takes number of miles as a parameter (and reduces the range)
// make a refuel() method, which restores the car to its max range


// after I make a new car object, with range of 350
// car.drive(100)
// car.range // 250
// car.drive(50)
// car.range // 200
// car.refuel()
// car.range // 350
//
// car.make // 'Toyota'
// car.model // 'Corolla'
// car.color // 'grandmother white'

function Car (make, model, range) {
  this.make = make;
  this.model = model;
  this.range = range;
  this.totalRange = range;
  this.drive = function (miles) {
    return range - miles;
  }
}
  Car.prototype.drive = function (miles) {
    this.range -= miles;
  }
  Car.prototype.refuel = function (miles){
    //this.range = this.totalRange;
    this.range += miles;
  }
    if (this.range > this.totalRange){//.....but don't exceed the max (totalRange)
      this.range = this.totalRange
    };
    //this.range = Math.min(this.range + miles, this.totalRange)
