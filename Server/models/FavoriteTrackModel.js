import mongoose from "mongoose";

const FavoriteTrack = new mongoose.Schema ({
    track : {type: mongoose.Schema.ObjectId, ref: "Tracks" },
    ownerUser : {type: mongoose.Schema.ObjectId, ref: "Users"}
})

export default mongoose.model("Collection",FavoriteTrack);