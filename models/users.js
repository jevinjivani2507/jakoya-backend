import mongoose from "mongoose";
const Schema = mongoose.Schema;
import Medicine from "./medicine.js";

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    medicine: [
      {
        title: { type: String, required: true },
        quantity: { type: Number, required: true },
        morningTime: { type: String, required: true },
        afternoonTime: { type: String, required: true },
        eveningTime: { type: String, required: true },
        morningDose: { type: Number, required: true },
        afternoonDose: { type: Number, required: true },
        eveningDose: { type: Number, required: true },
        weekDays: { type: String, required: true },
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema, "users");
