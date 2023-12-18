import Data from "../modules/data.models.js";
import ApiResponse from "../utils/ApiResponse.js";


const fetchData = async (req , res) => {
    const {email} = req.body ;

   await Data.findOne({email : email}).then((data) => {
    const response = new ApiResponse(true,"data fetched",data)
    res.status(200).json({response});
    }).catch((err) =>{
        const response = new ApiResponse(true,"an error occoured",err)
        res.status(200).json({response});
    })
}

export default fetchData;