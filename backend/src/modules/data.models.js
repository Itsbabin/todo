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

const Data = mongoose.model("Data",dataSchema);

export default Data;
