const express = require("express")
const Product = require("./models/product.model")
const cors = require("cors")
const app = express()
app.use(express.json())

app.use(cors({
    rigin:"http://localhost:5173/",
}))





//1.Create Product
app.post("/createProduct" , async (req , res)=>{
    try{
        let {productName , description , amount , currency , stock , category} = req.body
   
     //validations
    if(!productName || !amount ||!stock){
        return res.status(400).json({
            message:"All fields are required",
        })
    }
    //agar FD se sabhi required fields aye hain then
    let newProduct = await Product.create({
        productName,
        description,
        price:{
            amount,
            currency,
        },
        stock,
        category,
    })
    return res.status(201).json({
        message:"Product created successfully",
        products:newProduct
    })
    }
    catch(error){
        console.error("Create route fathgya..." , error)
        return res.status(500).json({
            message:"Internal server error"
        })
    }




    //create me jo object bhejte hai mongoDb ko vo schema ke according hoga

})




module.exports = app