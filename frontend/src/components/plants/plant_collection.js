import React from 'react';
import { Link } from 'react-router-dom'

class PlantCollection extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchPlants(this.props.userId);
  }

  render() {
    if (!this.props.userPlants) { 
      return null
    }

    return (
      <div className='container-fluid'>
          <ul className='plants-row'>
            {this.props.userPlants.map(plant =>

              <li className='plant-box' key={plant._id}>
                <Link to={`/plant/${plant._id}`}>
                  <div className='plant-img'></div>
                  {plant.name}
                </Link>
              </li>

            )}
          </ul>
        </div>
    )
  }
}

export default PlantCollection;