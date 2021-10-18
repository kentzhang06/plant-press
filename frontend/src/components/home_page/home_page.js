import React from "react";
import FooterContainer from "./footer_container";

import { FaBell } from "react-icons/fa";
import ReminderHomeContainer from "../plants/plant_reminders/reminder_home_container";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchMyPlants(this.props.currentUser);
    this.props.fetchMyReminders();
  }

  render() {
    const { logout } = this.props;
    if (!this.props.plants) return null;
    if (!this.props.reminders) return null;

    return (
      <>
        <div className="container-fluid">
          <div className="d-flex justify-content-center"></div>

          <div className="row d-flex justify-content-center break">
            <h4>
              <FaBell className="break-icon" />
              &nbsp;Reminders
            </h4>
          </div>

          {this.props.reminders.map((reminder, i) => (
            <ReminderHomeContainer reminder={reminder} key={i} />
          ))}

          <div className="row d-flex justify-content-center">
            <button onClick={logout} className="logout-btn">
              Log Out
            </button>
          </div>

          <div className="row-end"></div>
        </div>
        <FooterContainer />
      </>
    );
  }
}

export default HomePage;
