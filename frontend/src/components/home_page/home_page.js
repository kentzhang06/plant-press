import React from 'react';
import FooterContainer from './footer_container';

import { FaBell } from 'react-icons/fa';
// import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import ReminderHomeContainer from '../plants/plant_reminders/reminder_home_container'

class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchMyPlants(this.props.currentUser);
    this.props.fetchMyReminders()
  }

  render() {
    const { logout } = this.props;
    if (!this.props.plants) return null;
    if (!this.props.reminders) return null;

    return(
        <>
          <div className='container-fluid'>

            <div className='d-flex justify-content-center'>

            </div>

            <div className='row d-flex justify-content-center break'>
              <h4><FaBell className='break-icon'/>&nbsp;Reminders</h4>
            </div>

            {this.props.reminders.map(reminder =>
              <ReminderHomeContainer reminder={reminder} />
            )}

            {/* <div className='row d-flex justify-content-center reminder-row'>
              <div className='col'>
                Water Poison Ivy.<br />
                <span className='note'>( 2 cups )</span>
              </div>
              <div className='col d-flex justify-content-end align-items-center'>
                <ImCheckboxUnchecked />
              </div>
            </div>

            <div className='row d-flex justify-content-center reminder-row done'>
              <div className='col'>
                Water Fern.<br />
                <span className='note'>( 1 cup )</span>
              </div>
              <div className='col d-flex justify-content-end align-items-center'>
                <ImCheckboxChecked />
              </div>
            </div> */}

            <div className='row d-flex justify-content-center'>
              <button onClick={logout} className='logout-btn'>Log Out</button>
            </div>

            <div className='row-end'>

            </div>
          </div>
          <FooterContainer />
        </>
    )
  }

}

export default HomePage;