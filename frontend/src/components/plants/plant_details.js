import React from 'react';
import Groot from '../../images/groot.jpg'

class PlantDetails extends React.Component {

  componentDidMount() {
    this.props.fetchPlant(this.props.plantId);
    this.props.fetchReminders(this.props.plantId)
  }

  render() {
    if (!this.props.plant) return null;

    let { name, type, info, species } = this.props.plant;
    return(
      <>
        <div className='heading-img' style={{ background: `url(${Groot})  center center no-repeat`}}>
        </div> 
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
            {this.props.reminders.map(reminder => <li key ={reminder.id}>{reminder.reminderType + ": " + reminder.reminderText}</li>) }
          </ul>
        </div>
      </>
    )
  }
}

export default PlantDetails;