import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SiHomeassistant } from 'react-icons/si';
import { RiPlantLine, RiPlantFill, RiInformationLine, RiInformationFill } from 'react-icons/ri';
import { FaRegBell, FaBell } from 'react-icons/fa';
import { HiOutlinePhotograph, HiPhotograph } from 'react-icons/hi';

export const Footer = (props) => {

  
  const location = useLocation();
  
  if (!props.userId) return null;
  return (
    <footer className='container-fluid'>
      <div className='row'>
        <div className='col d-flex justify-content-center align-items-center icon'>
          <NavLink to='/feed'>
            { location.pathname === '/feed' ? <HiPhotograph /> : <HiOutlinePhotograph /> }
          </NavLink>
        </div>
        <div className='col d-flex justify-content-center align-items-center icon'>
          <NavLink to={`/user/${props.userId}`}>
            { location.pathname == `/user/${props.userId}` ? <RiPlantFill className='indigo' /> : <RiPlantLine /> }
          </NavLink>
        </div>
        <div className='col d-flex justify-content-center align-items-center icon home my-auto'>
          <NavLink to='/dashboard' className={ location.pathname === '/dashboard' ? 'indigo' : null }>
            <SiHomeassistant />
          </NavLink>
        </div>
        <div className='col d-flex justify-content-center align-items-center icon'>
          <NavLink to='/reminders'>
            { location.pathname === '/reminders' ? <FaBell /> : <FaRegBell /> }
          </NavLink>
        </div>
        <div className='col d-flex justify-content-center align-items-center icon'>
          <NavLink to='/info'>
            { location.pathname === '/info' ? <RiInformationFill /> : <RiInformationLine /> }
          </NavLink>
        </div>
      </div>
    </footer>
  )
}
