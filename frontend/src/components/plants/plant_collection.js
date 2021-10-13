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
      <div>
        <ul>
          {this.props.userPlants.map(plant =>
            <Link to={`/plant/${plant._id}`}>
              <li key={plant.id}>{plant.name}</li>
            </Link>
          )}
          {/* will eventually be a plant item component */}
        </ul>
      </div>
    )
  }
}

export default PlantCollection;