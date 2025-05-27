import mongoose, { Schema, Document } from "mongoose";

export interface IEmployee extends Document {
  image: string;
  name: string;
  id: string;
  joined: string;
  jobDesk: string[];
  schedule: string[];
  contact: string;
  status: "Active" | "Inactive";
}

const EmployeeSchema: Schema<IEmployee> = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  joined: { type: String, required: true },
  jobDesk: { type: [String], required: true },
  schedule: { type: [String], required: true },
  contact: { type: String, required: true },
  status: { type: String, enum: ["Active", "Inactive"], required: true },
});

export default mongoose.model<IEmployee>("Employee", EmployeeSchema);
