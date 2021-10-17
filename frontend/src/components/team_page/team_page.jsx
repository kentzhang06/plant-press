import React from 'react';
import { Link } from 'react-router-dom';
import { ImLeaf } from 'react-icons/im';

const TeamPage = () => {
  return (

    <div className="team-page">
      <div className='d-flex justify-content-center space-above'>
        <Link to='/dashboard'>
          <h1 className='title'>
            PlantPress<span className='leaf-icon'><ImLeaf/></span>&nbsp;&nbsp;
          </h1>
        </Link>&nbsp;&nbsp;
        <br/>
        <br/>
        <br/>
      </div>

      <div className='d-flex justify-content-center'>
        <h1>Meet the Plant Press team!</h1>
      </div>

      <div className='d-flex justify-content-center'>

        <div className="team-member">
          <ul>
            <li className="member-name">
              Danny Feng
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/dannyfeng1">
                <ion-icon name="logo-github"></ion-icon>   Github
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danny-feng1/">
                <ion-icon name="logo-linkedin"></ion-icon>   LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="team-member">
          <ul>
            <li className="member-name">
              Kent Zhang
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/kentzhang06">
                <ion-icon name="logo-github"></ion-icon>   Github
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kent-zhang-297591193/">
                <ion-icon name="logo-linkedin"></ion-icon>   LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="team-member">
          <ul>
            <li className="member-name">
              Jon Zamora
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/jayzizzle">
                <ion-icon name="logo-github"></ion-icon>   Github
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jon-zamora-97a8a6219/">
                <ion-icon name="logo-linkedin"></ion-icon>   LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="team-member">
          <ul>
            <li className="member-name">
              Jason Kim
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/jasonkim0105">
                <ion-icon name="logo-github"></ion-icon>   Github
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jason-kim-0105/">
                <ion-icon name="logo-linkedin"></ion-icon>   LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default TeamPage;