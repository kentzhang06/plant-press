import React from 'react';
import { Link } from "react-router-dom";

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
// import { RiContrastLine } from 'react-icons/ri';

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
    this.props.updateReminder(this.state);
  }

  render() {
    const { reminder, plant, posts } = this.props;
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

    const displayPlantProfilePic = (plant) => {
      if (!posts[plant.plantPosts[0]]) {
        return <div className="colorbox">{plant.name.slice(0, 1)}</div>;
      } else {
        return (
          <img
            className="plant-photo"
            src={posts[plant.plantPosts[0]].imageUrl}
            alt=""
          />
        );
      }
    };


    return (
      <div className={currentDate >= overdued ? "red-box" : "white-box"}>
        <div className="flex-row-between reminder-box">
          <Link to={`/plant/${plant._id}`}>
            <div className="image-crop">{displayPlantProfilePic(plant)}</div>
          </Link>
          <div className="flex-col-center">
            <h4>{plant.name}</h4>
            <h5 className="center-text-mobile">{reminder.reminderText}</h5>
            <h6>Complete every {reminder.frequency} day(s)</h6>
            <h6>Last completed: {lastUpdate}</h6>
          </div>
          <div
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
