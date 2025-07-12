// import mongoose from "mongoose";

// //models > userModel
// const userSchema = mongoose.Schema(
// {
//     name: { type: String },
//     email: { type: String, unique: true },
//     password: { type: String },
//     role: { type: String, default: "user" },
// },
// { timestamps: true }
// );
// export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

//models > userModel
const userSchema = mongoose.Schema(
{
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, default: "user" },
    status: { type: String, default: "active" },
},
{ timestamps: true }
);
export default mongoose.model("User",userSchema);