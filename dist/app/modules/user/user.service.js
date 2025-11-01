import User from "./user.model.js";
const createUserIntoDB = async (payload) => {
    const existingUser = await User.findOne({ email: payload.email }).exec();
    if (existingUser) {
        throw new Error("User already exists");
    }
    const result = new User(payload);
    await result.save();
    return result;
};
export const UserServices = {
    createUserIntoDB
};
//# sourceMappingURL=user.service.js.map