import mongoose from "mongoose";

export function mongooseConnect(){
    if(mongoose.connection.readyState === 1){\
    return 
    }
}