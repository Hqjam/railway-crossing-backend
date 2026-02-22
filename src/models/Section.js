import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    stationBefore: {
      type: String,
      required: true,
      trim: true
    },
    stationAfter: {
      type: String,
      required: true,
      trim: true
    },
    sectionLengthKm: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Section = mongoose.model("Section", sectionSchema);
export default Section;