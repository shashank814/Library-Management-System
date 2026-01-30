import mongoose from "mongoose";

export const connectDB =  () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "LIBRARY_MANAGEMENT_SYSTEM"
    }).then(()=>{
        console.log(`Database Connected Successfully`);
        
    }).catch((err)=>{
        console.log(`Error connecting to database`);
        
    })
}