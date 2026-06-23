import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    specialty: { type: String, required: true },
    department: { type: String, required: true },
    photo: { type: String, default: "" },
    bio: { type: String, default: "" },
    email: { type: String },
    phone: { type: String },
    available: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.model("Doctor", doctorSchema);
