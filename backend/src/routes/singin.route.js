import User from "../modules/user.models.js";
import ApiResponse from "../utils/ApiResponse.js";

const singin = async (req , res) => {
    const {name , email , password} = req.body;
    await User.create({
        name : name,
        email : email,
        password : password
    })
    .then((data) =>{
       const response = new ApiResponse(true,"data fetched",data)
       res.status(200).json({response});
    })
    .catch((err) => {
       const response = new ApiResponse(false,"an error ocured",err)
       res.status(200).json({response});
    })

}

export default singin;