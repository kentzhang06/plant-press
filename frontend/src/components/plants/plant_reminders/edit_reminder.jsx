import React from 'react';

class EditReminder extends React.Component {
  constructor(props){
    super(props);

    console.log(this.props)

    this.state = {
      reminderText: this.props.reminder.reminderText,
      frequency: this.props.reminder.frequency,
      userId: this.props.reminder.userId,
      plantId: this.props.plantId,
      id: this.props.reminder._id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteReminderSubmit = this.deleteReminderSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlantReminder(this.props.plantId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReminder(this.state)
    .then(this.props.history.push(`/plant/${this.props.plantId}`))
  }

  deleteReminderSubmit(e){
    e.preventDefault();
    this.props.deletePlantReminder(this.state.id)
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
          />

          <input type="number"
          value={this.state.frequency}
          onChange={this.update('frequency')}
          min="1"
          max="100"
         />

          <button className="create-reminder-button">
            Edit Reminder
          </button>

        </form>

        <button onClick={this.deleteReminderSubmit} className="delete-reminder-button">
            Delete Reminder
        </button>
      </div>
    )
  }
}

export default EditReminder;