import React from 'react';
import { Link } from 'react-router-dom';

import { GoPlus } from 'react-icons/go';
import { FaBell, FaRegBell } from 'react-icons/fa';

import Groot from '../../images/groot.jpg'


class PlantDetails extends React.Component {

  componentDidMount() {
    this.props.fetchPlant(this.props.plantId);
    this.props.fetchReminders(this.props.plantId);
    this.props.fetchPlantPosts(this.props.plantId);
  }

  render() {

    if (!this.props.plant) return null;

    let { name, type, info, species } = this.props.plant;
    const {plantId, posts, plant} = this.props;

    const displayPlantPic = (!posts[plant.plantPosts[0]]) ? 
      <div className='heading-img' style={{ background: `url(${Groot})  center center no-repeat`}}>
      </div> 
      :
      <div className='heading-img'>
        <img className='plant-profile-pic' src={posts[plant.plantPosts[0]].imageUrl} alt="" />;
      </div>;

    return(
      <>
        {displayPlantPic}
        <div className='container-fluid'>
          <div className='row d-flex justify-content-center vertical-center heading'>
            <h3 className='plant-name'>{name}</h3>
            <p className='plant-type'>{type}&nbsp;
            {species ? <span>{species}</span> : null}
            </p>
            <p className='plant-bio'>{info}</p>
          </div>

          <div className='row d-flex justify-content-center vertical-center heading-reminder'>
            <h4><FaBell className='heading-icon'/>&nbsp;{name}'s Reminders</h4>
          </div>

          {this.props.reminders.map(reminder =>
            <Link key={reminder._id} to={`/plant/${plantId}/reminder/${reminder._id}`}>
              <div className='row plant-row-dark'>
                <div className='col-4 plant-row-img'>
                  <FaRegBell />
                </div>
                <div className='col-8 plant-row-text'>
                  <div className='plant-row-info'>
                    <p className='plant-row-name'>
                      {reminder.reminderText}
                      {reminder.frequency}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <Link to={`/plant/${plantId}/reminder`}>
            <div className='row plant-row-light'>
              <div className='col-4 plant-row-img'>
                <GoPlus />
              </div>
              <div className='col-8 plant-row-text'>
                <div className='plant-row-info'>
                  <p className='plant-row-name'>
                    Add A Reminder
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <div className='row row-end'></div>
        </div>
      </>
    )
  }
}

export default PlantDetails;