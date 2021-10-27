import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { SiHomeassistant } from 'react-icons/si';
import { IoIosLogOut } from 'react-icons/io';
import {
  RiPlantLine,
  RiPlantFill,
  RiNewspaperLine,
  RiNewspaperFill,
  RiSearchEyeLine,
  RiSearchEyeFill,
} from 'react-icons/ri';

export const Header = (props) => {
  const location = useLocation();
  if (!props.user) return null;
  return (
    <header>
      <h3>
        <Link className='darkgreen' to='/dashboard'>
          PlantPress
        </Link>
      </h3>
      <ul className='header-links'>
        <li>
          <NavLink to='/dashboard'>
            {location.pathname === '/dashboard' ? 
            <div className="header-buttons">
              <SiHomeassistant className='indigo' /> 
              <span className='indigo header-text'>Reminders</span>
            </div>
            : 
            <div className="header-buttons">
              <SiHomeassistant className='darkgreen' />
              <span className="darkgreen header-text">Reminders</span>
            </div>
            }
          </NavLink>
        </li>
        <li>
          <NavLink to='/feed'>
            {location.pathname === '/feed' ? (
              <div className="header-buttons">
                <RiNewspaperFill className='indigo' />
                <span className='indigo header-text'>Follow Feed</span>
              </div>
            ) : (
              <div className="header-buttons">
                <RiNewspaperLine className='darkgreen' />
                <span className='darkgreen header-text'>Follow Feed</span>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={`/user/${props.user.id}`}>
            {location.pathname === `/user/${props.user.id}` ? (
              <div className="header-buttons">
                <RiPlantFill className='indigo' />
                <span className='indigo header-text'>Collection</span>
              </div>
            ) : (
              <div className="header-buttons">
                <RiPlantLine className='darkgreen' />
                <span className="darkgreen header-text">Collection</span>

              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to='/newsfeed'>
            {location.pathname === '/newsfeed' ? (
              <div className="header-buttons">
                <RiSearchEyeFill className='indigo' />
                <span className='indigo header-text'>Explore</span>
              </div>
            ) : (
              <div className="header-buttons">
                <RiSearchEyeLine className='darkgreen' />
                <span className="darkgreen header-text">Explore</span>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <div onClick={props.logout} className='darkgreen'>
          <div className="header-buttons">
            <IoIosLogOut />
            <span className='header-text'>Log Out</span>
          </div>
          </div>
        </li>
      </ul>
    </header>
  );
};
