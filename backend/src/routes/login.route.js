import User from "../modules/user.models.js";
import bcrypt from 'bcrypt';
import ApiResponse from "../utils/ApiResponse.js";

const login = async (req , res) => {
        const {email , password} = req.body;

   const user =  await User.find({email})

   console.log(user);
   if( user.length == 1){
       const response = new ApiResponse(true,"password is correct",user[0])
       res.status(200).json({response});
    }
    else if( user.length == 0){
        const response = new ApiResponse(false,"email is incorrect",null)
        res.status(400).json({response});
    }
    else{
        res.status(400).json({message : "some error occourd"});
    }
    
}


export default login;