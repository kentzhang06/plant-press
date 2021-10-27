const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReminderSchema = new Schema(
  {
    plantId: {
      type: Schema.Types.ObjectId,
      ref: "plants",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    reminderText: {
      type: String,
    },
    frequency: {
      type: Number,
    },
    completed: {
      type: Boolean,
      required: true
    },
    completedAt: {
      type: Date
    }
  },
  {
    timestamps: true,
  },
);

const Reminder = mongoose.model("Reminders", ReminderSchema);
module.exports = Reminder;
