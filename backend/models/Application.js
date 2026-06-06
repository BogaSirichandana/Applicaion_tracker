import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },

    eventType: {
      type: String,
      enum: [
        "Application",
        "Exam",
        "Interview",
        "HR Round",
        "Group Discussion",
        "Offer"
      ],
      default: "Application",
    },

    eventDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Upcoming",
        "Completed",
        "Missed",
        "Rejected",
        "Selected"
      ],
      default: "Upcoming",
    },

    appliedDate: {
      type: Date,
      default: Date.now,
    },

    notes: {
      type: String,
      default: "",
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model(
  "Application",
  applicationSchema
);

export default Application;