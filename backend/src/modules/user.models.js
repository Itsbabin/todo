import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name :{
        type: [String,"type should be string"],
        trim : true
    },
    email :{
        type: [String,"type should be string"],
        unique : true,
        trim : true
    },
    password:{
        type: String,
        trim : true
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