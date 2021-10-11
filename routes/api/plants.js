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
        userId: req.user.id,
        name: req.body.name,
        type: req.body.type,
        info: req.body.info,
        species: req.body.species
      });

      newPlant.save().then(plant => res.json(plant));
    }
);

router.patch('/:plantId',
    passport.authenticate('jwt', { session: false }
    ), (req, res) => {
      const { errors, isValid } = validatePlantInput(req.body);

      if (!isValid) {
        return res.status(422).json(errors);
      }

      Plant.findOneAndUpdate(
        { _id: req.params.plantId },
        {
          name: req.body.name,
          type: req.body.type,
          info: req.body.info,
          species: req.body.species,
        },
        { new: true }
      ).then(plant => {
        return res.json(plant)
      }).catch(err => {
        res.json(err)
      });
});

router.delete("/:plantId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Plant.findByIdAndDelete(req.params.plantId)
      .then(plant => res.json(plant.id))
      .catch(err => res.status(404).json({ noPlantFound: "This plant does not exist" }))
  }
)



module.exports = router;