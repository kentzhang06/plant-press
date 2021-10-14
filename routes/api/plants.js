const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Plant = require('../../models/Plant');
const User = require('../../models/User')
const validatePlantInput = require('../../validation/plants');

router.get('/:plantId', passport.authenticate('jwt', { session: false }),
(req, res) => {
  Plant.find({_id: req.params.plantId})
    .then(plant => res.json(plant))
    .catch(err =>
      res.status(404).json({noPlantFound: 'This plant does not exist' }
      )
    );
})

router.post('/:plantId/follow', passport.authenticate('jwt', {session: false}),
  (req, res) => {
    console.log(req)
    User.findOneAndUpdate(
      {_id: req.user.id},
      {
        $push: { plantsFollowed: req.params.plantId }
      }
    ).then(() => res.json(req.params.plantId))
    .catch(err => res.status(404).json('Could not follow'))
});

router.delete('/:plantId/follow', passport.authenticate('jwt', {session: false}),
  (req, rest) => {
    User.findOneAndUpdate(
      {_id: req.user.id},
      {
        $pull: { plantsFollowed: req.params.plantId }
      }
    ).then(() => res.json(req.params.plantId))
    .catch(err => res.status(404).json('Could not unfollow'))
})

router.get('/user/:userId', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Plant.find({userId: req.params.userId})
    .then(plants => res.json(plants))
    .catch(err =>
      res.status(404).json({ noPlantFound: 'No plants found from this user' }
      )
    );
});


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
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
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