import mongoose, {Schema,Types} from "mongoose";

const FavoriteTrack = new Schema ({
    track : {type: Schema.ObjectId, ref: "Tracks" },
    ownerUser : {type: Schema.ObjectId, ref: "Users" }
})

export const FvTrack = mongoose.model("Collection",FavoriteTrack);