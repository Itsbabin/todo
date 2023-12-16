import Data from '../modules/data.models'
import ApiResponse from '../utils/ApiResponse';


const creatData = async (req , res) => {
    const {title , summary} = req.body;
    await Data.create({
        title : title,
        summary : summary
    })
    .then((user) =>{
        const response = new ApiResponse(true , "user is created" ,user )
        res.status(200).json({response});
    })
    .catch((err) => {
        const response = new ApiResponse(false , "user creation faild" ,null)
        res.status(400).json({response});
    })
}

export default creatData;