import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://kapil:${process.env.DB_PASSWORD}@cluster0.vxbqsod.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log("db connected successfully"))
    .catch((err) => console.log(err));
};
