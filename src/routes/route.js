const express=require('express')
const router=express.Router()

const userController=require("../controller/userController")
const driverController=require("../controller/driverController")

router.get("/get_users_data",userController.getUserData)
router.get("/get_users_data/:id",userController.getUserById)
router.post("/add_user",userController.registerUser)
router.put("/update_user/:id",userController.updateUser)
router.delete("/delete_user/:id",userController.deleteUser)

router.post("/add_driver",driverController.add_driver)
router.put("/update_driver/:id",driverController.updateDriver)

router.get("/findride",userController.findRide)
router.get("/chooseride",userController.chooseRide)
module.exports=router