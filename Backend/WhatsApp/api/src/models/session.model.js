import bcrypt from "bcryptjs";
import mongoose from "mongoose";


const sessionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true,//Use B+ tree
        
    },
    refreshTokenHash:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
});


sessionSchema.pre("save" , async function(){
    if(this.isModified("refreshTokenHash")){
        const salt = await bcrypt.genSalt(10);
    this.refreshTokenHash = await bcrypt.hash(thi.refreshTokenHash , salt);
    }
})

sessionSchema.methods.compareRefreshToken = async function({refreshToken}){
    return await bcrypt.compare(refreshToken , this.refreshTokenHash);
}

const Session = mongoose.model("sessions" , sessionSchema);
export default sessionSchema;