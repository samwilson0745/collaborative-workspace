import mongoose from "mongoose";
import { app } from "./app";
import "dotenv/config";
import fs from "fs";
const PORT = process.env.PORT || 3000;

const start = async()=>{
    let MONGO_USER_URL = process.env.MONGO_USER_URL;
    if(!MONGO_USER_URL){
        try{
            MONGO_USER_URL = fs.readFileSync("/run/secrets/mongo_uri_user","utf8").trim();
        }catch(err){
            console.log("Error while reading the secret file:",err);
            throw new Error("MongoDB connection URL is not set")
        }
    }
    try{
        await mongoose.connect(MONGO_USER_URL);
    }catch(err){
        console.log(err)
    }    
    app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
}

start()