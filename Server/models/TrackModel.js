import mongoose from "mongoose";

const TrackSchema = new mongoose.Schema(
    {
        name: String,
        picture: String,
        audio: String,
        owner: {type: mongoose.Schema.ObjectId, ref: "Musicians"}
    }
)

export default mongoose.model("Tracks", TrackSchema);