import React from 'react';

import Groot from '../../images/groot.jpg'

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

    if (this.props.plant.userId === this.props.currentUserId){
      return(
        <div className='container-fluid'>
          <div className='row d-flex justify-content-center vertical-center heading'>
            <h3>{name}</h3>
            <p className='heading-plant-type'>{type}&nbsp;
            {species ? <span>{species}</span> : null}
            </p>
          </div>

          <p>{name}</p>
          <p>{type}</p>
          <p>{species}</p>
          <p>{info}</p>
          <ul>

          {this.props.reminders.map(reminder =>
            <Link to={`/plant/${plantId}/reminder/${reminder._id}`}>
              <li idx={reminder._id}>
                {reminder.reminderText + " every " + reminder.frequency + " day(s)"}
              </li>
            </Link>
          )}

          <Link to={`/plant/${plantId}/reminder`}>
            Create New Reminder
          </Link>
          </ul>

        </div>
      )
    } else {
      return (
        <div className='container-fluid'>
          <div className='row d-flex justify-content-center vertical-center heading'>
            <h3>{name}</h3>
            <p className='heading-plant-type'>{type}&nbsp;
            {species ? <span>{species}</span> : null}
            </p>
          </div>

          <p>{name}</p>
          <p>{type}</p>
          <p>{species}</p>
          <p>{info}</p>
          <ul>

          {this.props.reminders.map(reminder =>
            <li idx={reminder._id}>
              {reminder.reminderText + " every " + reminder.frequency + " day(s)"}
            </li>
          )}
          </ul>
        </div>
      )
    }
  }
}

export default PlantDetails;