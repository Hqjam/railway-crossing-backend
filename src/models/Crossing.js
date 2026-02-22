import mongoose from "mongoose";

const crossingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true
    },

    distanceFromSectionStartKm: {
      type: Number,
      required: true
    },

    warningBufferKm: {
      type: Number,
      default: 3
    },

    closingBufferKm: {
      type: Number,
      default: 1
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Crossing = mongoose.model("Crossing", crossingSchema);
export default Crossing;