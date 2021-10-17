import React from "react";
import { Link, withRouter } from "react-router-dom";

class FollowsFeed extends React.Component {
  componentDidMount() {
    this.props.fetchFollowingPosts()
      .then(() => this.props.fetchFollows());
  }

  followPlantButton(e, plantId) {
    e.preventDefault();
    this.props.followPlant(plantId)
  }

  unfollowPlantButton(e, plantId) {
    e.preventDefault();
    this.props.unfollowPlant(plantId)
  }

  render() {
    const { posts, follows } = this.props;
    if (!posts) return null;

    const followUnfollowButton = (plantId) => {
      if (follows.includes(plantId)) {
        return (
          <button className='follow-btn' onClick={(e) => this.unfollowPlantButton(e, plantId)}>
            Following
          </button>
        )
      }else {
        return (
          <button className='follow-btn' onClick={(e) => this.followPlantButton(e, plantId)}>
            Follow
          </button>
        )
      }
    }

    const displayPosts = posts.map((post, i) => {
      let newDate = new Date(post.createdAt);
      const date = newDate.toDateString();
      
      if (i > 10) return null;
      return (
        <div key={i}>
          <div className='feed-heading'>
            <p>PLANT NAME</p>
            {followUnfollowButton(post.plantId)}
          </div>
          <Link to={`/plant/${post.plantId}`}>
            <div className='img-container'>
              <img className='feed-img' src={post.imageUrl} alt=""/>
            </div>
          </Link>
          <div className='feed-caption'>
            <p className='feed-date'>{date}</p>
            <p className='feed-text'>{post.caption}</p>
          </div>
        </div>
      )
      
    });

    return(
      <div className='container-fluid clear-margin'>
        { displayPosts }
        <div className='row-end'></div>
      </div>
    )
  }
}

export default withRouter(FollowsFeed);