import React from 'react';

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

class RemindersHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reminder
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            completed: true
        })
        console.log(this.state)
        this.props.updateReminder(this.state);
    }
    
    render() {
        let { reminder, plant } = this.props;
        if (!reminder || !plant) return null;

        let date = new Date(reminder.updatedAt)
        let d = date.getDate();
        let m = date.getMonth() + 1;
        return (
            <div className={this.state.completed ? 'row d-flex justify-content-center reminder-row done' : 'row d-flex justify-content-center reminder-row'}>
                <div className='col-9'>
                    {plant.name}
                    <br/>
                    <span className='note'>{reminder.reminderText}</span>
                    <br/>
                    <span className='note'>Complete every {reminder.frequency} day(s)</span>
                    <br/>
                    <span className='note'>Last completed: {m + "/" + d}</span>
                </div>
                <div className={this.state.completed ? "col-3 d-flex justify-content-end align-items-center done" : "col-3 d-flex justify-content-end align-items-center" } onClick={this.handleClick}>
                    {this.state.completed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked /> }
                </div>
          </div>
        )
    }
}

export default RemindersHomePage;