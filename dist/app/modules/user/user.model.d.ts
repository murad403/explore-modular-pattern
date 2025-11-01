import mongoose from "mongoose";
import TUser from "./user.interface.js";
declare const User: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<TUser, {}, {}, {}, mongoose.Document<unknown, {}, TUser, {}, {}> & TUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export default User;
//# sourceMappingURL=user.model.d.ts.map