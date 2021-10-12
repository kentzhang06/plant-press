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
    plantPosts: [{
      type: Schema.Types.ObjectId,
      ref: 'posts'
    }]
  }, {
    timestamps: true
  })

const Plant = mongoose.model('Plant', PlantSchema);
module.exports = Plant;