import React from 'react';
import { Link } from 'react-router-dom';
import { RiPlantFill } from 'react-icons/ri';

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
        return <div className='colorbox'>{plant.name.slice(0, 1)}</div>;
      } else {
        return (
          <img
            className='plant-photo'
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
          <h2 className='subtitle heading-height'>
            <RiPlantFill className='heading-icon' />
            &nbsp;My Collection
          </h2>
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
          <div className='white-box flex-row-between collection-box' key={i}>
            <Link key={i} to={`/plant/${plant._id}`}>
              <div className='image-crop'>{displayPlantProfilePic(plant)}</div>
            </Link>
            <div className='flex-col-end collection-type'>
              <Link key={i} to={`/plant/${plant._id}`}>
                <h2>{plant.name}</h2>
              </Link>
              <h6>{plant.type}</h6>
            </div>
          </div>
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
