import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    summary : {
        type : String,
        required : true,
        trim : true
    }
},
{timestamps : true});

export default Data = mongoose.model("Data",dataSchema);
