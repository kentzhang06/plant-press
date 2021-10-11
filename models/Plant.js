const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    handle: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  })

const Plant = mongoose.model('Plant', PlantSchema);
module.exports = Plant;