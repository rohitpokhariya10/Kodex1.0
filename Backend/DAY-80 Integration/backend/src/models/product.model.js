const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    price:{
        amount:{
            type:Number,
            required:true,
        },
        currency:{
            enum:["INR" , "USD"],
            default:"INR",
            type:String,
        }
    },
    description:{
        default:"test-desc",
        type:String,
    },
    category:{
        //enum is case sensetive
        enum:["Men" , "Women" , "Kids"],
        default:"Men",
        type:String,
    },
    stock:{
        type:Number,
        required:true,
    },
},
{
 timestamps:true,
})

//convert Schema to model
const Product = mongoose.model("products" , productSchema)
module.exports = Product