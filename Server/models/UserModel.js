import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema(
    {
        login: {
            type: String,
            required: true,
            unique: true
        }, 
        password: {
            type: String,
            required: true
        }, 
        role: {
            type: String,
            required: true
        }
    }
)

export const User = mongoose.model("Users", UserSchema);