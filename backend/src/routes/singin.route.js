import User from "../modules/user.models.js";

const singin = async (req , res) => {
    const {name , email , password} = req.body;
    await User.create({
        name : name,
        email : email,
        password : password
    })
    .then((data) =>{
        res.status(200).json({data : data});
    })
    .catch((err) => {
        res.status(400).json({err : err});
    })

}

export default singin;