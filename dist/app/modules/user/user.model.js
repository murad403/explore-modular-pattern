import mongoose, { model, Schema } from "mongoose";
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
});
const User = mongoose.models.User || model("User", userSchema);
export default User;
//# sourceMappingURL=user.model.js.map