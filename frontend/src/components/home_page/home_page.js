import React from 'react';
import FooterContainer from './footer_container';

import { FaBell } from 'react-icons/fa';
import ReminderHomeContainer from '../plants/plant_reminders/reminder_home_container';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchMyPlants(this.props.currentUser.id);
    this.props.fetchMyReminders();
  }

  render() {
    const { logout } = this.props;
    if (!this.props.plants) return null;
    if (!this.props.reminders) return null;

    return (
      <>
        <main className='main-col'>
          {this.props.reminders.map((reminder, i) => (
            <ReminderHomeContainer reminder={reminder} key={i} />
          ))}
          <button onClick={logout} className='logout-btn'>
            Log Out
          </button>
        </main>
      </>
    );
  }
}

export default HomePage;
