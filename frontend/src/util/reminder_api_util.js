import axios from 'axios';

export const fetchMyReminders = () => {
  return axios.get(`/api/reminders/`)
}

export const fetchPlantReminder = plantId => {
  return axios.get(`/api/reminders/plant/${plantId}`)
}

export const createReminder = reminderForm => {
  return axios.post(`/api/reminders/plant/${reminderForm.plantId}/create`, reminderForm)
}

export const updateReminder = reminderForm => {
  return axios.patch(`/api/reminders/${reminderForm.id}`, reminderForm)
}

export const deleteReminder = reminderId => {
  return axios.delete(`/api/reminders/${reminderId}`)
}