const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


//POST /api/auth/register
let registerController = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    let userExist = await userModel.findOne({ email });

    if (userExist) {
      return res.status(409).json({
        message: "Email already exist",
      });
    }

    // let hashPassword = bcrypt;


    let User = await userModel.create({
      username,
      email,
      password,
    });
     
    //Hum token bhi Schema ki help se generate karenge
    let token = User.generateJWT();
    // let token = jwt.sign(
    //   {
    //     id: User._id,
    //   },
    //   process.env.JWT_SECRET,
    //   {
    //     expiresIn: "1d",
    //   },
    // );

    res.cookie("JWT_TOKEN" , token , {httpOnly : true});
    return res.status(201).json({
        message:"User registered successfully",
        User
    })


  } catch (error) {
    console.error("Error in register Route" , error)
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

let loginController = async (req, res) => {
  try {

    let {email , password} = req.body;

    let userExist = await userModel.findOne({email});
   // console.log(userExist)

    if(!userExist){
        return res.status(404).json({
            message:"User doesnot exist"
        })
    }
    
    let checkPassword = userExist.comparePassword(password);

    if(!checkPassword){
        return res.status(401).json({
            message:"Invalid Password"
        })
    }

    let token = userExist.generateJWT()

    res.cookie("JWT_TOKEN" , token);
    return res.status(200).json({
        message:"User loggedIn successfully"
    })


  } catch (error) {
    console.error("Error in login route->" , error)
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


let getMeController = async (req , res)=>{
    let {user} = req
    return res.status(200).json({
        message:"Happy ho jao",
        user
    })

}


module.exports = { registerController, loginController,
    getMeController
 };
