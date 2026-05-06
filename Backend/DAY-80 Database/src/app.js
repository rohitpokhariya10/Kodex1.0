//1. Create Server
//2. Configuration
let express = require("express");
const User = require("./models/user.model");
let app = express();

app.use(express.json());


//500 (Inter Server Error) tab ata hai jab backend/server side me koi galti kari ho
//Create
app.post("/createUser", async (req, res) => {
  try {
    let { name, email, contact } = req.body;
    //validation
    if (!name || !email || !contact) {
      return res.status(400).json({
        message: "All fields are required..",
      });
    }

    //create is a query
    let newUser = await User.create({
      name,
      email,
      contact,
    });
    return res.status(201).json({
      message: "User created successfully",
      users: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});


//Read
app.get("/users" , async (req,res)=>{
    try{
        let users = await User.find()//find return array

    return res.status(200).json({
        message:"Users fetched successfully",
        allUsers:users
    })
    }
    catch(error){
        console.error("Error in get route-->" , error)
        return res.status(500).json({
            message:"Internal server error"
        })
    }
})

//Update
// req.params → getting id from URL
// req.body → getting updated data
// findByIdAndUpdate() → updating user
// new:true → returning updated data
// try catch → handling errors
app.put("/updateUser/:id" , async (req, res)=>{
    try{
        let {id} = req.params
        let {name , email , contact} = req.body
    let updatedUser = await User.findByIdAndUpdate(id ,{
        name ,
        email,
        contact
    },{
        //new: true means: return the updated user, not the old user.
        new:true
    })
    return res.status(200).json({
        message:"User updated Successfully",
        user:updatedUser
    })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

//Delete
app.delete("/deleteUser/:id" , async (req,res)=>{
    try{
        let {id} = req.params
    let deleteUser = await User.findByIdAndDelete(id)
    return res.status(200).json({
        message:"User deleted Successfully",
        deletedUser:deleteUser
    })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
})
module.exports = app;
