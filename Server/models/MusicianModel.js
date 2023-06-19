import mongoose from "mongoose";

const MusicianSchema = new mongoose.Schema(
    {username: String,Firstname: String, Surname: String}
)

export default mongoose.model("Musicians",MusicianSchema);