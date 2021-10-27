import React from 'react';

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
// import { RiContrastLine } from 'react-icons/ri';

class RemindersHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reminder;
    // this.state.completed = false;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state)
    this.setState({
      completed: true,
      completedAt: new Date()
    });
    console.log(this.state)

    // this.state.completedAt = new Date();
    this.props.updateReminder(this.state);
  }

  componentDidMount() {
    // const { reminder, updateReminder } = this.props;
    // if (!reminder.completedAt) {
    //   const date = new Date(reminder.completedAt);
    //   const currentDate = new Date();
    //   const overdued = new Date(date.getTime() + (reminder.frequency * 24 * 60 * 60 * 1000));
    //   if (overdued > currentDate && reminder.completed) {
    //     updateReminder({_id: reminder._id, completed: false})
    //   }
    // }
  //   if (currentDate - date < (24 * 60 * 60 * 1000)) {
  //     this.setState({
  //       completed: true
  //     })
  //   } else {
  //     this.setState({
  //       completed: false
  //     })
  //   }
  }

  render() {
    const { reminder, plant } = this.props;
    if (!reminder || !plant) return null;

    const date = new Date(reminder.updatedAt);
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();
    const lastUpdate = m + '/' + d + '/' + y;
    const currentDate = new Date();
    const overdued = new Date(date.getTime() + (reminder.frequency * 24 * 60 * 60 * 1000));
    // console.log(currentDate)
    // console.log(overdued)
    // console.log(currentDate > overdued)


    return (
      <div className={currentDate >= overdued ? 'red-box' : 'white-box'} >
        <div className='flex-row-between'>
          <div>
            <h4>{plant.name}</h4>
            <h5>{reminder.reminderText}</h5>
            <h6>Complete every {reminder.frequency} day(s)</h6>
            <h6>Last completed: {lastUpdate}</h6>
          </div>
          <div
            className={
              this.state.completed
                ? 'col-3 d-flex justify-content-end align-items-center'
                : 'col-3 d-flex justify-content-end align-items-center'
            }
            onClick={this.handleClick}
          >
            {reminder.completed ? (
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
