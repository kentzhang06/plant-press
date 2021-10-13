import React from 'react';

class CreateReminder extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reminderType: "",
      reminderText: "",
      userId: this.props.currentUserId,
      plantId: this.props.plantId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReminder(this.state);
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render () {
    console.log(this.props)
    return(
      <div>
        <form className="create-reminder-form" onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.reminderType}
            onChange={this.update('reminderType')}
            placeholder="Reminder Type"
          />

          <input type="text"
            value={this.state.reminderText}
            onChange={this.update('reminderText')}
            placeholder="Reminder Text"
          />

          <button className="create-reminder-button">
            Create Reminder
          </button>
        </form>
      </div>
    )
  }
}

export default CreateReminder;