import mongoose from "mongoose";
import { dbName } from "../constant.js";

const dbConnection = async ()=>{
   try {
    const dbInstance = mongoose.connect(`${process.env.MONGO_URI}/${dbName}`)
   } catch (error) {
    console.log(error);
   }
}

export default dbConnection