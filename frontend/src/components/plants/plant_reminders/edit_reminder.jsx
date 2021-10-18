import React from "react";
import { Link } from "react-router-dom";
import { ImLeaf } from "react-icons/im";

class EditReminder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reminderText: "",
      frequency: "",
      userId: "",
      plantId: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteReminderSubmit = this.deleteReminderSubmit.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchPlantReminder(this.props.plantId)
      .then(() => this.setState(this.props.reminder));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .updateReminder(this.state)
      .then(() => this.props.history.push(`/plant/${this.props.plantId}`));
  }

  deleteReminderSubmit(e) {
    e.preventDefault();
    this.props
      .deletePlantReminder(this.state.id)
      .then(() => this.props.history.push(`/plant/${this.props.plantId}`));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    if (!this.state) return null;
    console.log(this.props);
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center space-above">
          <Link to="/dashboard">
            <h1 className="title">
              PlantPress
              <span className="leaf-icon">
                <ImLeaf />
              </span>
              &nbsp;&nbsp;
            </h1>
          </Link>
          &nbsp;&nbsp;
        </div>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="d-flex justify-content-center">
            <h2 className="subtitle">Edit Reminder</h2>
          </div>

          <div className="d-flex justify-content-center form-padding">
            <input
              type="text"
              value={this.state.reminderText}
              onChange={this.update("reminderText")}
              className="session-input"
            />
          </div>

          <div className="d-flex justify-content-center">
            <h3 className="form-subtitle">Enter Number of Days Between</h3>
          </div>
          <div className="d-flex justify-content-center form-padding">
            <input
              type="number"
              value={this.state.frequency}
              onChange={this.update("frequency")}
              min="1"
              max="100"
            />
          </div>
          <div className="d-flex justify-content-center form-padding form-margin">
            <button className="session-button">Edit Reminder</button>
          </div>
        </form>

        <div className="d-flex justify-content-center form-padding form-margin">
          <button
            onClick={this.deleteReminderSubmit}
            className="session-button"
          >
            Delete Reminder
          </button>
        </div>
      </div>
    );
  }
}

export default EditReminder;
