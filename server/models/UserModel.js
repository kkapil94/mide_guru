import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required:true,
    },
    email: {
      type: String,
      required:true
    },
    phone: {
      type: Number,
      required:true
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"], // You can adjust these values as needed
    },
    how_did_you_hear_about_this: {
      type: String,
      enum: ["Linked", "Friends", "Job Portals"],
    },
    city: {
      type: String,
      enum: ["Mumbai", "pune", "Ahmedabad"],
    },
    State: {
      type: String,
      enum: ["Gujarat", "Maharashtra", "Karnataka"],
    },
  },
  {
    timestamps:true,
  }
);

export const UserModel = mongoose.model("User",userSchema)