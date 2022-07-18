const {userData,User}=require("../models/userModel");
const {driverData}=require("../models/driverModel")
/////////////////////////////////////////////////////////////////////////////////////////////
const getUserById=(req,res)=>{
    let found = userData.some((user) => user.id === +req.params.id);
    if (found) {
      res.json(userData.filter((user) => user.id === +req.params.id));
    } else {
      res.status(400).json({ msg: `No user with such id -${req.params.id}` });
    }
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////

const getUserData=(req,res)=>{
    return res.send(userData)
}
//////////////////////////////////////////////////////////////////////////////////////////////////
const registerUser =  (req, res) => {  
    const newUser = new User(req.body.name,req.body.gender,req.body.number,req.body.age,req.body.location);
    userData.push(newUser)

    return res.json(newUser);
};

//////////////////////////////////////////////////////////////////////////////////////////////////

const updateUser=(req,res)=>{
    let found = userData.some((user) => user.id === +req.params.id);
    if (found) {
      userData.forEach((user) => {
        if (user.id === +req.params.id) {
          user.name = req.body.name ? req.body.name : user.name;
          user.age = req.body.age ? req.body.age : user.age;
          user.gender = req.body.gender ? req.body.gender : user.gender;
          user.number = req.body.number ? req.body.number : user.number;
          user.location=req.body.location?req.body.location:user.location;
  
          res.json({ msg: "updated succesfully", data:user });
        }
      });
    } else {
      res.status(400).json({ msg: `No user with such id -${req.params.id}` });
    }
}

//delete
 const deleteUser= (req, res) => {
    let found = userData.some((user) => user.id === +req.params.id);
    if (found) {
        res.json({msg:"dleted successfully",data:userData.filter((user) => user.id !== +req.params.id)});
    } else {
      res.status(400).json({ msg: `No user with such id -${req.params.id}` });
    }
  };


//////////////////////////////////////////////////////////////////////////////////////////////////

const findRide=(req,res)=>{
  let riderName=req.body.riderName
  let riderSource=req.body.riderSource
  let riderDestination=req.body.riderDestination

  let isCabAvailable=driverData.some((driver)=>driver.isAvailable===true)
  if(!isCabAvailable){
    return res.status(400).json({msg:"no cab availabe"})
  }

  let cabs=driverData.filter((driver)=>driver.isAvailable===true)
  return res.status(200).json(cabs)
}


const chooseRide=(req,res)=>{
  let riderName=req.body.riderName
  let riderSource=req.body.riderSource
  let riderDestination=req.body.riderDestination

  let nearByCabs=[]
  let distance=Math.sqrt(Math.pow(riderSource.x - riderDestination.x, 2) + Math.pow(riderSource.y - riderDestination.y, 2) );

  for(let i=0;i<driverData.length;i++){
     if(driverData[i].isAvailable==true){
      let location=Math.sqrt(Math.pow(riderSource.x-riderDestination.x,2)+Math.pow(driverData[i].location.x-driverData[i].location.y,2));
      if(distance<=location){
        nearByCabs.push([location,driverData[i].name])
      }
     }
  }
  return res.status(200).json({msg:"available cabs are",data:nearByCabs})
}


module.exports = { registerUser,getUserData,updateUser,getUserById,deleteUser,findRide,chooseRide};

