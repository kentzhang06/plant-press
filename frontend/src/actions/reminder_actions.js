import * as ReminderAPIUtil from "../util/reminder_api_util";

export const RECEIVE_REMINDER = "RECEIVE_REMINDER";
export const RECEIVE_MY_REMINDERS = "RECEIVE_MY_REMINDERS";
export const RECEIVE_PLANT_REMINDERS = "RECEIVE_PLANT_REMINDERS";
export const RECEIVE_REMINDER_ERRORS = "RECEIVE_REMINDER_ERRORS";
export const CLEAR_REMINDER_ERRORS = "CLEAR_REMINDER_ERRORS";
export const REMOVE_REMINDER = "REMOVE_REMINDER";

const receivedReminder = (reminder) => ({
  type: RECEIVE_REMINDER,
  reminder,
});

const receivedMyReminders = (reminders) => ({
  type: RECEIVE_MY_REMINDERS,
  reminders,
});

const receivedPlantReminders = (reminders) => ({
  type: RECEIVE_PLANT_REMINDERS,
  reminders,
});

const receivedReminderErrors = (errors) => ({
  type: RECEIVE_REMINDER_ERRORS,
  errors,
});

export const clearReminderErrors = () => ({
  type: CLEAR_REMINDER_ERRORS,
});

const removeReminder = (reminderId) => ({
  type: REMOVE_REMINDER,
  reminderId,
});

export const fetchMyReminders = () => (dispatch) =>
  ReminderAPIUtil.fetchMyReminders().then(
    (result) => dispatch(receivedMyReminders(result.data)),
    (err) => dispatch(receivedMyReminders(err.response.data))
  );

export const createReminder = (reminder) => (dispatch) =>
  ReminderAPIUtil.createReminder(reminder).then(
    (result) => dispatch(receivedReminder(result.data)),
    (err) => dispatch(receivedReminderErrors(err.response.data))
  );
export const updateReminder = (reminder) => (dispatch) =>
  ReminderAPIUtil.updateReminder(reminder).then(
    (result) => dispatch(receivedReminder(result.data)),
    (err) => dispatch(receivedReminderErrors(err.response.data))
  );

export const fetchPlantReminder = (plantId) => (dispatch) =>
  ReminderAPIUtil.fetchPlantReminder(plantId).then(
    (result) => dispatch(receivedPlantReminders(result.data)),
    (err) => dispatch(receivedReminderErrors(err.response.data))
  );

export const deletePlantReminder = (reminderId) => (dispatch) =>
  ReminderAPIUtil.deleteReminder(reminderId).then(
    () => dispatch(removeReminder(reminderId)),
    (err) => dispatch(receivedReminderErrors(err.response.data))
  );
