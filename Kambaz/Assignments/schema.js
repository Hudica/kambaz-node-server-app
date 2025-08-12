import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    course: { type: String, ref: "CourseModel" },
    module: { type: String, default: "Module" },
    available: String,  // Changed from available_at to match frontend
    due: String,        // Changed from due_date to match frontend
    points: Number,
  },
  { collection: "assignments" }
);

export default schema;