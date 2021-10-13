import React from 'react';import { Footer } from './footer';

import { FaRegBell, FaBell } from 'react-icons/fa';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout } = this.props;
    return(
        <>
          <div className='container-fluid'>

            <div className='d-flex justify-content-center'>

            </div>

            <div className='row d-flex justify-content-center break'>
              <h4><FaBell className='break-icon'/>&nbsp;Reminders</h4>
            </div>

            <div className='row d-flex justify-content-center reminder-row'>
              <div className='col'>
                Water Poison Ivy.<br />
                <span className='note'>( 2 cups )</span>
              </div>
              <div className='col d-flex justify-content-end align-items-center'>
                <ImCheckboxUnchecked />
              </div>
            </div>

            <div className='row d-flex justify-content-center reminder-row done'>
              <div className='col'>
                Water Fern.<br />
                <span className='note'>( 1 cup )</span>
              </div>
              <div className='col d-flex justify-content-end align-items-center'>
                <ImCheckboxChecked />
              </div>
            </div>

            <div className='row d-flex justify-content-center'>
              <button onClick={logout} className='logout-btn'>Log Out</button>
            </div>

          </div>
          <Footer />
        </>
    )
  }

}

export default HomePage;