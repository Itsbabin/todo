import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        trim : true,
        required : true
    },
    email :{
        type: String,
        unique : true,
        trim : true,
        required : true
    },
    password:{
        type: String,
        trim : true,
        required : true
    }
},{
    timestamps : true
})

userSchema.pre("save", async function (next){
    this.password =  await bcrypt.hash(this.password,10);
    next();
})

const User = mongoose.model("User" , userSchema);

export default User;