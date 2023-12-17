import Data from '../modules/data.models.js'
import ApiResponse from '../utils/ApiResponse.js';


const creatData = async (req , res) => {
    const {title , summary} = req.body;
   try {
    
   await Data.create({
        title : title,
        summary : summary
    })
    .then((user) =>{
        const response = new ApiResponse(true , "user is created" ,user )
        res.status(200).json({response});
    })
    .catch((err) => {
        const response = new ApiResponse(false , "user creation faild" ,err)
        res.status(400).json({response});
    })}catch (error) {
        const response = new ApiResponse(false , "user creation faild" ,error)
        res.status(400).json({response});
    }
}

export default creatData;