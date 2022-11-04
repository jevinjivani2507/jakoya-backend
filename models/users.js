import mongoose from "mongoose";
const Schema = mongoose.Schema;
import Medicine from "./medicine.js";

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    medicine: [
      {
        type: Schema.Types.ObjectId,
        ref: "Medicine",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", productSchema, "users");
