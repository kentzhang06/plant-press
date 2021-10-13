const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    info: {
      type: String,
    },
    species: {
      type: String,
    },
    plantReminders: [{
      type: Schema.Types.ObjectId,
      ref: 'reminders'
    }]
  }, {
    timestamps: true
  })

const Plant = mongoose.model('Plant', PlantSchema);
module.exports = Plant;