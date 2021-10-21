import React from "react";
import { Link } from "react-router-dom";
import { ImLeaf } from "react-icons/im";

class CreateReminder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reminderText: "",
      frequency: "",
      userId: this.props.currentUserId,
      plantId: this.props.plantId,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createReminder(this.state)
      .then(this.props.history.push(`/plant/${this.props.plantId}`));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
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
            <h2 className="subtitle">Add A New Reminder</h2>
          </div>

          <div className="d-flex justify-content-center form-padding">
            <input
              type="text"
              value={this.state.reminderText}
              onChange={this.update("reminderText")}
              placeholder="ex. Water plant."
              className="session-input"
            />
          </div>

          <div className="d-flex justify-content-center ">
            <h3 className="form-subtitle">Enter Number of Days Between</h3>
          </div>
          <div className="d-flex justify-content-center form-padding">
            <input
              type="number"
              value={this.state.frequency}
              onChange={this.update("frequency")}
              placeholder="0"
              min="1"
              max="100"
              className="select-num"
            />
          </div>

          <div className="d-flex justify-content-center form-padding form-margin">
            <button className="session-button">Add Reminder!</button>
          </div>
        </form>
        <div className="row-end"></div>
      </div>
    );
  }
}

export default CreateReminder;
