import React from 'react';

class PlantDetails extends React.Component {

  componentDidMount() {
    this.props.fetchPlant(this.props.plantId);
    this.props.fetchReminders(this.props.plantId)
  }

  render() {
    if (!this.props.plant) return null;

    let { name, type, info, species } = this.props.plant;
    return(
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{species}</p>
        <p>{info}</p>
        <ul>
          {this.props.reminders.map(reminder => <li>{reminder.reminderType + ": " + reminder.reminderText}</li>) }
        </ul>
      </div>
    )
  }
}

export default PlantDetails;