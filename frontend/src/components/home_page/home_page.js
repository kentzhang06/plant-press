import React from 'react';

import ReminderHomeContainer from '../plants/plant_reminders/reminder_home_container';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchMyPlants(this.props.currentUser.id);
    this.props.fetchMyReminders();
  }

  render() {
    const { logout, currentUser, plants, reminders } = this.props;
    if (!plants) return null;
    if (!reminders) return null;

    return (
      <>
        <main className='main-col'>
          <div >
            <h2 >Welcome {currentUser.handle}! Here are your reminders.</h2>
          </div>
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
