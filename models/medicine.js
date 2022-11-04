import mongoose from "mongoose";
const Schema = mongoose.Schema;

const medicineSchema = new Schema(
  {
    title: { type: String, required: true },
    quantity: { type: Number, required: true },
    morningTime: { type: string, required: true },
    afternoonTime: { type: string, required: true },
    eveningTime: { type: string, required: true },
    morningDose: { type: Number, required: true },
    afternoonDose: { type: Number, required: true },
    eveningDose: { type: Number, required: true },
    weekDays: { type: Array, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Medicine", medicineSchema, "medicine");
