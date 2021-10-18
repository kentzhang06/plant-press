import React from "react";
import { Link, withRouter } from "react-router-dom";

class FollowsFeed extends React.Component {
  componentDidMount() {
    this.props.fetchFollowingPosts()
      .then(() => this.props.fetchFollows());
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'instant' 
      });
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
          <Link to={`/plant/${post.plantId}`}>
            <p>{post.plantName}</p>
          </Link>
            {followUnfollowButton(post.plantId)}
          </div>
          <div className='img-container'>
            <img className='feed-img' src={post.imageUrl} alt=""/>
          </div>
          <div className='feed-caption'>
            <p className='feed-date'>{date}</p>
            <p className='feed-text'>
              <Link to={`/user/${post.userId}`}>
                <strong>{post.owner}</strong> <br/>
              </Link>
              {post.caption}</p>
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