import mongoose from "mongoose"
import colors  from "colors"


const connectDB = async () => {
    try{
         const con = await mongoose.connect(process.env.MONGODB_URL)
         console.log(`database connected successfully ${con.connection.host} `.bgMagenta.white)
    } catch(error){
     console.log("error while connecting database", error)
    }
}

export default connectDB