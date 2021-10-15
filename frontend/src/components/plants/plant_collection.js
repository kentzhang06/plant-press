import React from 'react';
import { Link } from 'react-router-dom'
import { RiPlantFill } from 'react-icons/ri';
import { GoPlus } from 'react-icons/go';

class PlantCollection extends React.Component {
  componentDidMount() {
    this.props.fetchPlants(this.props.userId);
    this.props.fetchAllPosts("");
  }

  render() {
    const { userPlants, posts } = this.props;
    if (!userPlants || !posts) { 
      return null
    }
    console.log(this.props)

    const displayPlantProfilePic = (plant) => {
      if (!posts[plant.plantPosts[0]]) {
        return (
          <div className='col-4 plant-row-img'>
            {plant.name.slice(0,1)}
          </div>
        )
      } else {
        return (
          <img className='col-4 plant-row-img'
            src={posts[plant.plantPosts[0]].imageUrl} alt="" />
        )
      }
    }

    return (
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center vertical-center heading'>
          <h4><RiPlantFill className='heading-icon'/>&nbsp;My Collection</h4>
        </div>
        {this.props.userPlants.map((plant, i) => (
          <Link key={i} to={`/plant/${plant._id}`}>
            <div className='row plant-row'>
              {displayPlantProfilePic(plant)}
              <div className='col-8 plant-row-text'>
                <div className='plant-row-info'>
                  <p className='plant-row-name'>{plant.name}</p>
                  <p className='plant-row-type'>{plant.type}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <Link to='/addplant'>
            <div className='row plant-row-light'>
              <div className='col-4 plant-row-img'>
                <GoPlus />
              </div>
              <div className='col-8 plant-row-text'>
                <div className='plant-row-info'>
                  <p className='plant-row-name'>
                    Add A Plant
                  </p>
                </div>
              </div>
            </div>
          </Link>
        <div className='row row-end'></div>
      </div>
    )
  }
}

export default PlantCollection;