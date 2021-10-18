import React from 'react';
import { Link } from 'react-router-dom';
import { ImLeaf } from 'react-icons/im';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const TeamPage = () => {
  const team = [
    {
      dev: 'Danny Feng',
      github: 'https://github.com/dannyfeng1',
      linkedIn: 'https://www.linkedin.com/in/danny-feng1/',
    },
    {
      dev: 'Kent Zhang',
      github: 'https://github.com/kentzhang06',
      linkedIn: 'https://www.linkedin.com/in/kent-zhang-297591193/',
    },
    {
      dev: 'Jason Kim',
      github: 'https://github.com/jasonkim0105',
      linkedIn: 'https://www.linkedin.com/in/jason-kim-0105/',
    },
    {
      dev: 'Jon Zamora',
      github: 'https://github.com/jayzizzle',
      linkedIn: 'https://www.linkedin.com/in/jon-zamora-97a8a6219/',
    },
  ];

  return (
    <div className='team-page'>
      <div className='d-flex justify-content-center space-above'>
        <Link to='/dashboard'>
          <h1 className='title'>
            PlantPress
            <span className='leaf-icon'>
              <ImLeaf />
            </span>
            &nbsp;&nbsp;
          </h1>
        </Link>
        &nbsp;&nbsp;
      </div>

      <div className='d-flex justify-content-center'>
        <h2 className='subtitle'>About Us</h2>
      </div>

      <div className='container-fluid space-above'>
        {team.map((member, i) => (
          <div key={i}>
            <div className='d-flex justify-content-center'>
              <h3 className='purple margin-top'>{member.dev}</h3>
            </div>
            <div className='d-flex justify-content-center'>
              <a href={member.github} target='_blank' rel="noreferrer">
                <FaGithub />
              </a>
              &nbsp;
              <a href={member.linkedIn} target='_blank' rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='row-end'></div>
    </div>
  );
};

export default TeamPage;
