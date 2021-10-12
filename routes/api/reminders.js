const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Reminder = require('../../models/Reminder');
const validateReminderInput = require('../../validation/reminders');
const Plant = require('../../models/Plant');

router.get('/plant/:plantId', (req, res) => {
  Reminder.find({plant: req.params.plantId})
  .then(reminders => res.json(reminders))
  .catch(err =>
    res.status(404).json({noReminderFound: "No reminders for this plant"})
    );
})

router.post('/plant/:plantId/create',
  passport.authenticate('jwt', {session: false }),
  (req, res) => {
    const {errors, isValid} = validateReminderInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newReminder = new Reminder({
      plantId: req.params.plantId,
      reminderType: req.body.reminderType,
      reminderText: req.body.reminderText,
    })

    let reminderObj = null;
    newReminder.save()
      .then(reminder => {

        reminderObj = reminder.toJSON();

        Plant.findOneAndUpdate(
          {_id: req.params.plantId},
          {
            $push: {plantReminders: reminderObj}
          }
        ).then(() => res.json(reminder))
      })
    })

router.patch('/:reminderId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReminderInput(req.body);

    if (!isValid) {
      return res.status(422).json(errors);
    }

    Reminder.findOneAndUpdate(
      { _id: req.params.reminderId },
      {
        reminderType: req.body.reminderType,
        reminderText: req.body.reminderText
      },
      {new: true}
    )
    .then(reminder => { return res.json(reminder)})
    .catch(err => {res.json(err)})
  }
)

router.delete('/:reminderId',
  passport.authenticate('jwt', { sesssion: false }),
  (req, res) => {
    Reminder.findByIdAndDelete(req.params.reminderId)
      .then(reminder => res.json(reminder.id))
      .catch(err => res.status(404).json({ noReminderFound: "this reminder does not exist"}))
  }
)





module.exports = router;