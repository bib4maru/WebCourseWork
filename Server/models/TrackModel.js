import mongoose, {Schema,Types} from "mongoose";

const TrackSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        picture: String,
        audio: String,
        owner: {type: Schema.ObjectId, ref: "Musicians"}
    }
)

export const Track = mongoose.model("Tracks", TrackSchema);