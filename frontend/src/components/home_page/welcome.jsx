import React from 'react'
import { ImLeaf } from 'react-icons/im'

export const Welcome = (props) => {
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center push-center'>
        <h1 className='title-dark'>
          PlantPress<span className='leaf-icon'><ImLeaf/></span>
        </h1>
      </div>

      <div className='d-flex justify-content-center splash-login'>
        Log In
      </div>
      <div className='d-flex justify-content-center splash-signup'>
        Create A New Account
      </div>

    </div>
  )
}
