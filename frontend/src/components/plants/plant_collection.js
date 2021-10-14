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
        {this.props.userPlants.map((plant, i) => (
          <Link to={`/plant/${plant._id}`}>
            <div className='row plant-row' key={plant._id}>
              <div className='col-4 plant-row-img'>
                {plant.name.slice(0,1)}
              </div>
              <div className='col-8 plant-row-text'>
                {plant.name}
              </div>
          </div>
          </Link>
        ))}
      </div>
    )
  }
}

export default PlantCollection;

{/* <ul className='plants-row'>
  {this.props.userPlants.map(plant =>
    <li className='plant-box' key={plant._id}>
      <Link to={`/plant/${plant._id}`}>
        <div className='plant-img'></div>
        {plant.name}
      </Link>
    </li>
  )}
</ul> */}