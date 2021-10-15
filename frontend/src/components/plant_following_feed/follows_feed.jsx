import React from "react";
import { withRouter } from "react-router";

class FollowsFeed extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

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
    const { posts, follows, history } = this.props;
    if (!posts) return null;

    const followUnfollowButton = (plantId) => {
      if (follows.includes(plantId)) {
        return (
          <button onClick={(e) => this.unfollowPlantButton(e, plantId)}>
            Unfollow Plant
          </button>
        )
      }else {
        return (
          <button onClick={(e) => this.followPlantButton(e, plantId)}>
            Follow Plant
          </button>
        )
      }
    }

    const displayPosts = posts.map((post, i) => {
      let newDate = new Date(post.createdAt);
      const time = newDate.toLocaleTimeString("en-US", {timeZone: "America/Los_Angeles"});
      const date = newDate.toDateString();
      
      if (i > 10) return null;
      return (
        <div key={i}>
          <img onClick={() => history.push(`/plant/${post.plantId}`)} src={post.imageUrl} alt="" width="150px" height="auto" />
          <div>
            {date} {time}
          </div>
          <div>
            {post.caption}
          </div>
          {followUnfollowButton(post.plantId)}
        </div>
      )
      
    });

    return(
      <div>
        { displayPosts }
      </div>
    )
  }
}

export default withRouter(FollowsFeed);