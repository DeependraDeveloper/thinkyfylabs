let driverData=[
    {
        "id":1,
        "name":"govind",
        "car":"swift",
        "car_num":"ka-03-2343",
        "isAvailable":true,
        "location":{
            "x":15,
            "y":20
        }
    },
    {
        "id":2,
        "name":"abhishek",
        "car":"honda",
        "car_num":"ka-02-9999",
        "isAvailable":false,
        "location":{
            "x":10,
            "y":20
        }

    },
    {
        "id":3,
        "name":"mohammad",
        "car":"lancer",
        "car_num":"ka-05-1291",
        "isAvailable":true,
        "location":{
            "x":11,
            "y":23
        }
    }
]

class Driver{
    constructor(name,car,car_num,isAvailable,location){
        this.name=name;
        this.car=car;
        this.car_num=car_num;
        this.isAvailable=isAvailable;
        this.location=location
    }
    
  add_Driver(name,car, car_num, isAvailable, location) {
    let createDriver = new Driver(name,car,car_num, isAvailable, location);
    driverData.push(createDriver);
    return createDriver;
  }

  UpdateDriverDetails(newName, newCar, newCar_num, newIsavailable, newLocation) {
    this.name = newName || this.name;
    this.car = newCar || this.car;
    this.car_num = newCar_num || this.car_num;
    this.isAvailable = newIsavailable || this.isAvailable;
    this.location = newLocation || this.location;
  }

  get_Driver_Details() {
    return driverData;
  }
}

module.exports ={driverData,Driver} ;

//////
