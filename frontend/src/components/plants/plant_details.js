import React from 'react';
// import EditReminderContainer from './plant_reminders/edit_reminder_container';
import { Link } from 'react-router-dom';

class PlantDetails extends React.Component {

  componentDidMount() {
    this.props.fetchPlant(this.props.plantId);
    this.props.fetchReminders(this.props.plantId)
  }

  render() {
    console.log(this.props.plant)
    if (!this.props.plant) return null;
    console.log(this.props)
    let { name, type, info, species } = this.props.plant;
    const {plantId} = this.props;
    return(
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{species}</p>
        <p>{info}</p>
        <ul>
          {console.log(this.props.reminders)}
          {this.props.reminders.map(reminder =>
            <Link to={`/plant/${plantId}/reminder/${reminder._id}`}>
          <li idx={reminder._id}>
              {reminder.reminderType + ": " + reminder.reminderText}
          </li>
            </Link>
          )}
        </ul>
      </div>
    )
  }
}

export default PlantDetails;