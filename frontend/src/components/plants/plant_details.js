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
    return(
      <div className='container-fluid'>
        {/* <div className='heading-img' style={{ background: `url(${Groot}) no-repeat`}}>
        </div> */}
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

          {this.props.reminders.map(reminder => <li key ={reminder.id}>{reminder.reminderType + ": " + reminder.reminderText}</li>) }

          {console.log(this.props.reminders)}
          {this.props.reminders.map(reminder =>
            <Link to={`/plant/${plantId}/reminder/${reminder._id}`}>
          <li idx={reminder._id}>
              {reminder.reminderType + ": " + reminder.reminderText + " " + reminder.frequency + " time(s) per week"}
          </li>
            </Link>
          )}
        <Link to={`/plant/${plantId}/reminder`}>
          Create New Reminder
        </Link>
        </ul>


      </div>
    )
  }
}

export default PlantDetails;