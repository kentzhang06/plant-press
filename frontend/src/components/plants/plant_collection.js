import React from 'react';

class PlantCollection extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchPlants(this.props.userId);
  }

  render() {
    console.log(this.props)
    if (!this.props.userPlants) { 
      return null
    }

    return (
      <div>
        <ul>
          {this.props.userPlants.map(plant =>
            <li>{plant.name}</li>
          )}
          {/* will eventually be a plant item component */}
        </ul>
      </div>
    )
  }
}

export default PlantCollection;