import React from "react";
import { Link, withRouter } from "react-router-dom";

class PlantPosts extends React.Component {
  componentDidMount() {
    const { fetchPlantPosts, fetchFollows, match, fetchPlant } = this.props;
    fetchPlant(match.params.plantId);
    fetchPlantPosts(match.params.plantId).then(() => fetchFollows());

    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }

  followPlantButton(e, plantId) {
    e.preventDefault();
    this.props.followPlant(plantId);
  }

  unfollowPlantButton(e, plantId) {
    e.preventDefault();
    this.props.unfollowPlant(plantId);
  }

  render() {
    const { posts, plant, currentUserId, history, deletePost, follows } = this.props;
    if (!posts || !plant) return null;

    const followUnfollowButton = (plantId) => {
      if (follows.includes(plantId)) {
        return (
          <button
            className="follow-btn"
            onClick={(e) => this.unfollowPlantButton(e, plantId)}
          >
            Following
          </button>
        );
      } else {
        return (
          <button
            className="follow-btn"
            onClick={(e) => this.followPlantButton(e, plantId)}
          >
            Follow
          </button>
        );
      }
    };

    const editDeleteButtons = (post) =>
      currentUserId === post.userId ? (
        <div className="plant-detail-btns">
          <button
            className="plant-detail-btn"
            onClick={() =>
              history.push(`/plant/${post.plantId}/post/${post._id}`)
            }
          >
            Edit Post
          </button>
          <button
            className="plant-detail-btn"
            onClick={() => deletePost(post._id)}
          >
            Delete Post
          </button>
        </div>
      ) : (
        <div></div>
      );

    const displayPosts = posts.map((post, i) => {
      let newDate = new Date(post.createdAt);
      const date = newDate.toDateString();
      return (
        <div className="white-box" key={i}>
          <div className="feed-heading flex-row-between">
            <Link to={`/plant/${post.plantId}`}>
              <p>{post.plantName}</p>
            </Link>
            {followUnfollowButton(post.plantId)}
          </div>
          <div className="img-container">
            <img className="feed-img" src={post.imageUrl} alt="" />
          </div>
          <div className="feed-caption">
            <p className="feed-date">{date}</p>
            <p className="feed-text">
              <Link to={`/user/${post.userId}`}>
                <strong>{post.owner}</strong> <br />
              </Link>
              {post.caption}
            </p>
            {editDeleteButtons(post)}
          </div>
        </div>
      );
    });

    return (
      <main className="flex-col-center search-feed">
        <div >
          <h2 >Viewing {plant.name}'s Posts</h2>
        </div>
        {displayPosts}
      </main>
    );
  }
}

export default withRouter(PlantPosts);
