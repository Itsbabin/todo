import Data from '../modules/data.models'


const creatData = (req , res) => {
    const {title , summary} = req.body;
    Data.create({
        title : title,
        summary : summary
    })
}

export default creatData;