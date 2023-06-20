import mongoose, {Schema} from "mongoose";

const MusicianSchema = new Schema(
    {
        Username: {
            type: String,
            required: true,
            unique: true
        },
        Firstname: {
            type: String,
            required: true
        }, 
        Surname: {
            type: String,
            required: true
        }
    }
)

export const Musician = mongoose.model("Musicians",MusicianSchema);