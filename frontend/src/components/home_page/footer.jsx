import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SiHomeassistant } from 'react-icons/si';
import { RiPlantLine, RiPlantFill, 
  RiInformationLine, RiInformationFill,
   RiNewspaperLine, RiNewspaperFill,
   RiSearchEyeLine,  RiSearchEyeFill
} from 'react-icons/ri';

export const Footer = (props) => {
  const location = useLocation();
  
  if (!props.user) return null;
  return (
    <footer className='container-fluid'>
      <div className='row'>
        <div className='col d-flex justify-content-center align-items-center icon'>
          <NavLink to='/feed'>
            { location.pathname === '/feed' ? <RiNewspaperFill /> : <RiNewspaperLine /> }
          </NavLink>
        </div>
        <div className='col d-flex justify-content-center align-items-center icon'>
          <NavLink to={`/user/${props.user.id}`}>
            { location.pathname === `/user/${props.user.id}` ? <RiPlantFill className='indigo' /> : <RiPlantLine /> }
          </NavLink>
        </div>
        <div className='col d-flex justify-content-center align-items-center icon home my-auto'>
          <NavLink to='/dashboard' className={ location.pathname === '/dashboard' ? 'indigo' : null }>
            <SiHomeassistant />
          </NavLink>
        </div>
        <div className='col d-flex justify-content-center align-items-center icon'>
          <NavLink to='/reminders'>
            { location.pathname === '/reminders' ? <RiSearchEyeFill /> : <RiSearchEyeLine /> }
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
