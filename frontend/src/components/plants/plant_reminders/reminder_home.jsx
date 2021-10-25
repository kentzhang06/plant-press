import React from 'react';

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

class RemindersHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reminder;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      completed: true,
    });
    console.log(this.state);
    this.props.updateReminder(this.state);
  }

  render() {
    let { reminder, plant } = this.props;
    if (!reminder || !plant) return null;

    let date = new Date(reminder.updatedAt);
    let d = date.getDate();
    let m = date.getMonth() + 1;
    return (
      <div className='white-box'>
        <div >
          <h2 >Welcome {currentUser.handle}! Here are your reminders.</h2>
        </div>
        <div className='flex-row-between'>
          <div>
            <h4>{plant.name}</h4>
            <h5>{reminder.reminderText}</h5>
            <h6>Complete every {reminder.frequency} day(s)</h6>
            <h6>Last completed: {m + '/' + d}</h6>
          </div>
          <div
            className={
              this.state.completed
                ? 'col-3 d-flex justify-content-end align-items-center'
                : 'col-3 d-flex justify-content-end align-items-center'
            }
            onClick={this.handleClick}
          >
            {this.state.completed ? (
              <ImCheckboxChecked />
            ) : (
              <ImCheckboxUnchecked />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RemindersHomePage;
