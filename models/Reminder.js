const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReminderSchema = new Schema({
  plantId: {
    type: Schema.Types.ObjectId,
    ref: 'plants'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  reminderType: {
    type: String
  },
  reminderText: {
    type: String
  }
}, {
  timestamps: true
})

const Reminder = mongoose.model("Reminders", ReminderSchema);
module.exports = Reminder;