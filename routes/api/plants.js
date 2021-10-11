const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Plant = require('../../models/Plant');
const validatePlantInput = require('../../validation/plants');


router.post('/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatePlantInput(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      const newPlant = new Plant({
        plantName: req.body.plantName,
        plantType: req.body.plantType,
        plantBio: req.body.plantBio,
        plantSpecies: req.body.plantSpecies
      });

      newPlant.save().then(plant => res.json(plant));
    }
);

module.exports = router;