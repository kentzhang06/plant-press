import React from 'react';

class CreateReminder extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reminderText: "",
      frequency: "",
      userId: this.props.currentUserId,
      plantId: this.props.plantId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReminder(this.state)
    .then(this.props.history.push(`/plant/${this.props.plantId}`))
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render () {
    return(
      <div>
        <form className="create-reminder-form" onSubmit={this.handleSubmit}>

          <input type="text"
            value={this.state.reminderText}
            onChange={this.update('reminderText')}
            placeholder="Reminder Text"
          />

          <input type="number"
            value={this.state.frequency}
            onChange={this.update('frequency')}
            placeholder="Frequency"
            min="1"
            max="100"
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