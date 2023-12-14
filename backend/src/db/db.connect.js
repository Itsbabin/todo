import mongoose from 'mongoose';

const URI  = "mongodb+srv://babin:Babinandbubun2004@cluster0.qwtyfoz.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = async () => {
        console.log("connecting ot DB.......... ");
        await mongoose.connect(URI)
        .then((response)=>{
          console.log(`connected to db on port no: ${response.connections[0].port} successfully`);
        })
        .catch((err)=>{
          console.log(err);
        });
}

export default connectToDB;