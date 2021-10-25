import React from 'react';
import { Link } from 'react-router-dom';
import { RiInformationFill } from 'react-icons/ri';

export const InfoButton = (props) => {
  return (
    <div className='info-sticky'>
      <Link to='/info'>
        <RiInformationFill />
      </Link>
    </div>
  );
};
