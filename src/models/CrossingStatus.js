import mongoose from "mongoose";

const crossingStatusSchema = new mongoose.Schema(
  {
    crossingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Crossing",
      required: true
    },

    status: {
      type: String,
      enum: ["OPEN", "CLOSING_SOON", "CLOSED"],
      default: "OPEN"
    },

    activeTrainNumbers: [
      {
        type: String
      }
    ],

    lastUpdated: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const CrossingStatus = mongoose.model(
  "CrossingStatus",
  crossingStatusSchema
);

export default CrossingStatus;