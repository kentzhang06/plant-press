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
  },
  {
    timestamps: true,
  }
);

const Reminder = mongoose.model("Reminders", ReminderSchema);
module.exports = Reminder;
