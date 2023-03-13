//establishing connection with data base
import mongoose from "mongoose";

export const Connection = async function(URL){
    
    try{
     await mongoose.connect(URL);
     console.log("connection established successfully with mongoCloud"); 
    }
    catch(err){
        console.log("Error while connecting with DataBase" , err);
    }
}
export default Connection;