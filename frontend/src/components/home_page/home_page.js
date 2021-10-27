import React from 'react';

import ReminderHomeContainer from '../plants/plant_reminders/reminder_home_container';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchMyPlants(this.props.currentUser.id);
    this.props.fetchMyReminders();
    this.props.fetchAllPosts("");
  }

  render() {
    const { logout, currentUser, plants, reminders, posts } = this.props;
    if (!plants) return null;
    if (!reminders) return null;

    return (
      <>
        <main className="main-col">
          <div>
            <h2 className="center-text-mobile">
              Welcome {currentUser.handle}! Here are your reminders.
            </h2>
          </div>
          {this.props.reminders.map((reminder, i) => (
            <ReminderHomeContainer
              reminder={reminder}
              plants={plants}
              posts={posts}
              key={i}
            />
          ))}
          <button onClick={logout} className="logout-btn">
            Log Out
          </button>
        </main>
      </>
    );
  }
}

export default HomePage;
