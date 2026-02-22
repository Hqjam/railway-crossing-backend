import mongoose from "mongoose";

const trainSchema = new mongoose.Schema(
  {
    trainNumber: {
      type: String,
      required: true,
      unique: true
    },

    trainName: {
      type: String
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Train = mongoose.model("Train", trainSchema);
export default Train;