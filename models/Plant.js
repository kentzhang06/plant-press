const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    plantName: {
      type: String,
      required: true
    },
    plantType: {
      type: String,
      required: true
    },
    plantBio: {
      type: String,
    },
    plantSpecies: {
      type: String,
    }
  }, {
    timestamps: true
  })

const Plant = mongoose.model('Plant', PlantSchema);
module.exports = Plant;