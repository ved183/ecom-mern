import mongoose from 'mongoose'


const connectDB = async ()  =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to mongo successfully ${conn.connection.host}`);
    } catch (error){
            console.log(`Error ${error}`.bgRed.white);
            
    }
};
export default connectDB;