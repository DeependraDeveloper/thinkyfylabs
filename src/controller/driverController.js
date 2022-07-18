const {driverData}=require("../models/driverModel")

//add_driver(driver_details,vehicle_details,current_location)-

const add_driver=(req,res)=>{
const newDriver = {
    id: driverData.length+1,
    name: req.body.name,
    car: req.body.car,
    car_num:req.body.car_num,
    isAvailable:req.body.isAvailable,
    location:req.body.location
  };

  if (!newDriver.name || !newDriver.car  || !newDriver.car_num || !newDriver.location || !newDriver.isAvailable)
    return res.status(400).json({ msg: "PLEASE PROVIDE THE DETAILS REQUIRED" });

  driverData.push(newDriver);

  return res.json(newDriver);
};


const updateDriver=(req,res)=>{
    let found = driverData.some((driver) => driver.id === +req.params.id);
    if (found) {
      driverData.forEach((driver) => {
        if (driver.id === +req.params.id) {
          driver.name = req.body.name ? req.body.name : driver.name;
          driver.car = req.body.car ? req.body.car : driver.car;
          driver.car_num = req.body.car_num ? req.body.car_num : driver.car_num;
          driver.number = req.body.number ? req.body.number : driver.number;
          driver.location=req.body.location?req.body.location:driver.location;
          driver.isAvailable=req.body.isAvailable?req.body.isAvailable:driver.isAvailable;

          res.json({ msg: "updated succesfully", data:driver });
        }
      });
    } else {
      res.status(400).json({ msg: `No driver with such id -${req.params.id}` });
    }
}
module.exports ={add_driver,updateDriver} ;