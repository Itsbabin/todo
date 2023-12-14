import User from "../modules/user.models.js";
import bcrypt from 'bcrypt';

const login = async (req , res) => {
        const {email , password} = req.body;

   const user =  await User.find({email})

   console.log(user);
   if( user.length == 1){
       res.status(200).json({message : "ok"});
    }
    else if( user.length == 0){
        res.status(400).json({message : "email not match"});
    }
    else{
        res.status(400).json({message : "some error occourd"});
    }
    
}


export default login;