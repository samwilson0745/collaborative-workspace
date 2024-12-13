import mongoose from "mongoose";
import { app } from "./app";
import "dotenv/config";
const PORT = process.env.PORT || 3000;

const start = async()=>{
    // if(!process.env.MONGO_TASK_URL){
    //     throw new Error("Env variables not set")
    // }
    // try{
    //     await mongoose.connect(process.env.MONGO_TASK_URL as string);
    // }catch(err){
    //     console.log(err)
    // }    
    app.listen(PORT, () => console.log(`Real time service running on port ${PORT}`));
}

start()