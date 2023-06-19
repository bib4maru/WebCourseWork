import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {login: String, password: String, role: String}
)

export default mongoose.model("Users", UserSchema);