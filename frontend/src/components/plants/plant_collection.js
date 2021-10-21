import React from 'react';
import { Link } from 'react-router-dom';
import { RiPlantFill } from 'react-icons/ri';
import { GoPlus } from 'react-icons/go';

class PlantCollection extends React.Component {
  componentDidMount() {
    this.props.fetchPlants(this.props.userId);
    this.props.fetchAllPosts('');
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { userPlants, posts, user } = this.props;
    if (!userPlants || !posts || !user) {
      return null;
    }

    const displayPlantProfilePic = (plant) => {
      if (!posts[plant.plantPosts[0]]) {
        return <div>{plant.name.slice(0, 1)}</div>;
      } else {
        return (
          <img
            className='plant-row-img'
            src={posts[plant.plantPosts[0]].imageUrl}
            alt=''
          />
        );
      }
    };
    let collectionTitle;
    if (this.props.userId === this.props.currentUserId) {
      collectionTitle = (
        <div className='row d-flex justify-content-center vertical-center heading'>
          <h4>
            <RiPlantFill className='heading-icon' />
            &nbsp;My Collection
          </h4>
        </div>
      );
    } else {
      collectionTitle = (
        <div className='row d-flex justify-content-center vertical-center heading'>
          <h4>
            <RiPlantFill className='heading-icon' />
            &nbsp;{user.handle}'s Collection
          </h4>
        </div>
      );
    }

    return (
      <main className='flex-col-center'>
        {collectionTitle}
        {this.props.userPlants.map((plant, i) => (
          <Link key={i} to={`/plant/${plant._id}`}>
            <div className='white-box flex-row-between collection-box'>
              {displayPlantProfilePic(plant)}
              <div className='collection-text'>
                <h5>{plant.name}</h5>
                <h6>{plant.type}</h6>
              </div>
            </div>
          </Link>
        ))}
        {this.props.userId === this.props.currentUserId ? (
          <Link to='/addplant'>
            <button>Add A Plant</button>
          </Link>
        ) : null}
      </main>
    );
  }
}

export default PlantCollection;
