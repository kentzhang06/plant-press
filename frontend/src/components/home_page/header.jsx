import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { SiHomeassistant } from 'react-icons/si';
import { IoIosLogOut } from 'react-icons/io';
import {
  RiPlantLine,
  RiPlantFill,
  RiInformationLine,
  RiInformationFill,
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
          <NavLink
            to='/dashboard'
            className={location.pathname === '/dashboard' ? 'indigo' : null}
          >
            <SiHomeassistant className='darkgreen' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/feed'>
            {location.pathname === '/feed' ? (
              <RiNewspaperFill className='indigo' />
            ) : (
              <RiNewspaperLine className='darkgreen' />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={`/user/${props.user.id}`}>
            {location.pathname === `/user/${props.user.id}` ? (
              <RiPlantFill className='indigo' />
            ) : (
              <RiPlantLine className='darkgreen' />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to='/newsfeed'>
            {location.pathname === '/newsfeed' ? (
              <RiSearchEyeFill className='indigo' />
            ) : (
              <RiSearchEyeLine className='darkgreen' />
            )}
          </NavLink>
        </li>
        <li>
          <div onClick={props.logout} className='darkgreen'>
            <IoIosLogOut />
          </div>
        </li>
      </ul>
    </header>
  );
};
