import React from 'react';

import ReminderHomeContainer from '../plants/plant_reminders/reminder_home_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.sortedReminders = this.sortedReminders.bind(this);
  }

  componentDidMount() {
    this.props.fetchMyPlants(this.props.currentUser.id);
    this.props.fetchMyReminders();
  }

  sortedReminders() {
    let { reminders } = this.props;
    let sorted = reminders.sort((a, b) => {
      const lastUpdated1 = new Date(a.completedAt);
      const lastUpdated2 = new Date(b.completedAt);
      const overdued1 = new Date( lastUpdated1.getTime() + (a.frequency * 24 * 60 * 60 * 1000)) 
      const overdued2 = new Date( lastUpdated2.getTime() + (b.frequency * 24 * 60 * 60 * 1000)) 

      const currentDate = new Date();

      if (overdued1 - currentDate <= overdued2 - currentDate ) {
        return -1;
      } else return 1
    })

    return sorted;
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
          {this.sortedReminders().map((reminder, i) => (
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
