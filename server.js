import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"
import userRouter from "./routes/userRoute.js";
import cors from "cors"
dotenv.config()
const app = express();
app.use(cors());
const dbuser = encodeURIComponent(process.env.DBUSER)
const dbpass = encodeURIComponent(process.env.DBPASS)

mongoose.connect(`mongodb://localhost:27017/merncafe`)
.then(() => {
app.listen(2080, () => {
console.log("Server started");
});
});
app.use(express.static("public"));

// mongoose.connect("mongodb+srv://sampath:saisampath@cluster0.gjtu4i0.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0")
// .then(() => {
// app.listen(2080, () => {
// console.log("Server started");
// });
// })

app.use(express.json());

app.use("/api/users", userRouter);